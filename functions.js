/*
    Reset Selections
        - set player selection boolean to false (p1Played / p2Played)
        - reset round result text
        - remove player choice from class list
        - remove selected class (remove highlighted selection)
*/
function resetSelections() {
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
}

/*
    Reset Game
        - reset player selections
        - reset score and score display back to 0
*/
function resetGame() {
    resetSelections();
    p1Score = 0;
    p2Score = 0;
    p1Span.innerText = 0;
    p2Span.innerText = 0;
    winnerDisplay.innerText = "";
    isGameOver = false;
}

/*
    Target Rounds Reached
        - function ran when number of rounds needed to win is reached by either player
        - displays winnner
*/
function targetRoundsReached() {
        isGameOver = true;
        winnerText = (p1Score == targetRoundsInt) ? "Player 1 wins" : "Player 2 Wins";
        winnerDisplay.innerText = winnerText;
}

/*
    Update P1/P2 Score and Score Display
*/
function updateP1Score() {
    p1Score += 1;
    p1Span.innerText = p1Score;
}

function updateP2Score() {
    p2Score += 1;
    p2Span.innerText = p2Score;
}