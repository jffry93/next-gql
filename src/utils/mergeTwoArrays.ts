export function mergeTwoArrays<T extends Record<string, any>>(
  arr1: T[],
  arr2: T[],
  idKey: keyof T,
  defaultObj: any
): T[] {
  const mergedArr: T[] = [];

  const map = new Map();

  for (const obj1 of arr1) {
    map.set(obj1[idKey], { ...obj1 });
  }

  for (const obj2 of arr2) {
    if (map.has(obj2[idKey])) {
      // Merge objects
      const obj1 = map.get(obj2[idKey]);
      const mergedObj = { ...obj1, ...obj2 };
      mergedArr.push(mergedObj);
      map.delete(obj2[idKey]);
    } else {
      // Merge with default object
      const mergedObj = { ...defaultObj, ...obj2 };
      mergedArr.push(mergedObj);
    }
  }

  return mergedArr;
}
