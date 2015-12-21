var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) {
		console.error(err)
	} else {
		var total = 0;
		data.split('\n').forEach(function(line) {
			var dimensions = parseDimensions(line);
			total += area(dimensions)
		});
		console.log(total);
	}
});

function area(dimensions) {
	var first = dimensions.l * dimensions.w,
			second = dimensions.w * dimensions.h,
			third = dimensions.h * dimensions.l;
	return 2*first + 2*second + 2*third + Math.min(first, second, third);
}

function parseDimensions(line) {
	var dimensions = line.split('x');
	return {
		l: parseInt(dimensions[0], 10),
		w: parseInt(dimensions[1], 10),
		h: parseInt(dimensions[2], 10)
	};
}

