const assert = require('assert');
const calculateWithType = require('./1-calcul');

describe('round test with types', () => {
  it('adds correctly when given SUM type', () => {
    assert.strictEqual(calculateWithType(0.5, 0.5, 'SUM'), 2);
    assert.strictEqual(calculateWithType(0.5, 3, 'SUM'), 4);
    assert.strictEqual(calculateWithType(6, 2.4, 'SUM'), 8);
  });

  it('subtracts correctly when given SUBTRACT type', () => {
    assert.strictEqual(calculateWithType(0.5, 0.5, 'SUBTRACT'), 0);
    assert.strictEqual(calculateWithType(0.5, 3, 'SUBTRACT'), -2);
    assert.strictEqual(calculateWithType(6, 2.4, 'SUBTRACT'), 4);
  });

  it('divides correctly when given DIVIDE type', () => {
    assert(isNaN(calculateWithType(0.4, 0.4, 'DIVIDE')));
    assert.strictEqual(calculateWithType(0.5, 0.5, 'DIVIDE'), 1);
    assert.strictEqual(calculateWithType(0.5, 2, 'DIVIDE'), 0.5);
    assert.strictEqual(calculateWithType(6, 2.4, 'DIVIDE'), 3);
  });
});
