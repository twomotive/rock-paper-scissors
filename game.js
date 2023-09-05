function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
        return 'rock';

        case 2:
        return 'paper';

        case 3:
        return 'scissors';

        default:
        return console.log('Geçersiz sayi');
    }
};



function playerChoice () {
    let playerChoice = prompt('Please choose: rock, paper or scissors');
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}


function determineWinner (userChoice, computerChoice) {

    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        return 'You entered an invalid choice!';
    }

    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'You won!';
        }
    }

}

function playGame () {
    for (let i = 0; i < 3; i++) {
        const userChoice = playerChoice();
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('Computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame()