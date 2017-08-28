
var loop;
var newArray = [];
var count = 0;

function design(list)
{

	console.log("********************");
	console.log(count+":"+" "+list);
	count++;
	console.log("********************");
}

while(loop !== "quit")
{
    loop = prompt(" TODO LIST");

    if(loop == "new")
    {
    	newArray.push( prompt("Create a new To do"));

    }
    else if (loop == "list")
    {
    	newArray.forEach(design);
    }
    else if(loop == "delete")
    {
    	
    }

}
