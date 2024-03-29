// Initialize variables
var timer = 30;
var intervalID;
var answerTimer = 5;
var correctAnswer;
var verify;
var i = 0;
var testCounter = 0;
var correctCount = 0;
var incorrect = 0;
var missed = 0;
var optionAnswers = [];

// Array connecting the correct answer to the "true" index
var correct = ["true",
               "false",
               "false",
               "false"];

// Array with button destinations in index.html
var destination = ["#answer-1", 
                   "#answer-2",
                   "#answer-3",
                   "#answer-4"];

function intializeQuestions() {

    // Array/Object with questions, answers and gifs
    optionAnswers = [
        {
            question: "Which US President is most to the left on the Mount Rushmore National Memorial?",
            answers: ["George Washington", 
                    "Abraham Lincoln", 
                    "Thomas Jefferson", 
                    "Theodore Roosevelt"],
            gif: '<iframe src="https://giphy.com/embed/l41lVBYlQEYQaUQV2" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the only US President to serve more than two terms?",
            answers: ["Franklin D. Roosevelt", 
                    "Ulysses S. Grant", 
                    "George Washington", 
                    "Theodore Roosevelt"],
            gif: '<iframe src="https://giphy.com/embed/3og0IF3qXWcQtNUsZq" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the only US President to serve two non-consecutive terms?",
            answers: ["Grover Cleveland", 
                    "Theodore Roosevelt", 
                    "Ronald Reagan", 
                    "Woodrow Wilson"],
            gif: '<iframe src="https://giphy.com/embed/xT8qB3CfZ5BQPVD0mQ" width="480" height="369" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the oldest elected US President?",
            answers: ["Donald Trump", 
                    "Dwight D. Eisenhower", 
                    "Ronald Reagan", 
                    "James Buchanan"],
            gif: '<iframe src="https://giphy.com/embed/1TSUKOv4k56aIryKAP" width="436" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the first President to live in the White House?",
            answers: ["John Adams", 
                    "Thomas Jefferson", 
                    "George Washington", 
                    "Andrew Jackson"],
            gif: '<iframe src="https://giphy.com/embed/N6lrS4304Agog" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the first President born outside the contiguous United States?",
            answers: ["Barack Obama", 
                    "Franklin Pierce", 
                    "Benjamin Harrison", 
                    "William Howard Taft"],
            gif: '<iframe src="https://giphy.com/embed/3o7qDSOvfaCO9b3MlO" width="480" height="342" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Which U.S. President signed the treaty to purchase Alaska from Russia?",
            answers: ["Andrew Johnson", 
                    "James Buchanan", 
                    "Ulysses S. Grant", 
                    "Andrew Jackson"],
            gif: '<iframe src="https://giphy.com/embed/l0HlErEtiFGdLAD0Q" width="480" height="267" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the first President to appear on TV?",
            answers: ["Franklin D. Roosevelt", 
                    "Harry S. Truman", 
                    "Dwight D. Eisenhower", 
                    "John F. Kennedy"],
            gif: '<iframe src="https://giphy.com/embed/9ViAMksQCxLEsLds9v" width="480" height="268" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who was the first President to appoint an African American to the Supreme Court?",
            answers: ["Lyndon Johnson", 
                    "George H.W. Bush", 
                    "John F. Kennedy", 
                    "Bill Clinton"],
            gif: '<iframe src="https://giphy.com/embed/JRgtgsZQSNYA5wEA6d" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: 'Walt Whitman&rsquo;s poem "Oh Captain, My Captain" was written about which President?',
            answers: ["Abraham Lincoln", 
                    "Theodore Roosevelt", 
                    "George Washington", 
                    "Ulysses S. Grant"],
            gif: '<iframe src="https://giphy.com/embed/ef0zYcF7AKu4b0Sns6" width="480" height="204" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },
        {
            question: "Who awarded Rosa Parks the Presidential Medal of Freedom?",
            answers: ["Bill Clinton", 
                    "Jimmy Carter", 
                    "Lyndon Johnson", 
                    "Barack Obama"],
            gif: '<iframe src="https://giphy.com/embed/3oz8xHd7og2Q9HGCd2" width="480" height="259" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>'
        },
        {
            question: "Who is the only President to resign from office?",
            answers: ["Richard Nixon", 
                    "Bill Clinton", 
                    "Andrew Johnson", 
                    "Franklin Pierce"],
            gif: '<iframe src="https://giphy.com/embed/GOsq7QnYlahag" width="480" height="357" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
        },

    ];

    // Array connecting the correct answer to the "true" index
    correct = ["true",
               "false",
               "false",
               "false"];

    // Array with button destinations in index.html
    destination = ["#answer-1", 
                   "#answer-2",
                   "#answer-3",
                   "#answer-4"];

    // Time to run the game
    round();
}


// Function to control the start of the game
function startGame() {

    // Hide everything except the start button
    $("#time").hide();
    $("#question").hide();
    $(".button-answers").hide();
    $("#restart-button").hide();

    // On click to start the game
    $("#start-button").on("click", function() {
        reset();
    });    
}

function reset() {

    // Reset all the variables to start condition
    timer = 30;
    intervalID;
    answerTimer = 5;
    correctAnswer;
    verify;
    i = 0;
    testCounter = 0;
    correctCount = 0;
    incorrect = 0;
    missed = 0;

    // Proper display of <div>s to run the game
    $("#time").show();
    $("#question").show();
    $(".button-answers").show();
    $("#answer-1").show();
    $("#answer-2").show();
    $("#answer-3").show();
    $("#answer-4").show();
    $("#start-button").hide();
    $("#restart-button").hide(); 

    // Resets the questions array
    intializeQuestions();
}

// Function to shuffle the order of the answers so they display differently every time
function shuffle(myArray, myArray2) {
    var counter = myArray.length;

    //  While there are elements in the array
        while (counter > 0) {
    // Pick a random index
        var index = Math.floor(Math.random() * counter);
    // Decrease ctr by 1
        counter--;
    // And swap the last element with it
        var temp1 = myArray[counter];
        myArray[counter] = myArray[index];
        myArray[index] = temp1;

    // Makes the same changes in the "correct" array
        var temp2 = myArray2[counter];
        myArray2[counter] = myArray2[index];
        myArray2[index] = temp2;
    }
    return myArray;
}

// Main Function to countdown 30 seconds for each question
function countdown() {
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
}

// Function which handles the end of the 30 second timer
function stop() {
    clearInterval(intervalID);

    // Necessary for the results screen
    verify = "<h2>Time's up!</h2><p>The correct answer was: " + correctAnswer + "</p>";

    missed++;
    displayAnswer();
}

// Stop timer only when question was answered with time remaining
function stopTimer() {
    clearInterval(intervalID);
}

// Function to count us down by one second and display in the appropriate div
function decrement() {
    //  Decrease timer by one.
    timer--;

    //  Show the number in the time tag.
    $("#time").text("Time remaining: " + timer + " Seconds");

    //  Once number hits zero...
    if (timer === 0) {

        //  ...run the stop function.
        stop();
    }
}

// This is what happens in each round...main portion of the game
function round() {

    // Make sure we don't go past 12 questions
    if (i <= 11) {

            //  Show the number in the time tag.
            $("#time").text("Time remaining: 30 Seconds");

            // Displays the answers to the question
            $(".button-answers").show();

            // Resets the timer and the order of the true/false array so we can properly match the correct answers
            timer = 30;
            correct = ["true",
                    "false",
                    "false",
                    "false"];
            
            // Shuffle function to randomize order of answers and link them to correct answer
            shuffle(optionAnswers[i].answers, correct);

            // Runs the 30 second countdown function
            countdown();

            // Simple for loop to generate the answer buttons
            for (j = 0; j < optionAnswers[i].answers.length; j++) {

                var buttonAnswer = $("<button>");
                buttonAnswer.addClass("link");
                buttonAnswer.addClass("button-answers");

                buttonAnswer.addClass("answer-guess");
                buttonAnswer.attr("answer-guessed", optionAnswers[i].answers[j]);
                buttonAnswer.attr("correct-answer", correct[j]);
                buttonAnswer.text(optionAnswers[i].answers[j]);
                $(destination[j]).html(buttonAnswer);

                // Stores the correct answer in var correctAnswer
                if (correct[j] === "true") {
                    correctAnswer = optionAnswers[i].answers[j];
                }

                //Populates the question on the screen
                $("#question").text(optionAnswers[i].question)
            }

            // Checking for clicks on answer buttons
            $(".answer-guess").on("click", function() {
                
                // If correct...
                if ($(this).attr("correct-answer") === "true" && timer > 0) {
                    correctCount++;
                    verify = "<h2>Correct!</h2>"
                    displayAnswer();

                // If incorrect...
                } if ($(this).attr("correct-answer") === "false" && timer > 0){
                    incorrect++;
                    verify = "<h2>Nope!</h2><p>The correct answer was: " + correctAnswer + "</p>";
                    displayAnswer();
                }       
            });
        } else {
            results();
        }

// End of round function        
}

// Function that controls 5 second answer screen
function displayAnswer() {

    // Stops the timer
    stopTimer();

    // Increment i to access the next index (question) in the array
    i++;

    // Hides the answer options and displays whether you guessed right or not plus gif
    $(".button-answers").hide();
    $("#question").html(verify);
    $("#question").append(optionAnswers[i-1].gif);

    // Runs answerScreen function for 5 seconds before starting next round
    setTimeout(round, 5 * 1000);
}

// Final screen where the results are displayed at the end of all the questions
function results() {

    // Stops the timer
    stopTimer()

    // Hides the answer options and displays results
    $(".button-answers").show();
    $("#answer-4").hide();
    $("#question").html("<h2>All done! Here's how you did!</h2>");
    $("#answer-1").text("Correct: " + correctCount);
    $("#answer-2").text("Incorrect: " + incorrect);
    $("#answer-3").text("Missed: " + missed);

    // Displays restart button
    $("#restart-button").show();

    // On click to restart the game
    $("#restart-button").on("click", function() {
        reset();
    });  
}

//-------------------------------------------------//
//------- MAIN RUN OF GAME ------------------------//
//-------------------------------------------------//

startGame();