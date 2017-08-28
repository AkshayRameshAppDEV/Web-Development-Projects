var secretNumber = 4;
var stringNumber = prompt("Guess a number and I will tell you whether, you have guessed correctly or not!");
var guessNumber = Number(stringNumber);


if(guessNumber === 4)
{
	alert("You have guessed it correctly");
}
else if(guessNumber > secretNumber)
{
	alert("It is too high!!")
}
else if(guessNumber < secretNumber)
{
	alert("It is too low");
}
