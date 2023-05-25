let display = document.querySelector('.main-screen')
let displayValue;
let numOne;
let numTwo;
let operator;
let clearState = false
let operatorPressed = false
let equalityPressed = false
let lengthOkay = false

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

function checkDisplay() {
    let displayLength = display.textContent.length
    if (displayLength >= 8 && lengthOkay === false) {
        lengthOkay = false
        return lengthOkay
    } else {
        return true
    }
}

let numButtons = document.querySelectorAll('.number')
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (checkDisplay()) {
            if (operatorPressed === true || clearState === true || equalityPressed === true) {
                display.textContent = '';
                operatorPressed = false
                clearState = false
                equalityPressed = false
            }
            display.textContent = display.textContent + button.textContent;
            displayValue = display.textContent;
            if (numOne !== undefined) numTwo = displayValue
            lengthOkay = false
        }
    })
})

let operatorButtons = document.querySelectorAll('.operator')
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (numTwo !== undefined) {
            let number;
            if (String(operate(numOne,numTwo, operator)).length >= 8) {
                number = operate(numOne, numTwo, operator).toExponential(3)
            } else  {
                number = operate(numOne, numTwo, operator)
            }
            display.textContent = number
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
        lengthOkay = true
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

let delButton = document.querySelector('.delete')
delButton.addEventListener('click', () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.substring(0, display.textContent.length-1)
        displayValue = display.textContent
        //numTwo = display.textContent
    } else {
        display.textContent = 0
        displayValue = display.textContent
        //numTwo = 0
    }
})

let toggleButton = document.querySelector('.toggle')
let slider = document.querySelector('.slider')
toggleButton.addEventListener('click', () => {
    slider.classList.toggle('shiftY')
    if (slider.classList[1] === 'shiftY') {
        document.documentElement.style.setProperty('--containerColor', '#163346');
        document.documentElement.style.setProperty('--screenColor', '#005db2');
        document.documentElement.style.setProperty('--buttonColor', '#1281d1');
        document.documentElement.style.setProperty('--operatorColor', '#59baff');

    } else {
        document.documentElement.style.setProperty('--containerColor', '#ffbad1');
        document.documentElement.style.setProperty('--screenColor', '#eb749c');
        document.documentElement.style.setProperty('--buttonColor', '#f8729e');
        document.documentElement.style.setProperty('--operatorColor', '#d14f7b');
    }
})

