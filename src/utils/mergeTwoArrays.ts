//compare two arrays and merge if match or merge default object

export function mergeTwoArrays<T extends Record<string, any>>(
	arr1: T[],
	arr2: T[],
	idKey: keyof T,
	defaultObj: any
): T[] {
	const mergedArr: T[] = [];

	// Loop through arr2 and merge objects with matching id
	for (const obj2 of arr2) {
		const obj1 = arr1.find((obj) => obj[idKey] === obj2[idKey]);
		if (obj1) {
			// Merge objects
			const mergedObj = { ...obj1, ...obj2 };
			mergedArr.push(mergedObj);
		} else {
			// Merge with default object
			const mergedObj = { ...defaultObj, ...obj2 };
			mergedArr.push(mergedObj);
		}
	}

	// Merge remaining objects from arr1 with default object
	for (const obj1 of arr1) {
		const obj2 = arr2.find((obj) => obj[idKey] === obj1[idKey]);
		if (!obj2) {
			const mergedObj = { ...defaultObj, ...obj1 };
			mergedArr.push(mergedObj);
		}
	}

	return mergedArr;
}
