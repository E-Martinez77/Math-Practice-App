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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add("was-validated");

  let userGame = {
    total: total.value,
    type: type.value,
  };

  console.log(userGame);
  newGame(userGame);
});

const newGame = ({ total, type }) => {
  switch (type) {
    case "addition":
      addition(total);
      break;

    case "subtraction":
      subtraction(total);
      break;

    case "multiplication":
      multiplication(total);
      break;

    case "division":
      division(total);
      break;

    default:
      break;
  }
};

const multiplication = (total, hard) => {
  const totalArr = [];
  const correct = [];
  const incorrect = [];
  const review = [];

  for (let i = 0; i < total.length; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;
    let num3 = Math.floor(Math.random() * 12) + 1;

    let userQuestion = `${num1} x ${num2} = ?`;
    mathProblem.textContent = "";
    mathProblem.textContent = userQuestion;

    let anZwer = num1 * num2;
    let check = userAnswer.value == anZwer;

    let newObj = {
      exercise: userQuestion,
      key: num1 * num2,
      answer: anZwer,
      correct: check,
    };

    totalArr.push(newObj);
  }
  total.forEach((index) => {
    if (index.correct == true) {
      correct.push(index);
    } else {
      incorrect.push(index);
    }
  });
  //Calculate percentage correct

  console.log(
    `You got ${correct.length} out of ${total.length} correct\nYou scored ${
      (correct.length / total.length) * 100
    }%`
  );

  incorrect.forEach((thing) => {
    review.push(thing.exercise);
  });

  if (correct.length != total.length) {
    console.log(review);
  }

  let percent = (correct.length / total.length) * 100;
  finalOutput.textContent = `You got ${correct.length} out of ${
    total.length
  } correct\nYou scored ${Math.round(percent)}%\n${
    percent != 100
      ? "Here are the problems you missed\n" + review
      : "Wow! You got them all!"
  }`;
};

const multiply = (howMany) => {
  const total = [];
  const correct = [];
  const incorrect = [];
  const review = [];

  for (let i = 0; i <= howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    let userQuestion = prompt(`${num1} x ${num2} = ?`);

    let question = `${num1} x ${num2} = ?`;

    let anZwer = num1 * num2;
    let check = userQuestion == anZwer;

    let newObj = {
      exercise: question,
      key: num1 * num2,
      answer: anZwer,
      correct: check,
    };

    total.push(newObj);
  }
  //loop through array, gather total correct and wrong to total up
  total.forEach((index) => {
    if (index.correct == true) {
      correct.push(index);
    } else {
      incorrect.push(index);
    }
  });
  //Calculate percentage correct

  console.log(
    `You got ${correct.length} out of ${total.length} correct\nYou scored ${
      (correct.length / total.length) * 100
    }%`
  );

  incorrect.forEach((thing) => {
    review.push(thing.exercise);
  });

  if (correct.length != total.length) {
    console.log(review);
  }

  let percent = (correct.length / total.length) * 100;
  alert(
    `You got ${correct.length} out of ${
      total.length
    } correct\nYou scored ${Math.round(percent)}%\n${
      percent != 100
        ? "Here are the problems you missed\n" + review
        : "Wow! You got them all!"
    }`
  );
};

// start.addEventListener("click", () => {
//   let howMany = prompt("How many rounds would you like to do?");
//   multiply(howMany);
// });
//Next step, build switch for different operators

//Build individual functions for each operator
