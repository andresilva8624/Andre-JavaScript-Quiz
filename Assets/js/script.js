
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var containerEl = document.querySelector("#container");
var info_box = document.querySelector("#info_box")
var start = document.querySelector("#start")
var index = 0;
var interval = 1000;
var timer = 60;
var currentQuestionIndex = 0;
// var userScore = 0;

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
    options: ["call function myFunction()", "call myFunction()", "myFunction()", "call myFunction{}"],
    answer: "myFunction()",
  },
];



function gameOver() {
  console.log('gameOver');
  containerEl.innerHTML = '';
  var header = document.createElement('h2');
  header.textContent = 'The Game is OVER!';
  containerEl.appendChild(header);
  var formEl = document.createElement('form');
  var inputEl = document.createElement('input');
  var buttonEl = document.createElement('button');
  buttonEl.textContent = 'Submit';
  buttonEl.type = 'submit';
  var pEl = document.createElement('p');
  pEl.textContent = "Your score is: " + timer;


  inputEl.type = 'text';
  inputEl.placeholder = 'Enter your initials';
  formEl.appendChild(pEl);
  formEl.appendChild(inputEl);
  formEl.appendChild(buttonEl);
  document.body.appendChild(formEl);
  containerEl.appendChild(formEl);
  localStorage.setItem('score', JSON.stringify(pEl))
  localStorage.setItem('form', JSON.stringify(formEl));
  localStorage.setItem('input', JSON.stringify(inputEl));
  formEl.addEventListener('click', formEl);
  inputEl.addEventListener('click', inputEl);
  // pEl.addEventListener('click', JSON.stringify(pEl));
  // info_box.addEventListener('click', info_box)
  //lookup how to save an object in local storage
  //your object needs to be the users initial and their score
  //when you visit the high scores page, you should see any previous scores that we're saved in local storage
  //Or if there aren't any previous scores, the high score page should just be empty
  // lookup how to add an event listener to the form button
  //when the form submit button is clicked, then that current score is saved in local storage

}





function renderCurrentQuestion() {
timeCountdown();

if (currentQuestionIndex > 2) { 
gameOver()
return;
}

  containerEl.innerHTML = '';
  var currentQuestions = questions[currentQuestionIndex];

  var header = document.createElement('h2');
  header.textContent = currentQuestions.question;
  containerEl.appendChild(header);

  var ulEl = document.createElement('ul');

  for (var i = 0; i < currentQuestions.options.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = currentQuestions.options[i];
    ulEl.appendChild(liEl);
  }
  containerEl.appendChild(ulEl);
}
startBtn.addEventListener('click', renderCurrentQuestion);



  

function timeCountdown() {
  var timerInterval = setInterval(function () {
    timerEl.textContent = timer;
    timer--;

    if (timer === 0) {
      clearInterval(timerInterval);
    }
    // else {
    //   timer++;
    //   console.log(timerInterval);
    // }

  }, 1000);
}






containerEl.addEventListener('click', function (event) {

  if (event.target.matches('li')) {
    var currentQuestion = questions[currentQuestionIndex];
    var userGuess = event.target.textContent;
    console.log(userGuess);

    if (userGuess === currentQuestion.answer) {
      console.log('You guessed right!');
       
      };
      // increase score
      //play sounds (bonus)
      // modify timer
    
    } else {
      console.log('You guessed wrong!');
    }

    currentQuestionIndex++;
    renderCurrentQuestion();
  }
);

// document.querySelector('.start').addEventListener.questions();
