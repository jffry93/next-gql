export function mergeObjectWithArray<
	T extends Record<string, any>,
	U extends Record<string, any>
>(obj: T, arr: U[], idKey: string, defaultObj: any): T & U {
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

	// Return merged object with correct type
	return mergedObj as T & U;
}
