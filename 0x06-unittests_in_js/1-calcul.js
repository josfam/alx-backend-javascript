function calculateNumber(a, b, type) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    return Math.round(a) / Math.round(b);
  } else {
    console.log('Not a valid type of operation');
  }
}

module.exports = calculateNumber;
