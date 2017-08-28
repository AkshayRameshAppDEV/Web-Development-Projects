function isEven(num)
{
	if(num % 2 === 0)
	{
		return true;
	}

	else
	{
		return false;
	}
}

function factorial(num)
{
	if (num === 0)
	{
		return 1;
	}
	var i = 1;
	var mult =1;
	while(i <= num)
	{
		mult = mult * i;
		i++;
	}
	return mult;
}
function kebabToSnake(word)
{
	var i;
	var modifiedWord = word;
	for (i = 0; i <modifiedWord.length; i++) 
	{
  		
 	 	if(modifiedWord.charAt(i) == "-")
 	 	{
 	 		modifiedWord = modifiedWord.replace(word.charAt(i),"_");
 	 	}
 	 	
 	 	
	}
	return modifiedWord;
	
}


 

console.log(isEven(4) +" " +isEven(21) + " "+isEven(68) + " "+isEven(33));
console.log(factorial(5) +" " +factorial(2) + " "+factorial(10) + " "+factorial(0));
console.log(kebabToSnake("Akshay-Ramesh-Sat-mat"));
console.log(kebabToSnake("Akshay"));
console.log(kebabToSnake("Akshay_Ramesh"));