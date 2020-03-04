//INDEX

// Arrays for Questions, Correct Answers, and Wrong Answers
var questions = [
  {
  question: "A?",
  answers: ["A1", "B1", "C1", "D1", ],
  correct: 1,
},{
  question: "B?",
  answers: ["A2", "B2", "C2", "D2", ],
  correct: 2,
},{
  question: "C?",
  answers: ["A3", "B3", "C3", "D3", ],
  correct: 3,
},{
  question: "D?",
  answers: ["A4", "B4", "C4", "D4", ],
  correct: 4,
}
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
var btn1 = document.querySelector("#btn2");
var btn1 = document.querySelector("#btn3");
var btn1 = document.querySelector("#btn4");
var result = document.querySelector("#result")

var display = "intro"

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
// Start button function
  start.addEventListener("click", function () {
    if (display === "intro" && timer > 0){
    setTime();
    display = "quiz";
    quizDiv.setAttribute("class", "quiz");
    introDiv.setAttribute("class", "intro d-none");
    // emptyDiv();
    addQuestion(questions[questionCount]);
    }
    else {
      window.location.href = "./highscores.html";
    }
    });

// Timer Interval Function
function setTime() {
      var timerInterval = setInterval(function () {
        if (timer > 0 && display === "quiz"){
        timer--;
        timeEl.textContent = timer;
        }
        else {
          clearInterval(timerInterval);
          display = "quiz";
          quizDiv.setAttribute("class", "quiz d-none");
          introDiv.setAttribute("class", "intro");      
          introH.innerHTML = "GAME OVER";
          instructions.innerHTML = "Please enter your initials!";
          start.innerHTML = "Enter"
        }

      }, 1000);
    }
btn1.addEventListener("click", function () {
  questionCount++;
    // if (timer > 0) {
    //   score++;
      
    // } else if (timer > 0) {
      
    //   timer = timer - 10;
    //   timeEl.textContent = timer;

    // }
    addQuestion();
  });
  // for (i = )  
  // $("#question").html(questions)

  btn2.addEventListener("click", function () {
    if ($(this).value == "true" && timer > 0) {
      score++;
      questionCount++;
    } else if (timer > 0) {
      questionCount++;
      timer = timer - 10;
      timeEl.textContent = timer;

    }});

btn3.addEventListener("click", function () {
  if ($(this).value == "true" && timer > 0) {
    score++;
    questionCount++;
  } else if (timer > 0) {
    questionCount++;
    timer = timer - 10;
    timeEl.textContent = timer;

  }});

btn4.addEventListener("click", function () {
  if ($(this).value == "true" && timer > 0) {
    score++;
    questionCount++;
  } else if (timer > 0) {
    questionCount++;
    timer = timer - 10;
    timeEl.textContent = timer;

  }});

 

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
