// Arrays for Questions, Correct Answers, and Wrong Answers
  var question1 = {
      question: "A?",
      answers : ["A", "B", "C", "D",],
      correct: 1,
    };
   var question2 = {
      question: "B?",
      answers: ["A", "B", "C", "D",],
      correct: 2,
    };
   var question3 = {
      question: "C?",
      answers: ["A", "B", "C", "D",],
      correct: 3,
    };
   var question4 = {
      question: "D?",
      answers: ["A", "B", "C", "D",],
      correct: 4,
    };

var timeEl = document.querySelector("#timer");
var quizDiv = document.querySelector(".quiz");

var timer = 100;
var score = 0;

var start = document.querySelector("#start");
var instructions = document.querySelector(".instructions");
var questionHeader = document.createElement("h2");
var questionText = document.getElementById("question");
var answerBtns = document.querySelector(".buttons")

// Getting Question
function getQuestionInternal(selectedQuestion){
  return questionText = selectedQuestion.question;
}

function addQuestion(selectedQuestion){
    
    quizDiv.append(questionHeader);
    questionText.innerHTML = selectedQuestion.question;

    for(var i = 0; i < 4; i++){
      var buttons = document.createElement("button");
      buttons.textContent = selectedQuestion.answers[i];
      buttons.className = "buttons";
      //Setting tagging the correct answer
      if(i + 1 == selectedQuestion.correct){
        buttons.setAttribute("correct", true);
      }
    quizDiv.append(buttons);
    };
  };
// Start button function
start.addEventListener("click", function(){
    setTime();
    emptyDiv();
    addQuestion(question1);
    
    // Timer Interval Function (might need outside of start function)
    function setTime() {
        var timerInterval = setInterval(function() {
          timer--;
          timeEl.textContent = timer;
      
          if(timer === 0) {
            clearInterval(timerInterval);
            // sendMessage();
          }
      
        }, 1000);
      }
    // Empty div
    function emptyDiv(){
      while(quizDiv.lastChild !== questionText) {
        quizDiv.removeChild(quizDiv.lastChild);
      }
    }
  });
answerBtns.addEventListener("click", function(){

  if (correct == true) {
    score++;

  }
  else {
    timer - 10;
  }

});


// Answer Button Functions

    // Append question div
      //For loop questions into buttons
        //call click function
        // on click event function()
          //If correct == button id then score++ / Else timer - 10


