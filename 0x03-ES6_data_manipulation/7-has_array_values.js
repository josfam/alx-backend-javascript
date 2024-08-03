export default function hasValuesFromArray(set, array) {
  // function
  const isInSet = (element) => set.has(element);
  return array.every(isInSet);
}
