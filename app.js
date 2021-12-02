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
const submitBtn = document.getElementById("submitBtn");

const helper1 = (userQuestion) => {
  mathProblem.textContent = "";
  mathProblem.textContent = userQuestion;
  //clear problem container
  //Display math problem
  //?Event listener? Can that be done within the scope of a function?
};

submitBtn.addEventListener("click", () => {
  userAnswer.value;
});

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

const multiplication = (howMany, difficult) => {
  const allProb = [];

  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;
    let num3 = Math.floor(Math.random() * 12) + 1;

    if (difficult == true) {
      let question = `${num1} x ${num2} x ${num3} = ?`;
      let answer = num1 * num2 * num3;
      let newProb = {
        question: question,
        answer: answer,
      };
      allProb.push(newProb);
    } else {
      let question = `${num1} x ${num2} = ?`;
      let answer = num1 * num2;
      let newProb = {
        question: question,
        answer: answer,
      };
      allProb.push(newProb);
    }
  }

  return allProb;
};

const division = (howMany) => {
  const allProb = [];

  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    let answer = num1 * num2;
    let question = `${answer} ÷ ${num2} = ?`;
    let newProb = {
      question: question,
      answer: num1,
    };
    allProb.push(newProb);
  }
  return allProb;
};

const addition = (howMany, difficult) => {
  const allProb = [];
  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let num3 = Math.floor(Math.random() * 9) + 1;

    if (difficult == true) {
      let question = `${num1} + ${num2} x ${num3} = ?`;
      let answer = num1 + num2 + num3;
      let newProb = {
        question: question,
        answer: answer,
      };
      allProb.push(newProb);
    } else {
      let question = `${num1} + ${num2} = ?`;
      let answer = num1 + num2;
      let newProb = {
        question: question,
        answer: answer,
      };
      allProb.push(newProb);
    }
  }
  return allProb;
};

const subtraction = (howMany) => {
  const allProb = [];

  for (let i = 0; i < howMany; i++) {
    let num1 = Math.floor(Math.random() * 12) + 1;
    let num2 = Math.floor(Math.random() * 12) + 1;

    let answer = num1 + num2;
    let question = `${answer} - ${num2} = ?`;
    let newProb = {
      question: question,
      answer: num1,
    };
    allProb.push(newProb);
  }
  return allProb;
};

submitBtn.addEventListener("click", () => {
  let answer = userAnswer.value;

  console.log(answer);
});

const newQuiz = (arr) => {
  arr.forEach((index) => {
    form.classList.add("visually-hidden");

    mathProblem.textContent = "";
    mathProblem.textContent = index.question;
    console.log(index);
  });
};

newQuiz(multiplication(10));
