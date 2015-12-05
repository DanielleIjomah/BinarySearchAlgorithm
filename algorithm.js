var calcMid = function(min, max) {
	return Math.floor((min + max) / 2);
}

var doSearch = function(array, guess) {
	var indexMin = 0;
	var indexMax = array.length - 1;
	var indexMid = calcMid(indexMin, indexMax);

	while(indexMin < indexMax) {
		midValue = array[indexMid];
		if (guess === midValue) {
			return indexMid;
		} else if(guess < midValue) {
			indexMax = indexMid - 1;
			// Testing the edge case!
			if (array[indexMax] === guess) {
				return indexMax;
			}
			indexMid = calcMid(indexMin, indexMax);
		} else {
			indexMin = indexMid + 1;
			// Testing the edge case!
			if (array[indexMax] === guess) {
				return indexMax;
			}
			indexMid = calcMid(indexMin, indexMax);
		}
	}
	return -1;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 11);
console.log("Found prime at index " + result);