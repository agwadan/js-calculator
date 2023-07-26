
var firstNumber = "";
var secondNumber = "";
var operator = "";

/* Function to add */
const add = (x, y) => {
  return x + y;
}
 
const subtract = (x, y) => {
  return x - y;
}

const multiply = (x, y) => {
  return x * y;
}

const divide = (x, y) => {
  if (y === 0) {
    alert("You cannot divide by zero.");
  } else {
    return x / y;
  }
}

/* Function to perform the operation */
const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    
    case "-":
      return subtract(num1, num2);
      break;
  
    case "*":
      return multiply(num1, num2);
      break;
  
    case "/":
      return divide(num1, num2);
      break;
  
    default:
      break;
  }
}

/* function showNumber(number) {
  // Get the value of the display input.
  const displayValue = document.getElementById("display").value;

  // Update the display input with the number.
  document.getElementById("display").value = displayValue + number;
} */

/* 
 */

const buttons = document.querySelectorAll('button'); //---------------------------- Select all buttons in the html
//buttons.forEach(button => button.addEventListener('click', populateDisplay));//---- Add an event listener for each button

/* function populateDisplay(e) {
  const display = document.querySelector('#display');
  display.value = e.target.textContent;
  console.log(e.target.textContent);
  console.log(display.textContent);
}
 */
buttons.forEach(button => {
  button.addEventListener('click', (e) => { //----------------------- Add an event listener to each button
   
    const display = document.querySelector('#display'); //----------- Getting display div from the html
    
    /* Checking if the entered value is a number or an operator */
    if (e.target.className === 'num') {
      if (!operator) {
        firstNumber += e.target.textContent;
        display.value = firstNumber;
      } else {
        secondNumber += e.target.textContent;
        display.value = `${firstNumber}  ${operator}  ${secondNumber}`;
      }
    } else if (e.target.className === 'op') {
      if (firstNumber && operator && secondNumber) {
        const result = operate(operator, Number(firstNumber), Number(secondNumber)); //----- converting the string holding the operands into numbers
        display.value = result;
        firstNumber = result;
        secondNumber = '';
      }
      operator = e.target.textContent;
    } else if (e.target.id === 'equals') {
      if (firstNumber && operator && secondNumber) {
        const result = operate(operator, Number(firstNumber), Number(secondNumber));
        display.value = result;
        firstNumber = result;
        secondNumber = '';
        operator = '';
      }
    } else if (e.target.id === 'clear') {
      firstNumber = '';
      secondNumber = '';
      operator = '';
      display.value = '0';
    }
  });
});