// ^ > v < 

var fs = require('fs');

var atLeast1Present = 0,
		duplicates = 0;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	var count = { '<': 0, '>': 0, '^': 0, 'v': 0 };

	var values = {},
			startX = 0, 
			startY = 0;

	inputValue(values, startX, startY);
	atLeast1Present++;

	for (var k = 1; k < data.length; k++) {
		var currentChar = data.charAt(k);
		switch (currentChar) {
			case '>':
				startX++;
				inputValue(values, startX, startY);
				break;
			case '<':
				startX--;
				inputValue(values, startX, startY);
				break;
			case '^':
				startY++;
				inputValue(values, startX, startY);
				break;
			case 'v':
				startY--;
				inputValue(values, startX, startY);
				break;
		}
	}
	console.log(count, atLeast1Present, duplicates, data.length);
});

function handleValue(values, x, y) {
	if (!values[x][y]) {
		atLeast1Present++;
		values[x][y] = true;
	} else {
		duplicates++;
	}
}

function formatKey(x, y) {
	return x + ',' + y;
}

function inputValue(values, x, y) {
	var key = formatKey(x, y);
	if (!values[key])  {
		values[key] = true
		atLeast1Present++;
	} else {
		duplicates++;
	}
}