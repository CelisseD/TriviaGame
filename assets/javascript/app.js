// Click START to begin quiz
// 10 questions about The Golden Girls
// Timer starts at 30
// Hover styling over each Option
// When the user selects an answer, they either get it correct or incorrect
// Correct will stop timer and give a meme and go to next question
// Incorrect will stop timer, show correct answer, and give a meme and go to next question
// Win, losses, and unanswered column
// End of game, all done here's how you did
// start over

//GLOBAL VARIABLES

//This will fill the quiz area in HTML
var card = $("#quiz-area");

// Timer Start Number
var countStartNumber = 30;

//
var questions = [{
    question: "Where did Dorothy often threaten to send her mother?",
    answers: ["Oak Lawn", "Forest Lawn", "Shady Grove", "Shady Pines"],
    correctAnswer: "Shady Pines",
    image: "assets/images/q1.gif"
},{
    question: "Where is Rose originally from?",
    answers: ["Dubuque, Iowa", "St. Olaf, Minnesota", "Fargo, North Dakota", "St. Gustaf, Minnesota"],
    correctAnswer: "St. Olaf, Minnesota",
    image: "assets/images/q2.gif"
},{
    question: "Why did Sophia have to move in with her daughter, Dorothy?",
    answers: ["Her retirement home was sold", "Her retirement home burned down", "She was evicted", "She was caught cheating at Bingo at her retirement home"],
    correctAnswer: "Her retirement home burned down",
    image: "assets/images/q3.gif"
},{
    question: "What was the name of the girls' gay housekeeper in the first episode?",
    answers: ["Kiki", "Papi", "Coco", "Yoko"],
    correctAnswer: "Coco",
    image: "assets/images/q4.gif"
},{
    question: "What did the girls almost forget to buy before their vacation with their boyfriends?",
    answers: ["Toothbrushes", "Condoms", "Tampons", "Deodorant"],
    correctAnswer: "Condoms",
    image: "assets/images/q5.gif"
},{
    question: "What was the name of Dorothy's philandering ex-husband?",
    answers: ["George", "Charlie", "Stanley", "Sal"],
    correctAnswer: "Stanley",
    image: "assets/images/q6.gif"
},{
    question: "Blanche's full name was Blanche ____ Devereaux, making her initials BED.",
    answers: ["Eliza", "Elizabeth", "Emily", "Eleanor"],
    correctAnswer: "Elizabeth",
    image: "assets/images/q7.gif"
},{
    question: "What dessert item was the girls' favorite to sit around the kitchen table with, while discussing their love lives?",
    answers: ["Ice Cream", "Pudding", "Chocolate", "Cheesecake"],
    correctAnswer: "Cheesecake",
    image: "assets/images/q8.gif"
},{
    question: "What song did Dorothy, Blanche, and Rose sing to the sick baby they were taking care of?",
    answers: ["Please, Mr. Postman", "Enter Sandman", "Mr. Sandman", "Rock-a-bye Baby"],
    correctAnswer: "Mr. Sandman",
    image: "assets/images/q9.gif"
},{
    question: "Which of the girls got married to Lucas in the series finale?",
    answers: ["Blanche", "Rose", "Sophia", "Dorothy"],
    correctAnswer: "Dorothy",
    image: "assets/images/q10.jpg"
}]

// A variable to hold the set interval
var timer;

var game = {
questions: question,
currentQuestion: 0;
counter: countStartNumber,
correct: 0,
incorect: 0,

countdown: function() {
    //decrement counter - use jquery to dynamically put it on to the page
    //if statement
        // if time is up, run time up function
},

loadQuestion: function() {
    //set timer
    //timer = set interval(game.countdown, 1000)
    //dynamically add question into card variable
    //hint card.html ("<h2>" + "<h2>")
    //for loop to run through the questions
    //dynamically added buttons with answer options
},

nextQuestion: function() {
    //set the counter
    // game.counter = countStartNumber
    //use jquery to change gthe text of the game counter
    //increment the currentQuestion by one
    // call the loadQuestion function
},

timeUp: function() {
    //clearInterval(timer)
    //use jquery to change the text of the game counter
    // dynamically add out of time to the card
    //append the correct answer to the card
    //append image/gif to the card

},

results: function() {
    //clearInterval
    //dynamically add html to let them know of their results
    //use jquery to add html of game.counter to the id of counter-number
    //add how many correct answers they got
    // add how many incorrect answers they got
    //add how many unanswered
    //add a start over button
},

clicked: function() {
    //clearInterval(timer)
    //if/else startmeent for when an answer is clicked
    //if correct run answeredCorrectly() function
    //else run answeredIncorrectly() function
},

answeredIncorrectly: function() {
    //add a point to the incorrect column
    //clearInterval(timer)
    //dynamically add html to let them know they are wrong
    //add the right answer
    // add the image
    //if/else statement
        //if no more questions, wait three seconds and then show result
        //else wait three seconds and show next question
},

answeredCorrectly: function() {
    //add a point to the correct column
    //clearInterval(timer)
    //dynamicallly add html to let them know they are correct
    //add image
    //if else statement
        //if no more questions, wait three seconds then show result
        //else wait thtree seconds and show next question
},

reset: function() {


},

}

// Create Click Events
//START BUTTON

$(document).on("click", "#start", function() {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
    game.loadQuestion();
});

//ANSWER BUTTON
$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
});

//START OVER BUTTON
$(document).on("click", "#start-over", function () {
    game.reset();
});

