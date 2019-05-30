module.exports = function main(inputs) {
    // write your code here...
	let attributes = Object.keys(inputs);
	let part1 = 0.25 * inputs[attributes[1]];
	let part2 = 0;
	let distance = inputs[attributes[0]];
	if(distance < 2){
		part2 = 6;
	}else if(distance > 8){
		part2 = 10.8 + 1.2 * (distance - 8);
	}else{
		part2 = 6 + 0.8 * (distance - 2);
	}
    return Math.round(part1 + part2);
};
