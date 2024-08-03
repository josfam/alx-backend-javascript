export default function hasValuesFromArray(set, array) {
  const arrayAsSet = new Set(array);
  return arrayAsSet.isSubsetOf(set);
}
