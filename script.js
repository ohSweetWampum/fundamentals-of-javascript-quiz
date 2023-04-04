// A start button is present, once the user clicks it then a timer starts and the first question appears with multiple choice buttons below it
//upon clicking 1 of the 4 multple choice buutons, their response is stored and the next question pops up
//If the users clicks a wrong answer then time is subsracted from the clock
//when all questions are answered or the timer reaches 0, then the game ends
//upon the game ending a screen pops up showing high scores and you can enter your initials to save your score on the leaderboard
 
//Initializing starting score and what question they are on
 var score = 0;
 var currentQuestion = 0;
 var secondsLeft = 120;

// retrieving all html elements that I need manipulate
//Start screen



var startingSectionElement = document.getElementById("startingScreen");
var startButtonElement = document.getElementById("startTimerNowButton");
//question screen
var questionsSectionElement = document.getElementById("questionsScreen");
var timeLeftElement = document.getElementById("actualTimeLeft");
var questionsTextElement = document.getElementById("h1QuestionText");
var AnswerOptionButtonsElement = document.querySelectorAll(".answerButtonClass");

//gamerover section
var gameOverSectionElement = document.getElementById("gameOverScreen");
var userScoreElement = document.getElementById("savedScore");
var enterInitialsElement = document.getElementById("enterInitalsHere");
var submitButtonElement = document.getElementById("submitIntialsButton");

//lederboard section
var leaderboardScreenSectionElement = document.getElementById("leaderboardScreen");
var leaderboardAdditionsElement = document.getElementById("leaderboardAdditions");




document.addEventListener('DOMContentLoaded', function() {

//displaying each question function
function displayQuestionAndAnswerOptions(){
    questionsTextElement.textContent = quizQuestions[currentQuestion].question;
    for( var i = 0; i < AnswerOptionButtonsElement.length; i++){
        AnswerOptionButtonsElement[i].textContent =
        quizQuestions[currentQuestion].options[i];
        AnswerOptionButtonsElement[i].addEventListener("click",howToDirectBasedOnChoice);
    }
}

function howToDirectBasedOnChoice(event){
    var selectedOption = event.target.textContent;
    scoreAnswerToQuestion(selectedOption);
    quizSectionFlow();

}
// scoring answers function
function scoreAnswerToQuestion(selectedOption){
    if(selectedOption === quizQuestions[currentQuestion].correctOption){
        score += 5;
    } else{
        score -= 5;
        secondsLeft -= 10;
    }
    }

//quiz section function
function quizSectionFlow(){
    if(currentQuestion === quizQuestions.length -1){
        questionsSectionElement.style.display = "none";
        gameOverSectionElement.style.display = "block";
        userScoreElement.textContent = score;
    }else{
        currentQuestion++;
        displayQuestionAndAnswerOptions();
    }
    }

//timer operation function
displayQuestionAndAnswerOptions();
startButtonElement.addEventListener("click", function() {
    startingSectionElement.style.display = "none";
    questionsSectionElement.style.display = "block";
    startTimer(); // Add this line to call the startTimer function
  });
  function startTimer(){
    var countdownClock = document.getElementById("actualTimeLeft");
    var timerInterval = setInterval(function(){
        secondsLeft--;
        countdownClock.textContent = secondsLeft + " seconds left!";
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            gameOverMessage();
        }
    }, 1000);
}

//game over function
function gameOverMessage(){
    questionsSectionElement.style.display = "none";
    gameOverSectionElement.style.display = "block";
    userScoreElement.textContent = score;
    submitButtonElement.addEventListener("click", function(){
        var initials = enterInitialsElement.value;
        var userScore = {
            initials: initials,
            score: score
        };
        localStorage.setItem("userScore", JSON.stringify(userScore));
    });
}
});








 
        


  
// startButtonElement.addEventListener("click", function() {
//     startingSectionElement.style.display = "none";
//     questionsSectionElement.style.display = "block";
//   });
//   var countdownClock = document.getElementById("countdown");
//  document.getElementById("startTimerNowButton").addEventListener("click", function(){
//     function timeLeftClock(){
//         var timerInterval = setInterval(function(){
//             secondsLeft--;
//             countdownClock.textContent = secondsLeft + " seconds left!";
//             if(secondsLeft === 0){
//                 clearInterval(timerInterval);
//                 gameOverMessage();
//             }
//         }, 1000);
//       }
      
//       // call the function to start the countdown timer
//       timeLeftClock();
  
//   });
  









 

  
  
// Making my  questions, made an array of objects.Easy access to all questions via an index.Made a property "options" array for each questions options.
var quizQuestions = [
    {
      question: "What does JavaScript do?",
      options: [
        "Makes web page interactive",
        "Styles the web page",
        "Creates basic layout of webpage",
        "Connects site to internet",
      ],
      correctOption: "Makes web page interactive",
    },
    {
      question: "What is an object?",
      options: [
        "Allows the user to edit the web page",
        "It is a standalone entity with properties and type.",
        "Objects are not related to JavaScript",
        "Any image or video on a web page",
      ],
      correctOption: "It is a standalone entity with properties and type.",
    },
    {
      question: "What is a function's 'this' keyword?",
      options: [
        "'this' is not used in JavaScript'",
        "Unique ID",
        "Keyword that references the object that it is in",
        "Keyword that indicates which JS file you are using",
      ],
      correctOption: "Keyword that references the object that it is in",
    },
    {
      question: "What is an event listener?",
      options: [
        "Looks out for viruses",
        "Keeps track of web traffic",
        "Tracks the users internet history",
        "Runs code only once user interacts with it",
      ],
      correctOption: "Runs code only once user interacts with it",
    },
    {
      question: "What are keyboard events?",
      options: [
        "Happens when user presses a keyboard key",
        "Keyboards events are related to CSS, not JavaScript",
        "They allow you to embed a virtual keyboard on the screen",
        "Nothing important",
      ],
      correctOption: "Happens when user presses a keyboard key",
    },
    {
      question: "What is event bubbling?",
      options: [
        "Just pick an answer",
        "Flexbox",
        "When element receives an action, it propagates up",
        "Cleaning the entire schools water fountains",
      ],
      correctOption: "When element receives an action, it propagates up",
    },
    {
      question: "What is a Data attribute?",
      options: [
        "Heisenberg",
        "Quit now",
        "Something you don't truly understand",
        "Used to store some extra information that doesn't have any visual representation",
      ],
      correctOption:
        "Used to store some extra information that doesn't have any visual representation",
    },
    {
      question: "What is local storage?",
      options: [
        "Memory card",
        "Things",
        "Web storage API allows you store data as key-value pairs",
        "uHaul",
      ],
      correctOption: "Web storage API allows you store data as key-value pairs",
    },
    {
      question: "What is setting an attribute?",
      options: [
        "Almost done",
        "Used to set or add an attribute to a particular element and provides a value to it",
        "Good job",
        "You'll make it",
      ],
      correctOption:
        "Used to set or add an attribute to a particular element and provides a value to it",
    }];

