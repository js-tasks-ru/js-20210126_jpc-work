/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
	const arrCopy = arr.slice();

	if(param === 'desc') {
		return arrCopy.sort((string1, string2) => -string1.localeCompare(string2, ['ru', 'en'], {caseFirst:"upper"}));
	} else if(param == 'asc') {
		return arrCopy.sort((string1, string2) => string1.localeCompare(string2, ['ru', 'en'], {caseFirst:"upper"}));	
	}

	return arr;
}
