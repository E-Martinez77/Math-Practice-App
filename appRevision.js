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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  form.classList.add("was-validated");

  let howMany = total.value;

  multiplication(howMany);
  form.classList.add("visually-hidden");
  problem.classList.remove("visually-hidden");
});

const multiplication = (howMany) => {
  const allProb = [];
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
      allProb.push(newProb);
    }
  }

  console.log(allProb);

  let index = 0;
  mathProblem.textContent = allProb[index].q;
};
