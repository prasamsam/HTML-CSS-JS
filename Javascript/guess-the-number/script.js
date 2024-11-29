let randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.querySelector("#user-input");
const submit = document.querySelector('.submit-button');
const guessesSlot = document.querySelector('#guesses-slot');
const remainingGuess = document.querySelector('#remaining-guesses');
remainingGuess.innerHTML = 10;
const result = document.querySelector('.result');
const startNewGame = document.querySelector('.new-game');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if(guess < 1){
        alert("Please enter number greater than 1");
    }else if(guess > 100){
        alert("Please enter number smalle than 100");
    }else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over!! The correct number was ${randomNumber}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right. The number is ${randomNumber}`);
    }else if (guess < randomNumber){
        displayMessage("The number is Too low");
    }else if( guess > randomNumber){
        displayMessage("The number is Too High");
    }
}

function displayGuess(guess){
    userInput.value = "";
    guessesSlot.innerHTML += `${guess} `;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    result.innerHTML = `<h4>${message}</h4>`;
}

function endGame(){
    userInput.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    playGame = false;
    p.innerHTML = `<span id="new-game">New Game</span>`;
    startNewGame.appendChild(p);
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#new-game');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        prevGuess = [];
        numGuess = 1;
        playGame = true;
        startNewGame.removeChild(p);
        guessesSlot.innerHTML = '';
        remainingGuess.innerHTML = `${11 - numGuess}`;
        result.innerHTML = '';
    })
}
