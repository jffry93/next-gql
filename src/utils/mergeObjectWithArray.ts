export function mergeObjectWithArray<T extends Record<string, any>>(
  obj: T,
  arr: any[],
  idKey: keyof T,
  defaultObj: any
): any {
  const matchedObj = arr.find((item) => item[idKey] === obj[idKey]);
  const mergedObj = matchedObj
    ? { ...matchedObj, ...obj }
    : { ...defaultObj, ...obj };

  if (matchedObj) {
    // Update matched object in the array
    const index = arr.indexOf(matchedObj);
    arr[index] = mergedObj;
  } else {
    // Push merged object to the array
    arr.push(mergedObj);
  }

  return { ...mergedObj, ...matchedObj };
}
