/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
	const properties = path.split('.');

	return function (obj) {
		for(let property of properties)	{
			if(property in obj)	{
				if(typeof obj[property] === "object") {
					obj = obj[property];
				}
				else {
					return obj[property];
				}
			}
			else{
				return;
			}
		}
	}
}
