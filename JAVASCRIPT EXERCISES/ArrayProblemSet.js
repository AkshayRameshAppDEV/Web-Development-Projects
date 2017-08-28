var reverseArray = [];
var j=0;
function printReverse(numArray)
{
	for (var i = numArray.length - 1; i >= 0; i--) 
	{
		reverseArray[j] = numArray[i];
		j++;
	}
	return reverseArray;
}
function isUniform(uniformArray)
{
	for (var i = 0; i < uniformArray.length; i++) 
	{
		for(var k = 1;k<uniformArray.length-1;i++)
		{
			if(uniformArray[i] == uniformArray[k])
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		
	}
}

var total=0;

function sumArray(sumarray)
{
	for (var i = sumarray.length - 1; i >= 0; i--) 
	{
		total += sumarray[i];
	};
	return total;
}

var tempNumber=0;
function maxi(maxArray)
{
	for (var i = 0; i < maxArray.length; i++) 
	{
		 if(tempNumber < maxArray[i])
		 {
		 	tempNumber = maxArray[i];
		 }
	}
	return tempNumber;
}

console.log(printReverse([1,2,3,4,5,6,7,8,9,10,20,30,40,50]));
console.log(isUniform([1,1,1,1,1]));
console.log(sumArray([1,1,1,1,1,2]));
console.log(maxi([3,5,6,2,4,8,9,7,24,,-1,200,-2,22,10]));
