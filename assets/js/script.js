/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/


var quizContainer = document.getElementById("quiz-content");
var beginButton = document.getElementById("begin-btn");
var questionCounter = 0;
var playerScore = 0;
var questionDisplayEl;

var quizQuestions = [{
  question:"In what year was JavaScript introduced?",
  options: ["2001", "1995", "1993"],
  correct: 1
  },
  
  {
  question:"Which of the following is known as the 'dot operator?'",
  options: [".", ":", "%"],
  correct: 0
  }
];

//Clear window for quiz
function startQuiz(){
console.log("clicked");

var starterBox = document.getElementById("quiz-starter");
starterBox.remove()
questionDisplayEl = document.createElement("div");
questionDisplayEl.className = "question-display";
newQuestion();
}

//Create new question
function newQuestion(){
      
    //create the question header 
;
      questionDisplayEl.innerHTML = "<h3 class='question-header'>"+ "Question " + (questionCounter + 1) + "</h3>";

      //attach question number to html
      quizContainer.append(questionDisplayEl);
    
      var quizIndex = questionCounter;
      var questionEl = document.createElement("div");
      questionEl.className = "question-options";
      questionEl.innerHTML = "<p>" + quizQuestions[quizIndex].question + "</p>";
  
      questionDisplayEl.append(questionEl);
      var btnId = 0;
          for (var i=0; i < quizQuestions[quizIndex].options.length; i++){
            
            var optionBtnEl = document.createElement("button");
            optionBtnEl.id = btnId;
            optionBtnEl.onclick = checkAnswer;
            optionBtnEl.className = "option-button"
            optionBtnEl.innerText = quizQuestions[quizIndex].options[i];
            questionDisplayEl.append(optionBtnEl);
            btnId ++;

           function checkAnswer(){
            
              console.log(this.id)
              console.log(quizQuestions[quizIndex].correct)
              if (this.id == quizQuestions[quizIndex].correct){
                playerScore ++;
                
                questionEl.remove();
                questionDisplayEl.innerHTML = "<p id = answer-response> That's Correct! Your score is now " + playerScore + "! </p>"
              
              }
              else {
               
                questionDisplayEl.innerHTML = "<p id = answer-response> Wrong! Sorry! Your score is " + playerScore + "</p>";
                
              }
              
              questionCounter ++;

              var nextButtonEl = document.createElement("button");
              nextButtonEl.id = "next-button";
              nextButtonEl.innerText = "Next Question";
              
              questionDisplayEl.append(nextButtonEl);

             nextButtonEl.addEventListener("click", newQuestion);
            }
          };       
      }

//buttons.addEventListener("click", checkAnswer);


beginButton.addEventListener("click", startQuiz);







