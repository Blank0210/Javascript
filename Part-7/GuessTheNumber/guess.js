let randomNumber = parseInt(Math.random() * 100);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('guesses')
const remanining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('cliclk', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
    
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number');
    } else if(guess < 1 || guess >100){
        alert('Please enter a number between 1 and 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage('Game Over!');
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
            numGuess++;
        }
    }
}

function checkGuess() {
    if(guess === randomNumber) {
        displayMessage('Congratulations! You got it right!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}  `;
    numGuess++;
    remanining.innerHTML = `You have ${11 - numGuess} guesses left`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    const newGameBUtton = document.querySelector('#newGame');
    newGameBUtton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        playGame = true;
        guessSlot.innerHTML = '';
        remanining.innerHTML = `You have ${11 - numGuess} guesses left`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

    });
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('buttton');
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}