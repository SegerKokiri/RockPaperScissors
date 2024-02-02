const RPS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return (RPS[(Math.floor(Math.random() * RPS.length))]);
}


function playRound(player, computer) {
    const playerWin = "You Win! " + player + " beats " + computer
    if (player == computer) {
        return "Tie"
        // return "It's a Tie! Player picked " + player + " and the computer picked " + computer;
    }
    if (player == "rock" && computer == "scissors" || player == "scissors" && computer == "paper" || player == "paper" && computer == "rock") {
        return "Win"
        // return playerWin;
    }   else {
        return "Lose"
        // return "You lose! " + computer + " beats " + player;
    }
}

function playGame() {
    let rounds = 1
    let playerWins = 0
    let computerWins = 0
    let ties = 0

    while (rounds <= 5) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        let computerSelection = getComputerChoice()
        let results = playRound(playerSelection.toLowerCase(), computerSelection);
        if (results == "Win") {
            playerWins++
            console.log(`You won this round since ${playerSelection} beats ${computerSelection}.`)
        }   else if (results == "Lose") {
            computerWins++
            console.log(`You lose this round since ${computerSelection} beats ${playerSelection}.`)
        }   else {
            ties++
            console.log(`It's a tie! Player picked ${playerSelection} and Computer picked ${computerSelection}.`) 
        }
        rounds++
    }
    if (playerWins > computerWins) {
        return `The player wins ${playerWins} to ${computerWins} but they tied ${ties} times.`
        // return "The player wins " + playerWins.toString() + " to " + computerWins.toString() + " but they tied " + ties.toString() + " times."

    }   else if (playerWins == computerWins) {
        return `It's a tie! Player score at ${playerWins} and Computer score at ${computerWins}.`
    }
        else {
        return `The player loses ${playerWins} to ${computerWins} but they tied ${ties} times.`
    }

}


console.log(playGame())



