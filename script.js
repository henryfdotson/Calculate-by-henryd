const calculator = document.getElementById('calculator');
var resultDisplay = document.getElementById('result');
var value1;
var value2;
var number = 0;
var firstValueAquired = false;
var operatorAquired = false;

// Methods

function changeButtonColor(color) {
  var btns = document.getElementsByClassName('calc-button');
  for(i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = color;
  }
}

function getValue(number) {

  // Check to see if first value has been aquired yet
  if (firstValueAquired == false) {
    value1 = number;
    resultDisplay.textContent = value1;
    firstValueAquired = true;
    changeButtonColor('lightgray');
  }
  // Once the first value has been aquired, get the second
  else {
    value2 = number;
    changeButtonColor('black');
  }

}

function addNumbers(a, b) {
  first = a;
  second = b;
  result = a + b;
  resultDisplay.textContent = result;
}

function equals() {

  resultDisplay.textContent = result;
}