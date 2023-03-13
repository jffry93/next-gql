// IMPORTANT NOTE ABOUT FUNCTION
// Takes 2 arrays and merges the objects from them.

// Returns the length of the 2nd array
// array much be two objects
// returns types from both objects

export function mergeTwoArrays<
	T extends Record<string, any>,
	U extends Record<string, any>
>(
	arr1: T[],
	arr2: U[],
	idKey: string,
	defaultObj: any
): Array<(T & U) & Partial<typeof defaultObj>> {
	const mergedArr: Array<(T & U) & Partial<typeof defaultObj>> = [];

	const map = new Map();

	for (const obj1 of arr1) {
		map.set(obj1[idKey], { ...obj1 });
	}

	for (const obj2 of arr2) {
		if (map.has(obj2[idKey] as string)) {
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
