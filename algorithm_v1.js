var doSearch = function(array, guess) {
	var indexMin = 0;
	var indexMax = array.length - 1;
	var indexMid = Math.floor((indexMin + indexMax) / 2);

	while(indexMin < indexMax) {
		var midValue = array[indexMid];
		if (guess === midValue) {
			return indexMid;
		} else if(guess < midValue) {
			indexMax = indexMid - 1;
			// Testing the edge case!
			if (array[indexMax] === guess) {
				return indexMax;
			}
			indexMid = Math.floor((indexMin + indexMax) / 2);
		} else {
			indexMin = indexMid + 1;
			// Testing the edge case!
			if (array[indexMax] === guess) {
				return indexMax;
			}
			indexMid = Math.floor((indexMin + indexMax) / 2);
		}
	}
	return -1;
};

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 1089);
console.log("Found prime at index " + result);

// Instead of 'console.log()', the following was used by Khan Academy:
// println("Found prime at index " + result);