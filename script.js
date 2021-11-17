let playerWinCount = 0; 
let computerWinCount = 0;
let roundCount = 0;

function playRound() {
function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    let compChoice = arr[Math.floor(Math.random() * arr.length)];
        return compChoice;
}

function getPlayerChoice() {
    var str = prompt("What is your selection for this round?");
    if (!str) {
        return;
}
    let newStr = str.toLowerCase();
    let capStr = newStr[0].toUpperCase() + newStr.slice(1);
    if (capStr !== "Rock" && capStr!== "Paper" && capStr !== "Scissors") {
        return;
} else {
        return capStr;
    }
}
    let playerSelection = getPlayerChoice();
    let computerSelection = computerPlay();            
        if (playerSelection === computerSelection) {
        alert("Try again... You both chose " + playerSelection + "!");
        return;
} else {
        if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
        alert("You win! Rock beats Scissors!");
        playerWinCount++;
        roundCount++;
        console.log("Player wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;

} else if (computerSelection === "Paper") {
        alert("You lose! Paper beats Rock!");
        computerWinCount++;
        roundCount++;
        console.log("Computer wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;
    }
    
} else  if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
        alert("You win! Paper beats Rock!");
        playerWinCount++;
        roundCount++;
        console.log("Player wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;
    
} else if (computerSelection === "Scissors") {
        alert("You lose! Scissors beats Paper!");
        computerWinCount++;
        roundCount++;
        console.log("Computer wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;
}
} else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
        alert("You lose! Rock beats Scissors!");
        computerWinCount++;
        roundCount++;
        console.log("Computer wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;
        
} else if (computerSelection === "Paper") {
        alert("You win! Scissors beats Paper!");
        playerWinCount++;
        roundCount++;
        console.log("Player wins! Current score: Player-" + playerWinCount + ", Computer-" + computerWinCount);
        return;
            }
        }
    }
}

function game() {
    while (roundCount < 5) {
        playRound();
    }
    if (playerWinCount > computerWinCount) {
        alert("Player wins! The score was " + playerWinCount + " - " + computerWinCount);
    } else if (computerWinCount > playerWinCount) {
        alert("Computer wins! The score was " + computerWinCount + " - " + playerWinCount);
    } else {
        alert("Something crazy happened and I have no idea who won!");
    }
}

