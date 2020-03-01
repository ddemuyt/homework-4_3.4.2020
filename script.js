// Arrays for Questions, Correct Answers, and Wrong Answers
var qa= {
    question1: {
      question: "A?",
      answers : ["A", "B", "C", "D",],
      correct: 1,
    },
    question2: {
      question: "B?",
      answers: ["A", "B", "C", "D",],
      correct: 2,
    },
    question3: {
      question: "C?",
      answers: ["A", "B", "C", "D",],
      correct: 3,
    },
    question4: {
      question: "D?",
      answers: ["A", "B", "C", "D",],
      correct: 4,
    },
}

var timeEl = document.querySelector("#timer")
var quizDiv = document.querySelector(".quiz")

var timer = 100;
var score = 0;

var start = document.querySelector("#start")
var questionHeader = document.createElement("h2");
var questionText = document.getElementsByTagName("h2");

function addQuestion1(){
    
    quizDiv.appendChild(questionHeader);
    questionText.textContent = qa.question1.question;
    
    for(var i = 0; i < 4; i++){
      var buttons = document.createElement("button");
      buttons.textContent = qa.question1.answers[i];
      //
      if(i + 1 == qa.question1.correct){
        buttons.setAttribute("correct", true);
      }
    quizDiv.appendChild(buttons);

    };
    
    

  };
// Start button function
start.addEventListener("click", function(){
    setTime();
    emptyDiv();
    addQuestion1();
    
    // Timer Interval Function (might need outside of start function)
    function setTime() {
        var timerInterval = setInterval(function() {
          timer--;
          timeEl.textContent = timer;
      
          if(timer === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);
      }
    // Empty div
    function emptyDiv(){
      while(quizDiv.firstChild) {
        quizDiv.removeChild(quizDiv.firstChild);
        // addQuestion1();
      }
    }
    
    // Append question div
      //For loop questions into buttons
        //call click function
        // on click event function()
          //If correct == button id then score++ / Else timer - 10

      
    //   }

});




