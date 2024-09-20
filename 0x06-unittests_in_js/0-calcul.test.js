const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('round test', function() {
  it('checks values less than .5 are not rounded', function() {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it ('checks the result if only the first number is rounded', function() {
    assert.strictEqual(calculateNumber(0.3, 4), 4);
  });

  it ('checks the result if only the second number is rounded', function() {
    assert.strictEqual(calculateNumber(4, 0.3), 4);
  });

  it ('checks if 0s return the correct sum', function() {
    assert.strictEqual(calculateNumber(0.00, 0.0), 0);
  });

  it ('checks that numbers above .5 are rounded', function() {
    assert.strictEqual(calculateNumber(0.5, 0.9), 2);
  });

  it ('checks that negative numbers are rounded properly', function() {
    assert.strictEqual(calculateNumber(-3.0, -0.9), -4);
  });
});
