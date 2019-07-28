// Initialize variables
var timer = 30;
var intervalID;
var answerIntervalID;
var answerTimer = 5;
var correctAnswer;
var verify;
var run = "true";
var i = 0;
var correct = 0;
var incorrect = 0;
var missed = 0;

// Array/Object with questions, answers and gifs
var optionAnswers = [
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
        gif: '<iframe src="https://giphy.com/embed/R7TtRjIjgk1XO" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
    },
    {
        question: "Who was the only US President to serve two non-consecutive terms?",
        answers: ["Grover Cleveland", 
                  "Theodore Roosevelt", 
                  "Ronald Reagan", 
                  "Woodrow Wilson"],
        gif: '<iframe src="https://giphy.com/embed/i1bT6oIXsoC3e" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
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
        gif: '<iframe src="https://giphy.com/embed/2swQ2cPvmI7Fm" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
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
        gif: '<iframe src="https://giphy.com/embed/jWvLVbhcqkWfS" width="480" height="320" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'
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
var correct = ["true",
               "false",
               "false",
               "false"];

// Array with button destinations in index.html
var destination = ["#answer-1", 
                   "#answer-2",
                   "#answer-3",
                   "#answer-4"];

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

// 5 second function to display correct answer and gif
// function answerScreen() {
//     clearInterval(answerIntervalID)
//     answerIntervalID = setInterval(round, 5000);
//}

// Function which handles the end of the 30 second timer
function stop() {
    clearInterval(intervalID);
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
    //   stop();

        //  Alert the user that time is up.
        // increment to display the next question and set of answers
        //TESTING - i++;
        alert("Time Up!");
        round();
    }
}

// This is what happens in each round...main portion of the game
function round() {

    console.log(i);

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
            console.log(correctAnswer);
        }

        //Populates the question on the screen
        $("#question").text(optionAnswers[i].question)
    }

    // Checking for clicks on answer buttons
    $(document).on("click", ".answer-guess", function() {
        
        console.log("ON CLICK: " + i);
        // If correct...
        if ($(this).attr("correct-answer") === "true" && timer > 0) {
            correct++;
            console.log("CORRECT SCREEN + i = " + i);
            verify = "<h2>Correct!</h2>"
            displayAnswer();

        // If incorrect...
        } if ($(this).attr("correct-answer") === "false" && timer > 0){
            incorrect++;
            console.log("INCORRECT SCREEN + i = " + i);
            verify = "<h2>Nope!</h2><p>The correct answer was: " + correctAnswer + "</p>"
            displayAnswer();
        }       
    });
// End of round function        
}

// Function that controls 5 second answer screen
function displayAnswer() {

    // Stops the timer from counting down anymore
    stopTimer();

    // Hides the answer options and displays whether you guessed right or not plus gif
    $(".button-answers").hide();
    $("#question").html(verify);
    $("#question").append(optionAnswers[i].gif);

    // Runs answerScreen function for 5 seconds
    // answerScreen();
    setTimeout(incrementRound, 5000);
}

function incrementRound() {
    // Increment up for next round
    i++;
    round();
}

//-------------------------------------------------//
//------- MAIN RUN OF GAME ------------------------//
//-------------------------------------------------//
round();