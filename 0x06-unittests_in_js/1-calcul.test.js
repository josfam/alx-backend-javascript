const assert = require('assert');
const calculateWithType = require('./1-calcul');

describe('round test with types for SUM', () => {
  it('adds correctly when given SUM type', () => {
    assert.strictEqual(calculateWithType('SUM', 0.5, 0.5), 2);
    assert.strictEqual(calculateWithType('SUM', 0.5, 3), 4);
    assert.strictEqual(calculateWithType('SUM', 6, 2.4), 8);
  });
});

describe('round test with types for SUBTRACT', () => {
  it('subtracts correctly when given SUBTRACT type', () => {
    assert.strictEqual(calculateWithType('SUBTRACT', 0.5, 0.5), 0);
    assert.strictEqual(calculateWithType('SUBTRACT', 0.5, 3), -2);
    assert.strictEqual(calculateWithType('SUBTRACT', 6, 2.4), 4);
  });
});

describe('round test with types for DIVIDE', () => {
  it('divides correctly when given DIVIDE type', () => {
    assert.strictEqual(calculateWithType('DIVIDE', 0.4, 0.4), 'Error');
    assert.strictEqual(calculateWithType('DIVIDE', 0, 0.5), 0);
    assert.strictEqual(calculateWithType('DIVIDE', 0.5, 2), 0.5);
    assert.strictEqual(calculateWithType('DIVIDE', 6, 2.4), 3);
  });
});
