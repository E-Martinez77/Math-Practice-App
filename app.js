const start = document.getElementById("start");

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

start.addEventListener("click", () => {
  let howMany = prompt("How many rounds would you like to do?");
  multiply(howMany);
});
//Next step, build switch for different operators

//Build individual functions for each operator
