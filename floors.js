var fs = require('fs');

if (process.argv.length <3) return;

var file = process.argv[2];

fs.readFile(file, 'utf8', function(err, data) {
	if (err) {
		console.error(err); 
	} else {
		readInputString(data);
	}
});

function readInputString(data) {
	var floors = 0;
	for (var i = 0; i < data.length; i++) {
		var current = data.charAt(i);
		if (current == '(') floors++;
		if (current == ')') floors--;
		if (floors == -1) console.log('Hit Basement on character: ', i + 1)
	}
	console.log(floors);
}