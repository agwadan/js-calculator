
var operator;
var num1;
var num2;

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

console.log(operate("/", 4, 0));