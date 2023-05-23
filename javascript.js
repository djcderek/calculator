function add(a,b) {
    return Number(a) + Number(b)
}

function subtract(a,b) {
    return Number(a) - Number(b)
}

function multiply(a,b) {
    return Number(a)*Number(b)
}

function divide(a,b) {
    return Number(a)/Number(b)
}

function operate(numOne, numTwo, operator) {
    if (operator === '+') {
        return add(numOne, numTwo)
    } else if (operator === '-') {
        return subtract(numOne, numTwo)
    } else if (operator === '*') {
        return multiply(numOne, numTwo)
    } else if (operator === '/') {
        return divide(numOne, numTwo)
    }
}

let display = document.querySelector('.main-screen')
let displayValue;
let numOne;
let numTwo;
let operator;
let clearState = false
let operatorPressed = false

let numButtons = document.querySelectorAll('.number')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (operatorPressed === true || clearState === true) {
            display.textContent = '';
            operatorPressed = false
            clearState = false
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



