let display = document.querySelector('.main-screen')
let displayValue;
let numOne;
let numTwo;
let operator;
let clearState = false
let operatorPressed = false
let equalityPressed = false

function operate(numOne, numTwo, operator) {
    if (operator === '+') {
        return Number(numOne) + Number(numTwo)
    } else if (operator === '-') {
        return Number(numOne) - Number(numTwo)
    } else if (operator === '*') {
        return Number(numOne) * Number(numTwo)
    } else if (operator === '/') {
        return Number(numOne) / Number(numTwo)
    }
}

let numButtons = document.querySelectorAll('.number')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorPressed === true || clearState === true || equalityPressed === true) {
            display.textContent = '';
            operatorPressed = false
            clearState = false
            equalityPressed = false
        }
        display.textContent = display.textContent + button.textContent;
        displayValue = display.textContent;
        if (numOne !== undefined) numTwo = displayValue
    })
})

let operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (numTwo !== undefined) {
            display.textContent = operate(numOne, numTwo, operator)
            displayValue = display.textContent
        }
        numOne = displayValue;
        if (button.textContent !== '=') {
            operator = button.textContent;
            operatorPressed = true;
        } else if (button.textContent) {
            numTwo = undefined;
            numOne = undefined;
            equalityPressed = true;
        }
    })
})

let clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', () => {
    display.textContent = '0'
    displayValue = display.textContent;
    numTwo = undefined;
    numOne = undefined;
    clearState = true
})

//fix number + equals + number + equals bug
//check for number length

