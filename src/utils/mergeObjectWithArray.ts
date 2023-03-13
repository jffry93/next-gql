// IMPORTANT NOTE ABOUT FUNCTION
// Compares object to object in array and combines if the keyId matches. If the keyId doesn't match it ill create a defaultValue
// Returns the length of the 2nd array
// array much be two objects
// returns types from both objects

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
