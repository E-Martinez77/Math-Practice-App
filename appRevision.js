//Create object array via math specific function
//Push array into global placeholder array
//At end of void function initiate new function to start the game
//Populate page with first index
//Event listener to drive action call function to repeat action
//Drive app with a global index counter
//Game active true | false
//Once array is completed switch game active to false
//Call function to end game and display score
//End button to clear everything and start game over
//Log score total rounds etc to database
//New page to display high scores

//Possibly explore auth to log in and track personal progress assuming I can get everything else working

const start = document.getElementById("start");
const startBtn = document.getElementById("start-box");
const problem = document.getElementById("problem");

const howBox = document.getElementById("how-many");
const totalQuestions = document.getElementById("total-problems");
const getStarted = document.getElementById("get-started");

const mathProblem = document.getElementById("math-problem");
const userAnswer = document.getElementById("answer");

const total = document.getElementById("total");
const type = document.getElementById("type");

const finalOutput = document.getElementById("final-output");

const form = document.getElementById("form");
const answerForm = document.getElementById("answer-form");

const finalDisplay = document.getElementById("final-score");
const finalScore = document.getElementById("score");
const startOver = document.getElementById("start-over");

const totalArr = [];
const correct = [];
const incorrect = [];
const review = [];
let index;
let gameActive;

const displayProblem = () => {
  if (gameActive == true && index >= totalArr.length) {
    endGame();
  } else {
    console.log(`Current Index: ${index} Game Active: ${gameActive}`);
    mathProblem.textContent = "";
    mathProblem.textContent = `${
      index >= totalArr.length ? " " : totalArr[index].q
    }`;
    userAnswer.value = "";
    if (index >= totalArr.length) {
      gameActive = false;
      endGame();
    }
  }
};

const endGame = () => {
  console.log(`endGame() flag`);
  gameActive = false;
  problem.classList.add("visually-hidden");
  finalDisplay.classList.remove("visually-hidden");
  finalScore.textContent = `You got ${correct.length} out of ${
    totalArr.length
  } correct,\nYou scored ${Math.round(
    (correct.length / totalArr.length) * 100
  )}%\n${
    correct.length == totalArr.length
      ? "Wow! You got them all!"
      : "Here are the problems you missed\n" + review
  }`;
};

const multiplication = (howMany) => {
  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    if (
      num1 == 1 ||
      num1 == 11 ||
      num1 == 10 ||
      num2 == 1 ||
      num2 == 11 ||
      num2 == 10
    ) {
      i--;
    } else {
      let newProb = {
        q: `${num1} x ${num2} = ?`,
        a: num1 * num2,
      };
      totalArr.push(newProb);
    }
  }

  console.log(totalArr);
  displayProblem();
};

const newGame = (choice, howMany) => {
  switch (choice) {
    case "addition":
      addition(howMany);
      break;
    case "subtraction":
      subtraction(howMany);
      break;
    case "multiplication":
      multiplication(howMany);
      break;
    case "division":
      division(howMany);
      break;

    default:
      break;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add("was-validated");

  let howMany = total.value;
  let choice = type.value;

  howBox.classList.add("visually-hidden");
  problem.classList.remove("visually-hidden");

  index = 0;
  gameActive == true;
  newGame(choice, howMany);
  howMany = "";
  choice = "";
  form.classList.remove("was-validated");
  total.setAttribute("disabled", "");
  type.setAttribute("disabled", "");
});

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userAnswer.value == "") {
    e.preventDefault();
  }

  console.log(`Answer Check: ${userAnswer.value == totalArr[index].a}`);
  if (userAnswer.value == totalArr[index].a) {
    console.log(`Push to correct`);
    correct.push(totalArr[index]);
    index++;
    displayProblem();
  } else {
    console.log(`Push to review`);
    review.push(totalArr[index].q);
    index++;
    displayProblem();
  }
});

if (index == totalArr.length) {
  endGame();
}

startOver.addEventListener("click", (e) => {
  totalArr.splice(0, totalArr.length);
  correct.splice(0, correct.length);
  review.splice(0, correct.length);
  index = undefined;
  // form.classList.remove("visually-hidden");
  howBox.classList.remove("visually-hidden");
  finalScore.classList.add("visually-hidden");
  finalScore.textContent = "";
  total.removeAttribute("disabled");
  type.removeAttribute("disabled");

  //Clear all arrays
  //reset index to undefined? How do you un-initialize a variable?
  //Adjust display settings for all elements to reset to the default state
  //Rather than refactoring everything it might be best to just write a helper function for a full reset.
});
