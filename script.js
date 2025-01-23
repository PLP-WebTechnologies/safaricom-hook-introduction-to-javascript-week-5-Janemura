"use strict";
let name = "Mufasa The Lion King";
let number = 4;
let isKing = true;
let lions = ["Scar", "mufasa", "simba", "nala"];
let cheetah = null;

console.log(typeof (name ) + " "+  name) 
console.log(typeof(number) + " "+ number)
console.log(typeof(isKing)+" "+ isKing)
console.log(typeof(lions)+ " "+ lions) //array
console.log(typeof(cheetah)+ " "+ cheetah)

function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    
    if (isNaN(num1)) {
      alert("Please enter a valid number for the first input.");
      return;
    }
    
    let num2 = parseFloat(prompt("Enter the second number:"));
    
    if (isNaN(num2)) {
      alert("Please enter a valid number for the second input.");
      return;
    }
    
    let operation = prompt("Choose an operation (+, -, *, /):");
    
    let result;
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
      
      if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
    } else {
      alert("Invalid operation. Please choose +, -, *, or /.");
      return;
    }
    
    alert("Result: " + result);
  }
  
simpleCalculator();


  
