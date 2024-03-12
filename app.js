// variables for elements
const p1Rock = document.querySelector("#p1rock");
const p1Paper = document.querySelector("#p1paper");
const p1Scissors = document.querySelector("#p1scissors");
const p2Rock = document.querySelector("#p2rock");
const p2Paper = document.querySelector("#p2paper");
const p2Scissors = document.querySelector("#p2scissors");
const nextRoundButton = document.querySelector("#nextRound");
const resetGameButton = document.querySelector("#resetGame");
const selectScore = document.querySelector("#playTo");
const winnerDisplay = document.querySelector("#winnerDisplay");

const p1Choices = document.querySelector("#p1");
const p2Choices = document.querySelector("#p2");

// variables for number of rounds
let targetRounds = selectScore.value;           // set target rounds based on select value
let targetRoundsInt = parseInt(targetRounds);   // convert targetRounds to an integer
let winnerText; 
let isGameOver = false;                         // variable to track if game is in progress / over

// variables for spans (score display)
const p1Span = document.querySelector("#p1Score");
const p2Span = document.querySelector("#p2Score");
const result = document.querySelector("#result");

// variable to update score value
let p1Score = 0;
let p2Score = 0;

// track if p1 / p2 has played this round
let p1Played = false;
let p2Played = false;

/*
    Select Score Event Listener
        - when target score (number of rounds) is selected
            - set new target score value
            - reset score (if new target score is selected mid game, game resets)
*/
selectScore.addEventListener("change", function() {
    targetRounds = selectScore.value;
    targetRoundsInt = parseInt(targetRounds);
    resetGame();
})


/*
    P1 and P2 Event Listener
        - add class ('rock', 'paper', or 'scissors') based on player's selection
            - used to determine winner
        - update class for the div element containing the image with 'selected'
            - used to update background color on image div to highlight each player's selection
        - update score and round winner display
        - if target number of rounds reached, display winner
*/
// P1 ROCK
p1Rock.addEventListener("click", function() {

    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("rock");        // update class to reflect p1's selection
        p1Rock.classList.add("selected");       // update background color to show selected option

        if (p2Choices.classList.contains("rock")) {
            result.innerText = "TIE"
        }
        
        if (p2Choices.classList.contains("paper")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - PAPER COVERS ROCK."
        }

        if (p2Choices.classList.contains("scissors")) {
            updateP1Score();
            result.innerText = "PLAYER 1 WINS - ROCK SMASHES SCISSORS."
        }

        // target rounds reached - display winner
        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }

        p1Played = true;    // update player played boolean so user can't change selection mid round
    }
})

// P1 PAPER
p1Paper.addEventListener("click", function() {
    
    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("paper"); 
        p1Paper.classList.add("selected");

        if (p2Choices.classList.contains("rock")) {
            updateP1Score();
            result.innerText = "PLAYER 1 WINS - PAPER COVERS ROCK.";
        }
        
        if (p2Choices.classList.contains("paper")) {
            result.innerText = "TIE"
        }

        if (p2Choices.classList.contains("scissors")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - SCISSORS CUTS PAPER";
        }

        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }


        p1Played = true;
    }
})

// P1 SCISSORS
p1Scissors.addEventListener("click", function() {
    
    if (!p1Played && targetRoundsInt > 0 && !isGameOver) {
        p1Choices.classList.add("scissors"); 
        p1Scissors.classList.add("selected");

        if (p2Choices.classList.contains("rock")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - ROCK SMASHES SCISSORS.";
        }
        
        if (p2Choices.classList.contains("paper")) {
            updateP2Score();
            result.innerText = "PLAYER 1 WINS - SCISSORS CUTS PAPER";
        }

        if (p2Choices.classList.contains("scissors")) {
            result.innerText = "TIE"
        }

        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }


        p1Played = true;
    }
})

// P2 ROCK
p2Rock.addEventListener("click", function() {
    
    if (!p2Played && targetRoundsInt > 0 && !isGameOver) {
        p2Choices.classList.add("rock");
        p2Rock.classList.add("selected");  
        
        if (p1Choices.classList.contains("rock")) {
            result.innerText = "TIE"
        }
        
        if (p1Choices.classList.contains("paper")) {
            updateP1Score();  
            result.innerText = "PLAYER 1 WINS - PAPER COVERS ROCK.";
        }

        if (p1Choices.classList.contains("scissors")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - ROCK SMASHES SCISSORS.";
        }

        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }

        p2Played = true;
    }
})

// P2 PAPER
p2Paper.addEventListener("click", function() {
    
    if (!p2Played && targetRoundsInt > 0 && !isGameOver) {
        p2Choices.classList.add("paper"); 
        p2Paper.classList.add("selected");

        if (p1Choices.classList.contains("rock")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - PAPER COVERS ROCK.";
        }

        if (p1Choices.classList.contains("paper")) {
            result.innerText = "TIE"
        }

        if (p1Choices.classList.contains("scissors")) {
            updateP1Score();
            result.innerText = "PLAYER 1 WINS - SCISSORS CUTS PAPER";
        }

        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }

        p2Played = true;
    }
})

// P2 SCISSORS
p2Scissors.addEventListener("click", function() {
    
    if (!p2Played && targetRoundsInt > 0 && !isGameOver) {
        p2Choices.classList.add("scissors");
        p2Scissors.classList.add("selected");
        
        if (p1Choices.classList.contains("rock")) {
            updateP1Score();
            result.innerText = "PLAYER 1 WINS - ROCK SMASHES SCISSORS.";
        }
            
        if (p1Choices.classList.contains("paper")) {
            updateP2Score();
            result.innerText = "PLAYER 2 WINS - SCISSORS CUTS PAPER";
        }
        
        if (p1Choices.classList.contains("scissors")) {
            result.innerText = "TIE"
        }

        if ( (p1Score == targetRoundsInt) || (p2Score == targetRoundsInt) ){
            targetRoundsReached();
        }

        p2Played = true;
    }
})

// Next Round Setup
nextRoundButton.addEventListener("click", function() {
    if (!isGameOver) {
        resetSelections();
    }
});

// New Game
resetGameButton.addEventListener("click", resetGame);