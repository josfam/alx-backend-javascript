const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils  = require('./utils');
const { expect } = require('chai');
const assert = require('assert');

describe('Utils.calculateNumber', () => {
  describe('when type is SUM', () => {
    it('it round the first argument', () => {
        assert.equal(Utils.calculateNumber('SUM', 1.0, 0), 1);
        assert.equal(Utils.calculateNumber('SUM', 1.3, 0), 1);
        assert.equal(Utils.calculateNumber('SUM', 1.7, 0), 2);
    });
    
    it('it round the second argument', () => {
        assert.equal(Utils.calculateNumber('SUM', 0, 1.0), 1);
        assert.equal(Utils.calculateNumber('SUM', 0, 1.3), 1);
        assert.equal(Utils.calculateNumber('SUM', 0, 1.7), 2);
    });
    
    it('it should return the right number', () => {
        assert.equal(Utils.calculateNumber('SUM', 1.3, 0), 1);
        assert.equal(Utils.calculateNumber('SUM', 0, 1.2), 1);
        assert.equal(Utils.calculateNumber('SUM', 1.3, 1.3), 2);
        assert.equal(Utils.calculateNumber('SUM', 1.7, 1.2), 3);
        assert.equal(Utils.calculateNumber('SUM', 1.3, 1.8), 3);
        assert.equal(Utils.calculateNumber('SUM', 1.6, 1.8), 4);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('it round the first argument', () => {
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.0, 0), 1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.3, 0), 1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.7, 0), 2);
    });
    
    it('it round the second argument', () => {
        assert.equal(Utils.calculateNumber('SUBTRACT', 0, 1.0), -1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 0, 1.3), -1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 0, 1.7), -2);
    });
    
    it('it should return the right number', () => {
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.3, 0), 1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 0, 1.2), -1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.3, 1.3), 0);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.7, 1.2), 1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.3, 1.8), -1);
        assert.equal(Utils.calculateNumber('SUBTRACT', 1.6, 1.8), 0);
    });
  });

  describe('when type is DIVIDE', () => {
    it('it round the first argument', () => {
        assert.equal(Utils.calculateNumber('DIVIDE', 10.0, 2), 5);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.7, 2), 5.5);
    });
    
    it('it round the second argument', () => {
        assert.equal(Utils.calculateNumber('DIVIDE', 10, 1.0), 10);
        assert.equal(Utils.calculateNumber('DIVIDE', 10, 1.3), 10);
        assert.equal(Utils.calculateNumber('DIVIDE', 10, 1.7), 5);
    });
    
    it('it should return the right number', () => {
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 2), 5);
        assert.equal(Utils.calculateNumber('DIVIDE', 10, 1.2), 10);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 1.3), 10);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.7, 1.2), 11);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 1.8), 5);
        assert.equal(Utils.calculateNumber('DIVIDE', 10.6, 1.8), 5.5);
    });

    it('it should return Error if b is equal to 0', () => {
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 0).toLowerCase(), 'error');
        assert.equal(Utils.calculateNumber('DIVIDE', 10.7, 0).toLowerCase(), 'error');
        assert.equal(Utils.calculateNumber('DIVIDE', 10.3, 0.3).toLowerCase(), 'error');
        assert.equal(Utils.calculateNumber('DIVIDE', 10.7, 0.2).toLowerCase(), 'error');
    });
  });
});

describe('sendPaymentRequestToApi', () => {
  it('uses Utils.calculateNumber with SUM and the expected arguments', () => {
    // spy on the Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');
    // call the test function
    sendPaymentRequestToApi(50, 5);
    // check if spied on function was called once
    expect(spy.calledOnce).to.be.true;
    // check if spied on function was given the expected args
    expect(spy.calledWith('SUM', 50, 5)).to.be.true;

    // Restore the original function
    spy.restore;
  });
});