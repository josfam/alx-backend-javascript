const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils  = require('./utils');
const { expect } = require('chai');

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