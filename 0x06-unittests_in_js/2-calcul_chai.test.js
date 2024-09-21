const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('round test with types for SUM', () => {
  it('adds correctly when given SUM type', () => {
    expect(calculateNumber('SUM', 0.5, 0.5)).to.equal(2);
    expect(calculateNumber('SUM', 0.5, 3)).to.equal(4);
    expect(calculateNumber('SUM', 6, 2.4)).to.equal(8);
  });
});

describe('round test with types for SUBTRACT', () => {
  it('subtracts correctly when given SUBTRACT type', () => {
    expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0.5, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 6, 2.4)).to.equal(4);
  });
});

describe('round test with types for DIVIDE', () => {
  it('divides correctly when given DIVIDE type', () => {
    expect(calculateNumber('DIVIDE', 0, 0.5)).to.equal(0);
    expect(calculateNumber('DIVIDE', -4, 16)).to.equal(-0.25);
    expect(calculateNumber('DIVIDE', 0.5, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 6, 2.4)).to.equal(3);
  });

  it('shows error when b is 0', () => {
    expect(calculateNumber('DIVIDE', 4, 0.4)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -1.5, 0.0)).to.equal('Error');
  });
});
