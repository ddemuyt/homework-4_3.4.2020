//INDEX

// Arrays for Questions, Correct Answers, and Wrong Answers
var questions = [
  {
    question: "A?",
    answers: ["A1", "B1", "C1", "D1"],
    correct: 0
  },
  {
    question: "B?",
    answers: ["A2", "B2", "C2", "D2"],
    correct: 1
  },
  {
    question: "C?",
    answers: ["A3", "B3", "C3", "D3"],
    correct: 2
  },
  {
    question: "D?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "E?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "F?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "G?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "H?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "I?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "J?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },

  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
    answers: ["A4", "B4", "C4", "D4"],
    correct: 3
  },
  {
    question: "K?",
      answers: ["A4", "B4", "C4", "D4"],
      correct: 3
    },
    {
      question: "K?",
        answers: ["A4", "B4", "C4", "D4"],
        correct: 3
      },
      {
        question: "K?",
          answers: ["A4", "B4", "C4", "D4"],
          correct: 3
        },
];

var timeEl = document.querySelector("#timer");
var introDiv = document.querySelector(".intro");
var quizDiv = document.querySelector(".quiz");
var start = document.querySelector("#start");
var instructions = document.querySelector("#instructions");
var questionHeader = document.createElement("h2");
var questionText = document.getElementById("question");
var answerBtns = document.querySelectorAll(".buttons");
var introH = document.querySelector("#generalH");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var result = document.querySelector("#result");
var newForm = document.createElement("form");
var getIntitials = document.querySelector("#userInitials");
var highscores = document.querySelector("#user-highscores");
var newLI = document.createElement("li");

var localHS = [];

var display = "intro";

var timer = 100;
var score = 0;
var questionCount = 0;

// Getting Question
// function getQuestionInternal(selectedQuestion) {
//   return questionText = selectedQuestion.question;
// }

function addQuestion() {
  questionText.innerHTML = questions[questionCount].question;
}

function addAnswers() {
  btn1.innerHTML = questions[questionCount].answers[0];
  btn2.innerHTML = questions[questionCount].answers[1];
  btn3.innerHTML = questions[questionCount].answers[2];
  btn4.innerHTML = questions[questionCount].answers[3];
}

function checkCorrect(answer) {
  if (questions[questionCount].correct == answer && timer > 0) {
    questionCount++;
    score++;
    result.innerHTML = "Correct!";
  } else if (timer > 0 && answer == null) {
    return;
  } else if (timer > 0) {
    questionCount++;
    timer = timer - 10;
    timeEl.textContent = timer;
    result.innerHTML = "Incorrect!";
  }
  addQuestion(questions[questionCount]);
  addAnswers(questions[questionCount]);
}



// Start button function

start.addEventListener("click", function() {
  if (display === "intro" && timer > 0) {
    setTime();
    display = "quiz";
    quizDiv.setAttribute("class", "quiz");
    introDiv.setAttribute("class", "intro d-none");
    // emptyDiv();
    addQuestion(questions[questionCount]);
  } else {
    display = "intro";
    window.location.href = "./highscores.html";
    highscores.setAttribute("class", "intro");
    highscores.append(newLI);
    // = getIntitials.value
  }
});

// Timer Interval Function
function setTime() {
  var timerInterval = setInterval(function() {
    if (timer > 0 && display === "quiz") {
      timer--;
      timeEl.textContent = timer;
    } else {
      clearInterval(timerInterval);
      display = "quiz";
      timeEl.textContent = 0;
      quizDiv.setAttribute("class", "quiz d-none");
      introDiv.setAttribute("class", "intro");
      introH.innerHTML = "GAME OVER";
      instructions.innerHTML = "Your score was <span id='userScore'>" + score + "</span>! <br><form id='intials'><label for='userInitials'>Please enter your initials:</label><br><input type='text' id='userInitials' name='userInitials'</form>";
      start.innerHTML = "Enter";
    }
  }, 1000);
}

// function renderHighscores() {
//   // Clear todoList element and update todoCountSpan
//   highscores.innerHTML = "";

//   // Render a new li for each todo
//   for (var i = 0; i < localHS.length; i++) {
//     var hs = hs[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     highscores.appendChild(li);
//   }
// }
// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   var storedHS = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedHS !== null) {
//     localHS = storedHS;
//   }

//   // Render todos to the DOM
//   renderHighscores();
// }

// function storeHighscores() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

btn1.addEventListener("click", checkCorrect());
btn2.addEventListener("click", checkCorrect());
btn3.addEventListener("click", checkCorrect());
btn4.addEventListener("click", checkCorrect());

//clear click event
//get element
//splice from index
//store in local
//re render list


// buttons.innerHTML = selectedQuestion.answers[i];
// buttons.className = "buttons";

//Setting tagging the correct answer
// if (i + 1 === selectedQuestion.correct) {

//   buttons.setAttribute("value", true);

// } else {
//   buttons.setAttribute("value", false);
// }
// quizDiv.append(buttons);
// };

// Empty Div
//   function emptyDiv() {
//       quizDiv.removeChild(quizDiv.lastChild);
//       quizDiv.removeChild(quizDiv.lastChild);
//       instructions.innerHTML = "";
//   }
// });

// Answer Button Functions
//If correct == button id then score++ / Else timer - 10

// Set up a  form
//user enter + score
//on enter user name and score append to list
//localstorage set list
//buttons return you to home page
//button clears ul and local storage
