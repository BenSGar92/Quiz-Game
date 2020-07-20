var startButton = document.querySelector("#start-button");
var questionContainer = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonEl = document.querySelector("#answer-buttons");
var buttonEl = document.querySelectorAll(".button");
var timeEl = document.querySelector(".time");
var scoreEl = document.querySelector(".score");
var finalScoreEl = document.querySelector(".final-score");
var showScore = document.querySelector(".show-score");
var highScoreBtn = document.querySelector(".highscore-button");
var button1 = document.querySelectorAll(".button")[0];
// attempting to create a for loop that will loop through the myQuestions array in order and when start is clicked the function startGame() will utilize this for loop to display the questions
var currentQuestionIndex = 0;
var secondsLeft = 20;
var score = 0;

var myQuestions = [
    {
        question: "What is 5 x 5?",
        choices: [2.5, 25, 250, .25],
        answers: 25,
    },
    {
        question: "What is 10 x 10?",
        choices: [.100, 100, 10, 1.00],
        answers: 100,
    },
    {
        question: "What is 5 x 10?",
        choices: [55, 5.0, 510, 50],
        answers: 50,
    },
    {
        question: "What is 2 + 2?",
        choices: [22, 42, 2, 4],
        answers: 4,
    },
    {
        question: "What is 4 - 4?",
        choices: [0, .01, 8, 44],
        answers: 0,
    }
]


function startGame() {
    
    // when clicked the class of hide will be added to the class of the start-button to make it disappear
    startButton.classList.add('hide');
    // when clicked the class of hide will be removed thus showing the question-container
    questionContainer.classList.remove('hide');
// start timer and show the time*******************************
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    }, 1000);


    // showQuestion()
    getQuestion()

}

function endGame() {
    questionContainer.classList.add('hide');
    finalScoreEl.classList.remove('hide');
    showScore.textContent = score;
}

var currentQuestionIndex = 0

function getQuestion() {
    var currentQuestion = myQuestions[currentQuestionIndex];//this is an object
    console.log(currentQuestionIndex);

    if (currentQuestionIndex == 5 || timeEl.textContent == "0") {
        endGame();
    } else {
        questionEl.textContent = currentQuestion.question;
    
    



    for (var i=0; i < currentQuestion.choices.length; i++) {
        var currentChoice = currentQuestion.choices[i];//need to figure out this
        // dynamically create each button - set the class attribute - and set the value attribute
        // create button element and set attribute and update text content
        //create eventlistener on the button to fire a function to handle the logic of that choice
        //function will check to see if value chosen will be correct or wrong and effect time
        console.log(currentChoice)
        buttonEl[i].textContent = currentChoice;
        
    }
    }
    //provide feedback whether wrong or right, and will need to increase currentQuestionIndex by 1
    //if not at end of quiz will need to get next question and loop through and repeat until end of quiz
    //  
}

function highScores () {
    finalScoreEl.classList.add('hide');
}

highScoreBtn.addEventListener('click', highScores)

startButton.addEventListener('click', startGame)

answerButtonEl.addEventListener('click', function(event) {
    currentQuestionIndex++;

    var userAnswer = (event.target.innerHTML);

    if (userAnswer === "25" || userAnswer === "100"  || userAnswer === "50"  || userAnswer === "4"  || userAnswer === "0") {
        alert("Correct");
        score++;
        scoreEl.textContent = score;
    } else {
        alert("Wrong!");
        // subtract time from the clock
    }

    getQuestion();

    if (currentQuestionIndex > myQuestions.length) {
        endGame()
    }
})

// need to create a global variable keeping track of right and wqrong answers. increase totaly correct tally to keep score.