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
    window.location.href = "./highscores.html";
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
      quizDiv.setAttribute("class", "quiz d-none");
      introDiv.setAttribute("class", "intro");
      introH.innerHTML = "GAME OVER";
      instructions.innerHTML = "Your score was <span id='userScore'>" + score + "</span>! <br><form id='intials'><label for='userInitials'>Please enter your initials:</label><br><input type='text' id='userInitials' name='userInitials'</form>";
      start.innerHTML = "Enter";
    }
  }, 1000);
}

btn1.addEventListener("click", checkCorrect());
btn2.addEventListener("click", checkCorrect());
btn3.addEventListener("click", checkCorrect());
btn4.addEventListener("click", checkCorrect());

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
