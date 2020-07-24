const assert = require('assert');

describe('Multiples of 3 and 5 Test', () => {
	it('should return Musical', () => {
		var mult3_5 = [15, 30, 45, 60, 75, 90];
		for (var i=0; i<mult3_5.length; i++ ) {
			assert.equal(multiple1(mult3_5[i],3) && multiple1(mult3_5[i],5), 'Musical');
		}
	});
});

describe('Multiples of 5 Test', () => {
	it('should return TI', () => {
		var mult_5 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
		for (var i=0; i<mult_5.length; i++ ) {
			assert.equal(multiple2(mult_5[i],5), 'TI');
		}
	});
});

describe('Multiples of 3 Test', () => {
	it('should return Music', () => {
		var mult_3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99];
		for (var i=0; i<mult_3.length; i++ ) {
			assert.equal(multiple3(mult_3[i],3), 'Music');
		}
	});
});

function multiple1(value, multiple) {
    var resto = value % multiple;
    if (resto === 0) {
      return 'Musical';
    } 
    return false;
}

function multiple2(value, multiple) {
    var resto = value % multiple;
    if (resto === 0) {
      return 'TI';
    } 
    return false;
}

function multiple3(value, multiple) {
    var resto = value % multiple;
    if (resto === 0) {
      return 'Music';
    } 
    return false;
}