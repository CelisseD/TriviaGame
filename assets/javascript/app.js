// Click START to begin quiz
// 10 questions about The Golden Girls
// Timer starts at 15
// Hover styling over each Option
// When the user selects an answer, they either get it correct or incorrect
// Correct will stop timer and give a meme and go to next question
// Incorrect will stop timer, show correct answer, and give a meme and go to next question
// Win, losses, and unanswered column
// End of game, all done here's how you did
// start over


$(document).ready(function () {

    // GLOBAL VARIABLES

    // Track what question we're on
    var questionCounter = 0;

    // Timer Start Number
    var countStartNumber = 15;

    // Count correct guesses
    var correctGuesses = 0;

    // Count incorrect guesses
    var incorrectGuesses = 0;


    // GAME QUESTIONS
    var questions = [{
        question: "Where did Dorothy often threaten to send her mother?",
        answers: ["Oak Lawn", "Forest Lawn", "Shady Grove", "Shady Pines"],
        correctAnswer: "Shady Pines",
        image: "<img src='assets/images/q1.gif' class='img-circle'>"
    }, {
        question: "Where is Rose originally from?",
        answers: ["Dubuque, Iowa", "St. Olaf, Minnesota", "Fargo, North Dakota", "St. Gustaf, Minnesota"],
        correctAnswer: "St. Olaf, Minnesota",
        image: "<img src='assets/images/q2.gif' class='img-circle'>"
    }, {
        question: "Why did Sophia have to move in with her daughter, Dorothy?",
        answers: ["Her retirement home was sold", "Her retirement home burned down", "She was evicted", "She was caught cheating at Bingo at her retirement home"],
        correctAnswer: "Her retirement home burned down",
        image: "<img src='assets/images/q3.gif' class='img-circle'>"
    }, {
        question: "What was the name of the girls' gay housekeeper in the first episode?",
        answers: ["Kiki", "Papi", "Coco", "Yoko"],
        correctAnswer: "Coco",
        image: "<img src='assets/images/q4.gif' class='img-circle'>"
    }, {
        question: "What did the girls almost forget to buy before their vacation with their boyfriends?",
        answers: ["Toothbrushes", "Condoms", "Tampons", "Deodorant"],
        correctAnswer: "Condoms",
        image: "<img src='assets/images/q5.gif' class='img-circle'>"
    }, {
        question: "What was the name of Dorothy's philandering ex-husband?",
        answers: ["George", "Charlie", "Stanley", "Sal"],
        correctAnswer: "Stanley",
        image: "<img src='assets/images/q6.gif' class='img-circle'>"
    }, {
        question: "Blanche's full name was Blanche ____ Devereaux, making her initials BED.",
        answers: ["Eliza", "Elizabeth", "Emily", "Eleanor"],
        correctAnswer: "Elizabeth",
        image: "<img src='assets/images/q7.gif' class='img-circle'>"
    }, {
        question: "What dessert item was the girls' favorite to sit around the kitchen table with, while discussing their love lives?",
        answers: ["Ice Cream", "Pudding", "Chocolate", "Cheesecake"],
        correctAnswer: "Cheesecake",
        image: "<img src='assets/images/q8.gif' class='img-circle'>"
    }, {
        question: "What song did Dorothy, Blanche, and Rose sing to the sick baby they were taking care of?",
        answers: ["Please, Mr. Postman", "Enter Sandman", "Mr. Sandman", "Rock-a-bye Baby"],
        correctAnswer: "Mr. Sandman",
        image: "<img src='assets/images/q9.gif' class='img-circle'>"
    }, {
        question: "Which of the girls got married to Lucas in the series finale?",
        answers: ["Blanche", "Rose", "Sophia", "Dorothy"],
        correctAnswer: "Dorothy",
        image: "<img src='assets/images/q10.jpg' width='300px' class='img-circle'>"
    }]

    // Question and Choices append to HTML #quiz-area

    function questionContent() {
        $("#quiz-area").append("<p><strong>" +
            questions[questionCounter].question +
            "</p><p class='answers'>" +
            questions[questionCounter].answers[0] +
            "</p><p class='answers'>" +
            questions[questionCounter].answers[1] +
            "</p><p class='answers'>" +
            questions[questionCounter].answers[2] +
            "</p><p class='answers'>" +
            questions[questionCounter].answers[3] +
            "</strong></p>");
    }

    // If the user guesses correctly
    function answeredCorrectly() {
        $("#quiz-area").html("<p class='correct'>Correct!!</p>");
        correctGuesses++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $("#quiz-area").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
            questions[questionCounter].image);
        setTimeout(nextQuestion, 3000);
        questionCounter++;
    }

    // If the user guesses incorrectly
    function answeredIncorrectly() {
        $("#quiz-area").html("<p class='incorrect'>Inorrect. Shameful.</p>");
        incorrectGuesses++;
        var correctAnswer = questions[questionCounter].correctAnswer;
        $("#quiz-area").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
            questions[questionCounter].image);
        setTimeout(nextQuestion, 3000);
        questionCounter++;
    }

    // If the timer runs out...
    function timeUp() {
        if (time === 0) {
            $("#quiz-area").html("<p class='timeUp'>Time's Up!</p>");
            incorrectGuesses++;
            var correctAnswer = questions[questionCounter].correctAnswer;
            $("#quiz-area").append("<p>The answer was <span class='answer'><strong>" + correctAnswer + "</strong></span></p>" +
                questions[questionCounter].image);
            setTimeout(nextQuestion, 3000);
            questionCounter++;
        }
    }

    // RESULTS SCREEN
    function results() {
        if (correctGuesses === questions.length) {
            var endMessage = "You scored 100%! Go grab yourself a dang cheesecake.";
            var bottomText = "Damn, you're good!"
        }
        else if (correctGuesses > incorrectGuesses) {
            var endMessage = "Good job!";
            var bottomText = "It's like life is a giant weenie roast!"
        }
        else {
            var endMessage = "You may need to study on Hulu and try again...";
            var bottomText = "Blow it out your tubenburbles!"
        }

        $("#quiz-area").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" +
            correctGuesses + "</strong> right.</p>" + "<p>You got <strong>" +
            incorrectGuesses + "</strong> wrong.</p>");

        $("#quiz-area").append("<h1 id='start'>Start Over?</h1>");

        $("#bottomText").html(bottomText);
        gameReset();
        $("#start").click(nextQuestion);

    }

    // Sets game timer to 15 seconds
    function timer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                timeUp();
            }
            if (time > 0) {
                time--;
            }
            $("#timer").html("<strong>" + time + "</strong>");
        }
    }

    // Loads next question

    function nextQuestion() {
        if (questionCounter < questions.length) {
            time = 15;
            $("#quiz-area").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
            questionContent();
            timer();
            timeUp();
        }
        else {
            results();
        }
    }

    // Reset score upon game restart

    function gameReset() {
        questionCounter = 0;
        correctGuesses = 0;
        incorrectGuesses = 0;
    }


    function startGame() {
        $("#quiz-area").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
        $("#start").hide();
        questionContent();
        timer();
        timeUp();
    }

    // START GAME

    $("#start").click(nextQuestion);

    //

    $("#quiz-area").on("click", ".answers", (function () {
        var userGuess = $(this).text();
        if (userGuess === questions[questionCounter].correctAnswer) {
            clearInterval(clock);
            answeredCorrectly();
        }
        else {
            clearInterval(clock);
            answeredIncorrectly();
        }
    }))
});