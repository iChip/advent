// input = ckczppom
var md5 = require('md5');

var currentInt = 1;
var inputString = 'ckczppom'
var hashString = inputString + currentInt.toString();

function validateHash(toHash) {
	var hashString = md5(toHash);
	return hashString.substring(0, 5) == '00000';
}

while (!validateHash(hashString)) {
	currentInt++;
	hashString = inputString + currentInt.toString();
}

console.log(currentInt, hashString, md5(hashString))