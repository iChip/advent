var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if (err) {
		console.error(err)
	} else {
		var totalArea = 0, 
			totalRibbon = 0;

		data.split('\n').forEach(function(line) {
			var dimensions = parseDimensions(line);
			totalArea += wrappingArea(dimensions);
			totalRibbon += ribbonLength(dimensions);
		});
		console.log(totalArea, totalRibbon);
	}
});

function wrappingArea(dimensions) {
	var first = dimensions.l * dimensions.w,
			second = dimensions.w * dimensions.h,
			third = dimensions.h * dimensions.l;
	return 2*first + 2*second + 2*third + Math.min(first, second, third);
}

function ribbonLength(dimensions) {
	var lwh = [ dimensions.h, dimensions.l, dimensions.w ];
	lwh.sort(function(a, b) { return a - b; });

	var smallest = lwh[0];
	var secondSmallest = lwh[1];
	var sides =  2 * smallest + 2 * secondSmallest;	
	var bow = dimensions.h * dimensions.l * dimensions.w;
	return sides + bow;
}

function parseDimensions(line) {
	var dimensions = line.split('x');
	return {
		l: parseInt(dimensions[0], 10),
		w: parseInt(dimensions[1], 10),
		h: parseInt(dimensions[2], 10)
	};
}

