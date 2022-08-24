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

var quizQuestions = [
    {question:"In what year was JavaScript introduced?",
     choices: {
        a: "2001",
        b: "1995",
        c: "1993"
     },
     correct: "1995"
    },
    
    {question:"Which of the following is known as the 'dot operator?'",
        choices: {
           a: ".",
           b: ":",
           c: "%"
        },
        correct: "."
       }
    //question template for copy/pasting
    /*{question:,
        answers: {
           a:,
           b:,
           c:,
        },
       }*/
]

var questionCounter = 0;
var questionArray = [];
var quiz = document.getElementById("quiz");


//Quiz function
function showQuestion(){
    console.log("Clicked");
    //remove intro and begin button
    var starterBox = document.getElementById("quiz-starter");
    starterBox.remove();



    for (i = 0; i < quizQuestions.length; i++){

    }
};

//Create and add the html to display questions
var createQuestion = function (){
    var questionDisplayEl = document.createElement("div");
    questionDisplayEl.className = "question-display";
    questionDisplayEl.innerHTML = "<h3 class='question-header'>"+ "Question " + questionCounter + "</h3>"

    quizContainer.append(questionDisplayEl);



}
 


//Listener for 'begin' button
beginButton.addEventListener("click", showQuestion)


