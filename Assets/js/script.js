var startBtn = document.querySelector(".start");
var quitBtn = document.querySelector(".quit");
var quitGame = document.querySelector(".quit");
var timerEl = document.querySelector(".timer");
var timerInterval;
var containerEl = document.querySelector(".container");
var info_box = document.querySelector(".info_box");
var start = document.querySelector(".start");
var index = 0;
// var interval = 1000;
var timer = 60;
var initials = [];
var continueBtn = document.querySelector(".restart");
var currentQuestionIndex = 0;
var startPageEl = document.querySelector(".start-page");
var score = 0;

var questions = [
  {
    question: "How to write an IF statement in JavaScript?",
    options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"],
    answer: "if (i == 5)",
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for i = 1 to 5",
      "for (i = 0; i <= 5)",
      "for (i = 0; i <= 5; i++)",
      "for (i <= 5; i++)",
    ],
    answer: "for (i = 0; i <= 5; i++)",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onclick", "onmouseclick", "onmouseover", "onchange"],
    answer: "onclick",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<script>", "<scripting>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call function myFunction()",
      "call myFunction()",
      "myFunction()",
      "call myFunction{}",
    ],
    answer: "myFunction()",
  },
];

function startGame() {
  timerInterval = setInterval(timeCountdown, 1000);
  timerEl.textContent = timer;
  info_box.classList.remove("hide");
}

// function countDown() {
//   var count = 15;
//   var interval = setInterval(function () {
//     document.getElementById("count").innerHTML = count--;

//     if (count === 0) {
//       clearInterval(interval);
//       document.getElementById("count").innerHTML = "Done";
//       // or...
//       alert("You're out of time!");
//     }
//   }, 1000);
// }

function gameOver() {
  clearInterval(timerInterval);
  console.log("gameOver");
  containerEl.innerHTML = "";
  var header = document.createElement("h2");
  header.textContent = "The Game is OVER!";
  containerEl.appendChild(header);
  var formEl = document.createElement("form");
  var inputEl = document.createElement("input");
  var buttonEl = document.createElement("button");
  formEl.append(inputEl, buttonEl);
  buttonEl.textContent = "Submit";
  // buttonEl.type = "click";
  var pEl = document.createElement("p");
  pEl.textContent = "Your score is: " + timer;
  var initialsEl = document.createElement("p");
  initialsEl.textContent = "Please enter your initials";
  containerEl.append(pEl, initialsEl, inputEl, buttonEl);
}

continueBtn.addEventListener("click", function () {
  startPageEl.setAttribute("class", "hide");
  info_box.setAttribute("class", "hide");
  // timerEl.setAttribute("class", "hide");
  containerEl.classList.remove("hide");

  renderCurrentQuestion();
  console.log(timer);
});

function renderCurrentQuestion() {
  if (currentQuestionIndex > 4) {
    gameOver();
    return;
  }

  containerEl.innerHTML = "";
  var currentQuestions = questions[currentQuestionIndex];

  var header = document.createElement("h2");
  header.textContent = currentQuestions.question;
  containerEl.appendChild(header);

  var ulEl = document.createElement("ul");

  for (var i = 0; i < currentQuestions.options.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = currentQuestions.options[i];
    ulEl.appendChild(liEl);
    containerEl.appendChild(ulEl);
  }
}
startBtn.addEventListener("click", startGame);

quitBtn.addEventListener("click", quitGame);

function timeCountdown() {
  timer--;
  timerEl.textContent = timer;

  if (timer <= 0) {
    console.log("timer", timer);
    gameOver();
  }
}

// var stopInterval = function() {
//   console.log('time is up!');
//   clearInterval(timer);
// }

function saveHighscore() {
  alert = "About to save score";
  var initialsValue = document.querySelector("input").value;
  var highscore =
    ((initials = initialsValue.trim()),
    currentHighscore.push(highscore),
    localStorage.setItem("currentHighscore", JSON.stringify(currentHighscore)));
  console.log("saveHighscore");
}

// if (highscore !== null) {
//   if (score > localStorage.setItem("highscore", score)) {
//     localStorage.setItem("highscore", score);
//   }
// } else {
//   localStorage.setItem("highscore", score);
//   console.log("Your Highscore is" + score);
// }

containerEl.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    var currentQuestion = questions[currentQuestionIndex];
    var userGuess = event.target.textContent;

    console.log(userGuess);

    if (userGuess !== currentQuestion.answer) {
      console.log("You guessed wrong!");
      timer -= 5;
      timerEl.textContent = timer;
      if (timer <= 0) {
        gameOver();
      }
    } else {
      console.log("You guessed right!");
    }
  }

  currentQuestionIndex++;
  renderCurrentQuestion();
});

// startBtn.addEventListener.currentquestion("click", highscore);
