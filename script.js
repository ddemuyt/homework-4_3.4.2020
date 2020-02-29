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
var quizDiv = document.querySelector(".class")

var timer = 100;

// Start button function
var start = document.querySelector("#start")
start.addEventListener("click", function(){
    setTime();
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
      
    //   function sendMessage() {
    //     timeEl.textContent = " ";
      
    //     var imgEl = document.createElement("img");
      
    //     imgEl.setAttribute("src", "images/image_1.jpg");
    //     mainEl.appendChild(imgEl);
      
    //   }
      
      setTime();

});



