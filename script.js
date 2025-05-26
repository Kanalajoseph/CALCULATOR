// CALCULATOR PROGRAM
// This program is a simple calculator that can perform addition, subtraction, multiplication, and division.

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}