//INDEX

// Arrays for Questions, Correct Answers, and Wrong Answers
var questions = [
  {
    question: "Which US President is most to the left on the Mount Rushmore National Memorial??",
    answers: ["Theodore Roosevelt", "George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    correct: 1
  },
  {
    question: "In which language was the book 'War and Peace' originally written?",
    answers: ["French", "English", "German", "Russian"],
    correct: 3
  },
  {
    question: "Which of these NBA franchises has never signed LeBron James?",
    answers: ["Cleveland Cavaliers", "Boston Celtics", "Los Angeles Lakers", "Miami Heat"],
    correct: 1
  },
  {
    question: "What did Alfred Nobel develop?",
    answers: ["Atomic Bomb", "Gunpowder", "Nobelium", "Dynamite"],
    correct: 3
  },
  {
    question: "Other than eggs, what is a primary ingredient in Eggs Florentine?",
    answers: ["Gorgonzola", "Avocado", "Ham", "Spinach"],
    correct: 3
  },
  {
    question: "Adele performed the theme song to which James Bond film?",
    answers: ["From Russia With Love", "Quantum of Solace", "Skyfall", "Casino Royale"],
    correct: 2
  },
  {
    question: "Which country hosted the Summer Olympics in 2016?",
    answers: ["Spain", "China", "Brazil", "Greece"],
    correct: 2
  },
  {
    question: "What is the largest planet in our Solar SystemWhat is the largest planet in our Solar System?",
    answers: ["Saturn", "Earth", "Pluto", "Jupiter"],
    correct: 3
  },
  {
    question: "Which of these countries was not a Soviet Republic in USSR?",
    answers: ["Serbia", "Azerbaijan", "Moldova", "Kyrgyzstan"],
    correct: 0
  },
  {
    question: "How many spaces are on a standard Monopoly board?",
    answers: ["80", "20", "60", "40"],
    correct: 3
  },
  {
    question: "How many blue stripes does the United States of America national flag have?",
    answers: ["7", "6", "13", "0"],
    correct: 3
  },
  {
    question: "What is the name of the boxer whose life story is depicted in the 1999 movie 'The Hurricane'?",
    answers: ["Muhammad Ali", "Jake LaMotta", "Rubin Carter", "Rocky Marciano"],
    correct: 2
  },
  {
    question: "What was the first successful vaccine developed in history?",
    answers: ["Cholera", "Scarlet Fever", "Rabies", "Smallpox"],
    correct: 3
  },
  {
    question: "Which movie was the first to win 11 Academy Awards?",
    answers: ["La La Land", "Titanic", "Sound of Music", "Ben-Hur"],
    correct: 3
  },
  {
    question: "What is the largest country, by area, that has only one time zone?",
    answers: ["Russia", "Turkey", "China", "Australia"],
    correct: 2
  },
  {
    question: "Which actress plays a major role on the TV show 'The Big Bang Theory'?",
    answers: ["Sofia Vergara", "Portia de Rossi", "Emily Deschanel", "Kaley Cuoco"],
    correct: 3
  },

  {
    question: "Which of these cities is closest to London, UK?",
    answers: ["Boston, MA", "Atlanta, GA", "Miami, FL", "New York, NY"],
    correct: 0
  },
  {
    question: "What religion is the most practiced one in India?",
    answers: ["Shinto", "Hinduism", "Islam", "Sikhism"],
    correct: 1
  },
  {
    question: "What is the name for the Jewish New Year?",
      answers: ["Kwanzaa", "Rosh Hashanah", "Yom Kippur", "Hanukkah"],
      correct: 1
    },
    {
      question: "Which city's landmarks include: The Pantheon, The Spanish Steps and Trevi Fountain?",
        answers: ["Istanbul", "Barcelona", "Athens", "Rome"],
        correct: 3
      },
      {
        question: "According to Persian folklore, who is the storyteller of 'One Thousand and One Nights'?",
          answers: ["Scheherazade", "Kanaan", "Homer", "Hatshepsut"],
          correct: 0
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

var timer = 75;
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
    addAnswers(questions[questionCount]);
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
