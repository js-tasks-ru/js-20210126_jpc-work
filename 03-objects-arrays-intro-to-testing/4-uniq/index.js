/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
	let result = [];
	let set = new Set(arr);
	
	for(let value of set.values()) result.push(value);

	return result;
}
