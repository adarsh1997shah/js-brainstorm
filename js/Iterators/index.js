// 1. Create an iterator with a next method that returns each value of the array when .next is called.

function nextIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  
  return {
    next: () => {
      const ele = arr[i];
      i++;
      
      return ele;
    }
  }
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3




// 2. Write code to iterate through an entire array using your nextIterator and sum the values.

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  const iteratorWithNext = nextIterator(arr);
  let sum = 0;
  let i = iteratorWithNext.next();
  
	while(i) {
    sum += i;
    i = iteratorWithNext.next();
  }
  
  return sum;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10





// 3. Create an iterator with a next method that returns each value of a set when .next is called

function setIterator(set) {
	// YOUR CODE HERE
	const i = set.values();

	return {
		next: () => {
			return i.next().value;
		},
	};
}

// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'





// 4. Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.

function indexIterator(arr) {
  // YOUR CODE HERE
	let i = 0;
  
  return {
    next: () => {
      const ele = arr[i];
      const index = i;
      i++;
      
      return [index, ele];
    }
  }
}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']




// 5. Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!). Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
  const words = this.str.split(" ");
  let i = 0;
  
	return { 
		next: () => {
      const value = words[i];
      const currentIndex = i;
      i++
      
      if(currentIndex === words.length) {
        return {done: true};
      }
      
      return {done: false, value}
    }
	}
}

// Uncomment the lines below to test your work
// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'





// 6. Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'. Do not use any type of loop constructor and only make the call to createConversation once.

function valueAndPrevIndex(array){
  let i = 0;
  
	return {
    sentence: () => {
      const ele = array[i];
      const currentIndex = i;
      i++;
      
      if(currentIndex === 0) {
        return `${ele} is the first`
      }
      
      return `${ele} was found after index ${currentIndex - 1}`
    }
  }
}

// const returnedSentence = valueAndPrevIndex([4,5,6])
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());
// console.log(returnedSentence.sentence());






// 7. Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'. Do not use any type of loop constructor and only make the call to createConversation once.

function* createConversation(string) {
	setInterval(() => {
    	if(string === 'english') {
        console.log('hello there');
      } else {
        console.log('gibberish')
      }
  	},
  3000);
}

// console.log(createConversation('english').next());






// 8. Use async/await to console.log a sentence comprised of a noun and verb in which the non async function takes in a noun, concatenates it with a hard coded verb and returns it to the async function to be console.logged after a duration of 3 seconds. Call the async function only once, feeding it a noun to make this happen.

function waitForVerb(noun) {
	return `${noun} barked`;
}

async function f(noun) {
	const sentence = waitForVerb(noun);

	return new Promise((resolve) =>
		setTimeout(() => {
			console.log(sentence);
			resolve();
		}, 3000)
	);
}

// f('dog');
