// Arrays for Questions, Correct Answers, and Wrong Answers
var qa = {
    "questions" : ["A?", "B?", "C?",],
    correctAnswers : "A", "B", "C",
    wrong
}

var timeEl = document.querySelector("#timer")
var quizDiv = document.querySelector(".class")

var timer = 100;

// Start button function
var start = document.querySelector("#start")
start.addEventListener("click", function(){

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



