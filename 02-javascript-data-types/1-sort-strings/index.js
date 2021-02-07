/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
	const arrCopy = arr.slice();
	let direction;

	if(param === 'desc') {
		direction = -1;
	} else if(param == 'asc') {
		direction = 1;
	} else {
		return arr;
	}

	return arrCopy.sort((string1, string2) => direction * string1.localeCompare(string2, ['ru', 'en'], {caseFirst:"upper"}));	
}
