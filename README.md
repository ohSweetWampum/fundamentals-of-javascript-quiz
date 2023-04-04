# fundamentals-of-javascript-quiz

This is a multiple choice quiz on the fundamentals of JavaScript

## Visit the Site

[Cleck Here to Visit the Deployed Site](https://ohsweetwampum.github.io/fundamentals-of-javascript-quiz/)

## Description

This is a multiple-choice quiz on the fundamentals of JavaScript. It was made with HTML, CSS, and, of course, lots of JavaScript. Once you click the start button, you are presented with a question and a choice between four different answers, which are buttons that you click on. If you answer incorrectly, then 10 seconds are subtracted from the timer, and you also lose 5 points. You gain 5 points for every correct answer. At the end, you can enter your initials and save your score. If your score is among the top ten highest, then it will show up on the leaderboard. You can press the play again button to do the quiz again.

## Technology Used

- JavaScript
  [Learn about JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- HTML
  [Learn about HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

- CSS
  [Learn about CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

- Git
  [Learn about Git](https://git-scm.com/)

## Usage

1. Click start button
2. Answer questions
3. Enter Initials
4. Play again

![Alt Text](./assets/gifs/2023-04-04%2001.44.33.gif)

## Code Highlight

This function below retrieves the exsisting array of user scores from local storage, if none exsists then it creates an empty array. It then adds the user's score to the array and saves the updated array back to local storage. I chose this code snippet because it stumped me for a while. I kept getting an error from it, what happens is during the first run of the code, savedScores will be null since it has not been set before. So, you need to check if it is an array or not, if its not an array then it intializes it as an empty array.

```JavaScript
//function to store user data to local storage
  function storeToLocal(userScore) {
    var savedScores = JSON.parse(localStorage.getItem("userScore")) || [];
//This checks if the value of savedScores is an array. If it's not an array, it sets savedScores to empty.
    if (!Array.isArray(savedScores)) {
      savedScores = [];
    }
    savedScores.push(userScore);
    localStorage.setItem("userScore", JSON.stringify(savedScores));
  }

```

## Learning Points

- May need to check if a variable is an array or not in order to save to local storage
- How to use event listeners
- how to retrieve elements from the html (getElementById)
- How to use .textContent
- JSON ,Stringify

## Author Info

Matthew Gibson

- [Portfolio](https://github.com/ohSweetWampum)
- [LinkedIn](https://www.linkedin.com/in/matthew-gibson-6b9b12237/)
- [Github](https://github.com/ohSweetWampum)

## Credits

- [Meyer CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- [local Storage Tips](<https://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage#:~:text=To%20store%20data%20in%20LocalStorage%2C%20you%20use%20the%20setItem(),name'%2C%20'Matt%20West'>)
- [CSS tips](https://css-tricks.com/)
- [JavaScript](https://www.w3schools.com/js/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

```

```
