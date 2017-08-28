var player1ScoreCount = 0;
var gameover = false;

var player1ScoreSpan = document.getElementById("player1score");
var player1Button = document.getElementById("player1button");
var numInput = document.getElementById("playingUntilInput");
var numInputSpan = document.getElementById("playingUntilSpan");
var winningScore;

player1Button.addEventListener("click",function()
											{
											   
											   if(!gameover)
											   {
											   		player1ScoreCount++;
											   		if(player1ScoreCount === winningScore)
											   		{
											   			player1ScoreSpan.classList.add("winner");
											   			gameover = true;
											   		}	
											   	 	player1ScoreSpan.textContent = player1ScoreCount;
											   }
											  
										    }
                              );


var player2ScoreCount = 0;
var player2ScoreSpan = document.getElementById("player2score");
var player2Button = document.getElementById("player2button");

player2Button.addEventListener("click",function()
											{
												if(!gameover)
												{
													player2ScoreCount++;
													if(player2ScoreCount === winningScore)
											   		{
											   			player2ScoreSpan.classList.add("winner");
											   			gameover = true;
											   		}
											   		player2ScoreSpan.textContent = player2ScoreCount;
												}
											   
											   
										    }
                              );

var resetButton = document.getElementById("resetbutton");

 resetButton.addEventListener("click",function()
 											{

											  reset();
 										    }
                             );


 function reset()
 {
 	 										   player1ScoreCount = 0;
											   player2ScoreCount = 0;
 											   player1ScoreSpan.textContent = player1ScoreCount;
 											   player2ScoreSpan.textContent = player2ScoreCount;



 											   player1ScoreSpan.classList.remove("winner");
 											   player2ScoreSpan.classList.remove("winner");
 											   gameover = false;
 }

 numInput.addEventListener("change",function()
 							{
 								
 								
 								numInputSpan.textContent = numInput.value;
 								winningScore = Number(numInput.value);
 								reset();
 							}
 						  );






