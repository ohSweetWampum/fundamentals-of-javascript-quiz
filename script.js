// A start button is present, once the user clicks it then a timer starts and the first question appears with multiple choice buttons below it
//upon clicking 1 of the 4 multple choice buutons, their response is stored and the next question pops up
//If the users clicks a wrong answer then time is subsracted from the clock
//when all questions are answered or the timer reaches 0, then the game ends
//upon the game ending a screen pops up showing high scores and you can enter your initials to save your score on the leaderboard
 
//Initializing starting score and what question they are on
 var score = 0;
 var currentQuestion = 0;


// retrieving all html elements that I need manipulate
//Start screen
var startingSectionElement = document.getElementById("startingScreen");
var startButtonElement = document.getElementById("startTimerNowButton");
//question screen
var questionsSectionElement = document.getElementById("questionsScreen");
var timeLeftElement = document.getElementById("actualTimeLeft");
var questionsTextElement = document.getElementById("h1QuestionText");
var AnswerOptionButtonsElement = document.querySelectorAll("answerButtonClass");
//gamerover section
var gameOverSectionElement = document.getElementById("gameOverScreen");
var userScoreElement = document.getElementById("savedScore");
var enterInitialsElement = document.getElementById("enterInitalsHere");
var submitButtonElement = document.getElementById("submitIntialsButton");

//lederboard section
var leaderboardScreenSectionElement = document.getElementById("leaderboardScreen");
var leaderboardAdditionsElement = document.getElementById("leaderboardAdditions");


//Adding all event listeners



startButtonElement.addEventListener("click", function() {
  startingSectionElement.style.display = "none";
  questionsSectionElement.style.display = "block";
});

// // encapsulated my code in this eventlistener, which waits until page is loaded before executing the JS code
// document.addEventListener("DOMContentLoaded", function() {

  
// var countdownClock = document.getElementById("countdown");

//  var secondsLeft = 120;

// //Creating all of the functions I will need to run the quiz
//  document.getElementById("start-timer-now-button").addEventListener("click", function(){
//  function timeLeftClock(){
//     var timerInterval = setInterval(function(){
//         secondsLeft--;
//         countdownClock.textContent = secondsLeft + " seconds left!";
//         if( answer === false){
//             secondsLeft-=7;
//             countdownClock.textContent = secondsLeft + " seconds left!";}
//         else if(secondsLeft === 0){
//             clearInterval(timerInterval);
//             gameOverMessage();
//         }
//     }, 1000);
//  }

//  function gameOverMessage(){
//     countdownClock.textContent = " ";
//  }
 










// Making my  questions, made an array of objects.Easy access to all questions via an index.Made a property "options" array for each questions options.
var quizQuestions = 
[{
    question: "What does JavaScript do?",
    options: ["Makes web page interactive","Styles the web page", "Creates basic layout of webpage", "Connects site to internet" ],
    correctOption: 0
},
{
    question: "What is an object?",
    options: ["Allows the user to edit the web page", "It is a standalone entity with properties and type.", "Objects are not related to JavaScript", "Any image or video on a web page" ],
    correctOption: 1
},
{
    question: "What is a function's 'this' keyword?",
    options: [" 'this' is not used in JavaScript'", "Unique ID", "Keyword that references the object that it is in", "Keyword that indicates which JS file you are using " ],
    correctOption: 2
},
{
    question: "What is an event listener?",
    options: ["Looks out for viruses", "Keeps track of web traffic", "Tracks the users internet history","Runs code only once user interacts with it" ],
    correctOption: 3
},
{
    question: "What are keyboard events?",
    options: ["Happens when user presses a keyboard key", "Keyboards events are related to CSS, not JavaScript", "They allow you to embed a virual keyboard on the screen", "nothing important" ],
    correctOption: 0
},
{
    question: "What is event bubbling?",
    options: ["Just pick an answer", "flexbox", "When element recieves an action, it propagates up", "Cleaning the entire schools water fountains" ],
    correctOption: 2
},
{
    question: "What is a Data attribute",
    options: ["Heisenberg", "Quit now", "Something you don't truly understand", " Used to store some extra information that doesn't have any visual representation" ],
    correctOption: 3
},
{
    question: "What is local storage?",
    options: ["Memory card", "things", " Web storage API allows you store data as key-value pairs ", "uHaul" ],
    correctOption: 2
},
{
    question: "What is setting an attribute?",
    options: ["almost done", " used to set or add an attribute to a particular element and provides a value to it", "good job", "you'll make it" ],
    correctOption: 1
}];




