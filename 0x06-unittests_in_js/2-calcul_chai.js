function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  } else if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } else if (type === 'DIVIDE') {
    const result = Math.round(a) / Math.round(b);
    if (Number.isNaN(result)) {
      return 'Error'
    }
    return result;
  } else {
    return 'Not a valid type of operation';
  }
}

export default calculateNumber;
