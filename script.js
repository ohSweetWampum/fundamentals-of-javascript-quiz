// A start button is present, once the user clicks it then a timer starts and the first question appears with multiple choice buttons below it
//upon clicking 1 of the 4 multple choice buutons, their response is stored and the next question pops up
//If the users clicks a wrong answer then time is subsracted from the clock
//when all questions are answered or the timer reaches 0, then the game ends
//upon the game ending a screen pops up showing high scores and you can enter your initials to save your score on the leaderboard


// encapsulated my code in this eventlistener, which waits until page is loaded before executing the JS code
document.addEventListener("DOMContentLoaded", function() {

  
var countdownClock = document.getElementById("countdown");

 var secondsLeft = 120;


 document.getElementById("start-timer-now-button").addEventListener("click", function(){
 function timeLeftClock(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        countdownClock.textContent = secondsLeft + " seconds left!";
        if( answer === false){
            secondsLeft-=7;
            countdownClock.textContent = secondsLeft + " seconds left!";}
        else if(secondsLeft === 0){
            clearInterval(timerInterval);
            gameOverMessage();
        }
    }, 1000);
 }

 function gameOverMessage(){
    countdownClock.textContent = " ";
 }
 
 timeLeftClock();
});


});