var quizContainer = document.getElementById("quiz-content");
var beginButton = document.getElementById("begin-btn");
var questionCounter = 0;
var playerScore = 0;
var questionDisplayEl;
var timerEl = document.getElementById("timer");
var seconds;

//Question objects
var quizQuestions = [{
  question: "In what year was JavaScript introduced?",
  options: ["2001", "1995", "1993"],
  correct: 1
},
{
  question: "Which of the following is known as the 'dot operator?'",
  options: [".", ":", "%"],
  correct: 0
},
{
  question: "True or False: Function expressions often result in anonymous functions",
  options: ["True", "False"],
  correct: 0
},
{
  question: "True or False: a symbol is a primitive data type.",
  options: ["True", "False"],
  correct: 1
},
{
  question: "What purpose does the '!' operator serve?",
  options: ["! checks whether two things are true", "! checks that at least one of a set of conditions is true", "! negates the value of a boolean"],
  correct: 2
}];

//Function to start quiz- erases landing page and starts timer
function startQuiz() {
  console.log("clicked");

  var starterBox = document.getElementById("quiz-starter");
  starterBox.remove()
  //creates div for questions to be added to
  questionDisplayEl = document.createElement("div");
  questionDisplayEl.className = "question-display";
  startTimer();
  newQuestion();
}

//Function for timer
function startTimer() {
  seconds = 60;
  function tick() {
    seconds--;
    timerEl.innerHTML = "Time left: " + seconds;
    if (seconds > 0) {
      setTimeout(tick, 1000);
    }
    else { endGame() }
  }
  tick();
};

//Create new question
function newQuestion() {
  if (questionCounter < quizQuestions.length) {

    //makes header for question
    questionDisplayEl.innerHTML = "<h3 class='question-header'>" + "Question " + (questionCounter + 1) + "</h3>";

    //attach question number to html
    quizContainer.append(questionDisplayEl);

    var quizIndex = questionCounter;

    //makes question
    var questionEl = document.createElement("div");
    questionEl.className = "question-options";
    questionEl.innerHTML = "<p>" + quizQuestions[quizIndex].question + "</p>";

    questionDisplayEl.append(questionEl);

    var btnId = 0;
    //Loops through question object 'options' at specified index until all options are displayed
    for (var i = 0; i < quizQuestions[quizIndex].options.length; i++) {

      var optionBtnEl = document.createElement("button");
      optionBtnEl.id = btnId;
      optionBtnEl.onclick = checkAnswer;
      optionBtnEl.className = "option-button"
      optionBtnEl.innerText = quizQuestions[quizIndex].options[i];
      questionDisplayEl.append(optionBtnEl);
      btnId++;
      //Checks the value of the chosen answer against correct answer
      function checkAnswer() {
        if (this.id == quizQuestions[quizIndex].correct) {
          playerScore++;

          questionEl.remove();
          questionDisplayEl.innerHTML = "<p id = answer-response> That's Correct! Your score is now " + playerScore + "! </p>"
        }
        else {
          seconds = seconds - 5;
          questionDisplayEl.innerHTML = "<p id = answer-response> Wrong! Sorry! Your score is " + playerScore + "</p>";
        }
      
        questionCounter++;
      //creates button to go to next question
        var nextButtonEl = document.createElement("button");
        nextButtonEl.id = "next-button";
        nextButtonEl.innerText = "Next Question";

        questionDisplayEl.append(nextButtonEl);

        nextButtonEl.addEventListener("click", newQuestion);
      }
    }
  }

  //Ends game after all questions have been answered
  else { endGame() };
};

//ENDGAME FUNCTION
function endGame() {

//retrieve current high score and check against current score
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  //if player has a higher score than the previous saved score
  if (playerScore > highScore) {

    questionDisplayEl.innerHTML = "<p id= new-high-score>You set a new High Score of " + playerScore + "! Please enter your name to save your score.</p>"
    var playerNameEl = document.createElement("div");
    playerNameEl.innerHTML = "<input type='text' id='player-name'/><button id='name-submit'>Submit</button>"

    questionDisplayEl.append(playerNameEl);

    playerNameEl.addEventListener("click", saveScore)

//Saves player data to local storage
    function saveScore() {
      localStorage.setItem("highscore", playerScore);
      localStorage.setItem("name", playerNameEl.value);
    }
  }
  else {
    questionDisplayEl.innerHTML = "<p>Thank you for playing! Better Luck Next Time</p>"
  }
}

//Listener for start button
beginButton.addEventListener("click", startQuiz);
