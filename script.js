const calculator = document.getElementById('calculator');
var resultDisplay = document.getElementById('result');
var value1;
var value2;
var number = 0;
var firstValueAquired = false;
var operatorPressed = false;
var operatorAquired = false;
var storedNumber = "";
var storedOperator;
var secondStoredNumber = "";
var equalsGet = false;

// Methods

function changeButtonColor(color) {
  var btns = document.getElementsByClassName('calc-button');
  for(i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = color;
  }
}

// This function can be called to get a number upon a button click
function getNumbers(pressedButton) {
  if (firstValueAquired != true) {
    do {
      if((pressedButton != "+") && (pressedButton != "-") && (pressedButton != "x") && (pressedButton != "/") ) {
        storedNumber = storedNumber +pressedButton;
        document.getElementById('result').textContent = storedNumber;
      }
      else {
        storedOperator = pressedButton;
        document.getElementById('result').textContent = storedOperator;
        operatorAquired = true;
        firstValueAquired = true;
      }
    } while (operatorAquired = false);
  }
  else {
    // Need to gray out operators and highlight "=" sign
    do {
      if(pressedButton != "=") {
        secondStoredNumber = secondStoredNumber +pressedButton;
        document.getElementById('result').textContent = secondStoredNumber;
      }
      else {
        equalsGet = true;
        theResult = eval(storedNumber+storedOperator+secondStoredNumber);
        document.getElementById('result').textContent = theResult;
      }
    } while (equalsGet = false);
  }
}