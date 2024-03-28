let guess = 5;
let answer = 5;

function guessTheNumber(incGuess) {
	if (incGuess == answer){
		alert('You win! The answer was ' + answer + '!');
	} else if (incGuess > answer) {
		alert('Your guess was too high!') 
	} else {
		alert('Your guess was too low!')
	}
}

guessTheNumber(guess);