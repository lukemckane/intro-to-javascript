let stringOne = 'hello';
let stringTwo = 'bello';

function sameString(incStringOne, incStringTwo) {
	if (incStringOne == incStringTwo) {
		alert('They are the same! Both strings say ' + incStringOne);
	} else {
		alert('They are not the same! The first string says ' + incStringOne + ' and the second string says ' + incStringTwo);
	}
}

sameString(stringOne, stringTwo);