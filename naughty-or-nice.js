var fs = require('fs');

var forbidden = ['ab', 'cd', 'pq', 'xy'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

fs.readFile('input/5.txt', 'utf8', function(err, data) {
	if (err) {
		console.error(err); 
		return;
	}
	var result = data.split('\n').reduce(function(previous, current) {
		return previous + naughtyOrNice(current);
	}, 0);

	console.log('RESULT: ', result);
});

function naughtyOrNice(line) {
	for (var i = 0; i < forbidden.length; i++) {
		if (line.indexOf(forbidden[i]) > -1) return false;
	}

	var lineChars = line.split('');

	var hasThreeVowels = countVowels(lineChars) > 2;
	var hasDoubleChar = hasCharPair(lineChars);

	return hasThreeVowels && hasDoubleChar;
}

function countVowels(lineChars) {
	return lineChars.reduce(function(previous, current) {
		if (vowels.indexOf(current) > -1) return previous++;
	}, 0);
}

function hasCharPair(lineChars) {
	for (j = 0; j < lineChars.length; j++) {
		if (j > 0 && lineChars[j-1] == lineChars[j]) return true;
	}
	return false;
}