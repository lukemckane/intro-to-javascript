let numberOne = 4;
let numberTwo = 3;

function numberCompare(incNumOne, incNumTwo) {
	if (incNumOne == incNumTwo) {
		alert("The numbers are equal! The number was " + incNumOne);
	} else if (incNumOne > incNumTwo) {
		alert("The first number was greater than the second number!")
	} else {
		alert("The second number was greater than the first number!")
	}
}

numberCompare(numberOne, numberTwo)