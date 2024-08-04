export const weakMap = new WeakMap();

export const queryAPI = function queryAPI(endpoint) {
  // add the endpoint to the map
  if (!(weakMap.has(endpoint))) {
    weakMap.set(endpoint, 1);
  } else {
    // update the count, and check for high load
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  }
};
