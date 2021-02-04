/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
	
	if((string.length === 0) || (size === 0))
		return '';

	if(size === undefined)
		return string;

	let symbolsCount = 0;
	let result = [];
	
	result[0] = string[0];
	for(let i = 1; i < string.length; ++i) {
		if(string[i] === string[i-1]){
			++symbolsCount;
			}
		else {
			symbolsCount = 0;
		}

		if(symbolsCount < size)
			result.push(string[i]);
	}

	return result.join('');
}
