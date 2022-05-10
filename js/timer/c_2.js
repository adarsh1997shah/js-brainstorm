function debounce(callback, interval) {
	// ADD CODE HERE
	let id = null;

	return () => {
		if (id) {
			clearTimeout(id);
		}

		id = setTimeout(() => console.log(callback()), interval);
	};
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() {
	return 'hi';
}
const giveHiSometimes = debounce(giveHi, 3000);

// check out https://css-tricks.com/debouncing-throttling-explained-examples/
