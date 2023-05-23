function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
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

let numButtons = document.querySelectorAll('.number')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = display.textContent + button.textContent;
        displayValue = display.textContent;
        if (numOne !== undefined) numTwo = displayValue
        // add display.textContent update
    })
})

let operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        numOne = displayValue;
        operator = button.textContent;
        // console.log(button.textContent);
        // console.log(numOne);
        if (numTwo !== undefined) operate(numOne, numTwo, operator)
    })
})


