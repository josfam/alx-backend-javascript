export default function cleanSet(set, startString) {
  if (!startString || !(typeof startString === 'string')) {
    return '';
  }

  const parts = [];
  for (const word of set) {
    if (word.startsWith(startString)) {
      const startIndex = startString.length;
      parts.push(word.slice(startIndex));
    }
  }
  return parts.join('-');
}
