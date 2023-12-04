var displayDiv = document.querySelector("#display");
displayDiv.innerText = "Some new value";
let currentInput = '0';
let operator = null;
let prevInput = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = operator ? `${prevInput} ${operator} ${currentInput}` : currentInput;
}

function press(value) {
    if (value === '.') {
        if (!currentInput.includes('.')) {
            currentInput += value;
        }
    } else {
        currentInput = (currentInput === '0') ? value.toString() : currentInput + value;
    }
    updateDisplay();
}


function setOP(op) {
    if (currentInput !== '0') {
        prevInput = currentInput;
    }
    operator = op;
    currentInput = '';
    updateDisplay();
}

function clr() {
    currentInput = '0';
    operator = null;
    prevInput = null;
    updateDisplay();
}

function calculate() {
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = (num1 + num2).toString();
            break;
        case '-':
            currentInput = (num1 - num2).toString();
            break;
        case '*':
            currentInput = (num1 * num2).toString();
            break;
        case '/':
            currentInput = (num2 !== 0) ? (num1 / num2).toString() : 'Error';
            break;
    }

    operator = null;
    prevInput = null;
    updateDisplay();
}

document.getElementById('equals').addEventListener('click', calculate);
