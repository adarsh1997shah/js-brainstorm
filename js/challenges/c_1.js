// ['[', '{', '(', ')', '{', '}', ']'] should return false.
// Bracket comparison.

const bracketsMap = {
	'[': ']',
	'{': '}',
	'(': ')',
};

function compareBracket(arr) {
	const checkBracket = arr.reduce((acc, bracket) => {
		if (Object.keys(bracketsMap).includes(bracket)) {
			acc.push(bracket);
		} else {
			const openBracketIndex = arr.findIndex((brack) => bracketsMap[brack] === bracket);

			if (openBracketIndex > -1) {
				acc.splice(openBracketIndex, 1);
			}
		}

		return acc;
	}, []);

	if (checkBracket.length) {
		return false;
	}

	return true;
}

console.log(compareBracket(['[', '{', '(', ')', '{', '}', ']']));
