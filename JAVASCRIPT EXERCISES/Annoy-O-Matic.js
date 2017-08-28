/*
Are we there yet
no
Are we there yet
not yet
Are we there yet
no
*/

var answer = prompt("are we there yet?");
console.log(answer);
while(answer == "no" || answer == "not yet")
{
	answer = prompt("are we there yet?");
}
alert("YES WE ARE!!!!!!!!!!!!!!!!!!!!!");


