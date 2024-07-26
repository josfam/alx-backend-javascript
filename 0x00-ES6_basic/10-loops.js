export default function appendToEachArrayValue(array, appendString) {
  // get both the index and word with entries
  for (let [idx, word] of array.entries()) {
    array[idx] = `${appendString}${word}`;
  }

  return array;
}
