var age = prompt("What is your age?");

if(age < 0)
{
	alert("it is a negative number");
}
else if(age === 21)
{
	alert("Happy 21st Birthday!");
}
else if(!(age%2===0))
{
	alert("It is a odd number");
}
else if(age % Math.sqrt(age) == 0)
{
	alert("Your age is perfect square!!!");
}