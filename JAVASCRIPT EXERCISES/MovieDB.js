var moviesDetails = [
					{
					  title:"In Bruges",
					  rating: "5",
					  hasWatched: true
					},
					{
					  title:"Frozen",
					  rating: "4.5",
					  hasWatched: false
					},
					{
					  title:"Mad Max Fury Road",
					  rating: "5",
					  hasWatched: true
					},
					{
					  title:"Les Miserables",
					  rating: "3.5",
					  hasWatched: false
					}

					];
// console.log(moviesDetails[0].title);
// console.log(moviesDetails[0].rating);
// console.log(moviesDetails[0].hasWatched);

for(var i=0;i<moviesDetails.length;i++)
{
	if(moviesDetails[i].hasWatched == true)
	{
		console.log("You have watched "+"\""+moviesDetails[i].title+"\""+" and has rating of "+moviesDetails[i].rating);
	}
	else if(moviesDetails[i].hasWatched == false)
	{
		console.log("You haven't watched "+"\""+moviesDetails[i].title+"\""+" and has rating of "+moviesDetails[i].rating);
	}

}