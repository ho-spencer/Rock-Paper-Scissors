// variables for elements
const p1Rock = document.querySelector("#p1rock");
const p1Paper = document.querySelector("#p1paper");
const p1Scissors = document.querySelector("#p1scissors");
const p2Rock = document.querySelector("#p2rock");
const p2Paper = document.querySelector("#p2paper");
const p2Scissors = document.querySelector("#p2scissors");
const nextRoundButton = document.querySelector("#nextRound");

const p1Choices = document.querySelector("#p1");
const p2Choices = document.querySelector("#p2");

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
    P1 and P2 Event Listener
        - add class ('rock', 'paper', or 'scissors') based on player's selection
            - used to determine winner
            - remove other names so only 1 choice can be played at once
        - update class for the div element containing the image with 'selected'
            - used to update background color on image div to highlight each player's selection
            - remove 'selected' on other 2 so only choice can be highlighted at once
        - update score and round winner display
*/
// P1 ROCK
p1Rock.addEventListener("click", function() {

    if (!p1Played) {
        // update class to reflect p1's selection
        p1Choices.classList.add("rock");    
        p1Choices.classList.remove("paper", "scissors");
    
        // update background color to show selected option
        p1Rock.classList.add("selected");   
        p1Paper.classList.remove("selected");
        p1Scissors.classList.remove("selected");

        if (p2Choices.classList.contains("rock")) {
            result.innerText = "TIE"
        }
        
        if (p2Choices.classList.contains("paper")) {
            p2Score += 1;
            p2Span.innerText = p2Score;

            result.innerText = "PLAYER 2 WINS - PAPER COVERS ROCK."
        }

        if (p2Choices.classList.contains("scissors")) {
            p1Score += 1;
            p1Span.innerText = p1Score;

            result.innerText = "PLAYER 1 WINS - ROCK SMASHES SCISSORS."
        }
        
        p1Played = true;
    }
})

// P1 PAPER
p1Paper.addEventListener("click", function() {
    
    if (!p1Played) {
        // update class to reflect p1's selection
        p1Choices.classList.add("paper"); 
        p1Choices.classList.remove("rock", "scissors");

        // update background color to show selected option
        p1Paper.classList.add("selected");
        p1Rock.classList.remove("selected");
        p1Scissors.classList.remove("selected");

        if (p2Choices.classList.contains("rock")) {
            p1Score += 1;
            p1Span.innerText = p1Score;
            
            result.innerText = "PLAYER 1 WINS - PAPER COVERS ROCK.";
        }
        
        if (p2Choices.classList.contains("paper")) {
            result.innerText = "TIE"
        }

        if (p2Choices.classList.contains("scissors")) {
            p2Score += 1;
            p2Span.innerText = p2Score;
            
            result.innerText = "PLAYER 2 WINS - SCISSORS CUTS PAPER";
        }

        p1Played = true;
    }
})

// P1 SCISSORS
p1Scissors.addEventListener("click", function() {
    
    if (!p1Played) {
        // update class to reflect p1's selection
        p1Choices.classList.add("scissors"); 
        p1Choices.classList.remove("rock", "paper");

        // update background color to show selected option
        p1Scissors.classList.add("selected");
        p1Rock.classList.remove("selected");
        p1Paper.classList.remove("selected");

        if (p2Choices.classList.contains("rock")) {
            p2Score += 1;
            p2Span.innerText = p2Score;

            result.innerText = "PLAYER 2 WINS - ROCK SMASHES SCISSORS.";
        }
        
        if (p2Choices.classList.contains("paper")) {
            p1Score += 1;
            p1Span.innerText = p1Score;


            result.innerText = "PLAYER 1 WINS - SCISSORS CUTS PAPER";
        }

        if (p2Choices.classList.contains("scissors")) {
            result.innerText = "TIE"
        }
     
        p1Played = true;
    }
})

// P2 ROCK
p2Rock.addEventListener("click", function() {
    
    if (!p2Played) {
        p2Choices.classList.add("rock");
        p2Choices.classList.remove("paper", "scissors");
        
        p2Rock.classList.add("selected");  
        p2Paper.classList.remove("selected");
        p2Scissors.classList.remove("selected");
        
        if (p1Choices.classList.contains("rock")) {
            result.innerText = "TIE"
        }
        
        if (p1Choices.classList.contains("paper")) {
            p1Score += 1;
            p1Span.innerText = p1Score;


            result.innerText = "PLAYER 1 WINS - PAPER COVERS ROCK.";
        }

        if (p1Choices.classList.contains("scissors")) {
            p2Score += 1;
            p2Span.innerText = p2Score;

            result.innerText = "PLAYER 2 WINS - ROCK SMASHES SCISSORS.";
        }

        p2Played = true;
    }
})

// P2 PAPER
p2Paper.addEventListener("click", function() {
    
    if (!p2Played) {
        p2Choices.classList.add("paper"); 
        p2Choices.classList.remove("rock", "scissors");

        p2Paper.classList.add("selected");
        p2Rock.classList.remove("selected");
        p2Scissors.classList.remove("selected");

        if (p1Choices.classList.contains("rock")) {
            p2Score += 1;
            p2Span.innerText = p2Score;
            
            result.innerText = "PLAYER 2 WINS - PAPER COVERS ROCK.";
        }

        if (p1Choices.classList.contains("paper")) {
            result.innerText = "TIE"
        }

        if (p1Choices.classList.contains("scissors")) {
            p1Score += 1;
            p1Span.innerText = p1Score;
            
            result.innerText = "PLAYER 1 WINS - SCISSORS CUTS PAPER";
        }

        p2Played = true;
    }
})

// P2 SCISSORS
p2Scissors.addEventListener("click", function() {
    
    if (!p2Played) {
        p2Choices.classList.add("scissors"); 
        p2Choices.classList.remove("rock", "paper");
        

        p2Scissors.classList.add("selected");
        p2Rock.classList.remove("selected");
        p2Paper.classList.remove("selected");
        
        if (p1Choices.classList.contains("rock")) {
            p1Score += 1;
            p1Span.innerText = p1Score;
            
            result.innerText = "PLAYER 1 WINS - ROCK SMASHES SCISSORS.";
        }
            
        if (p1Choices.classList.contains("paper")) {
            p2Score += 1;
            p2Span.innerText = p2Score;
            
            result.innerText = "PLAYER 2 WINS - SCISSORS CUTS PAPER";
        }
        
        if (p1Choices.classList.contains("scissors")) {
            result.innerText = "TIE"
        }

        p2Played = true;
    }
})


// Next Round Setup
nextRoundButton.addEventListener("click", function() {
    p1Played = false;
    p2Played = false;
    result.innerText = "";
    p1Choices.classList.remove("rock", "paper", "scissors");
    p2Choices.classList.remove("rock", "paper", "scissors");

    p1Rock.classList.remove("selected");
    p2Rock.classList.remove("selected");

    p1Paper.classList.remove("selected");
    p2Paper.classList.remove("selected");

    p1Scissors.classList.remove("selected");
    p2Scissors.classList.remove("selected");
})


