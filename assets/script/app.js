'use strict';

const input = document.querySelector('.input');
const number = document.querySelector('.number');
const count = document.querySelector('.num-of-guesses');
const button = document.querySelector('.reset-button');

let myNum = Math.floor(Math.random() * 100);
let counter = 4;

function computeGuess(num) {
    counter--;
    if(num > myNum) {
        return 'My number is smaller';
    } else if(num < myNum) {
        return 'My number is bigger';
    } else {
        return 'Correct!'
    }
}

function reset() {
    counter = 4;
    myNum = Math.floor(Math.random() * 100);
    number.innerText = 0;
    input.value = '';
    input.disabled = false;
    count.innerText = `${counter + 1}`;
    input.placeholder = 'Guess a number from 1-100';
    button.classList.add('hide');
}

button.addEventListener('click', () => {
    reset();
});

function getResult(event) {
    let val = 0;
    let result = '';
    if (event.key === "Enter") {
        event.preventDefault();
        val = input.value;
        
        if(!isNaN(val) && val != '') {
            if(counter > 0) {
                console.log('test');
                console.log(counter);
                count.innerText = `${counter}`;
                result = computeGuess(val);
                number.innerText = val;
                input.value = '';
                input.placeholder = result;
            }
            else {
                count.innerText = `${counter}`;
                input.value = '';
                input.placeholder = `Nice try, my number was ${myNum}`;
                input.disabled = true;
                button.classList.remove('hide');
            }
        }
        else {
            input.value = '';
            input.placeholder = 'Guess a number from 1-100';
        }
    }
}

input.addEventListener('keydown', getResult);
