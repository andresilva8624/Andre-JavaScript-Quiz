var startBtn = document.querySelector(".start");
var quitBtn = document.querySelector(".quit");
var timerEl = document.querySelector(".timer");
var timerInterval;
var containerEl = document.querySelector(".container");
var info_box = document.querySelector(".info_box");
var start = document.querySelector(".start");
var index = 0;
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
  startPageEl.classList.add("hide");
  info_box.classList.remove("hide");
}

function gameOver() {
  clearInterval(timerInterval);
  console.log("gameOver");
  containerEl.classList.add("hide");
  document.querySelector("header").classList.add("hide");
  document.querySelector(".gameover").classList.remove("hide");
  document.querySelector(".final-score").textContent = timer;
}

continueBtn.addEventListener("click", function () {
  timerInterval = setInterval(timeCountdown, 1000);
  timerEl.textContent = timer;
  startPageEl.setAttribute("class", "hide");
  info_box.setAttribute("class", "hide");
  document.querySelector("header").classList.remove("hide");

  renderCurrentQuestion();
});

function renderCurrentQuestion() {
  if (currentQuestionIndex > 4) {
    gameOver();
  } else {
    containerEl.innerHTML = "";
    var currentQuestions = questions[currentQuestionIndex];

    var headerEl = document.createElement("h2");
    headerEl.textContent = currentQuestions.question;
    containerEl.appendChild(headerEl);

    var ulEl = document.createElement("ul");

    for (var i = 0; i < currentQuestions.options.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = currentQuestions.options[i];
      ulEl.appendChild(liEl);
      containerEl.appendChild(ulEl);
    }
  }
}
startBtn.addEventListener("click", startGame);

quitBtn.addEventListener("click", quitGame);

function quitGame() {
  info_box.classList.add("hide");
  startPageEl.classList.remove("hide");
}

function timeCountdown() {
  timer--;
  timerEl.textContent = timer;

  if (timer <= 0) {
    gameOver();
  }
}

function saveHighscore() {
  var initialsValue = document.querySelector("#input").value;
  if (initialsValue !== "") {
    var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
    console.log(highscore);
    var newscore = {
      score: timer,
      initials: initialsValue,
    };
    console.log(newscore);
    highscore.push(newscore);
    console.log(highscore);
    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "score.html";
  }
}
document.querySelector(".saveBtn").addEventListener("click", saveHighscore);
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
