let value1 = document.getElementById('num1').value;
let value2 = document.getElementById('num2').value;

function add() {
  value1 = parseInt(document.getElementById('num1').value, 10);
  value2 = parseInt(document.getElementById('num2').value, 10);
  result = value1 + value2;
  alert(result);
}

function subt() {
  value1 = parseInt(document.getElementById('num1').value, 10);
  value2 = parseInt(document.getElementById('num2').value, 10);
  result = value1 - value2;
  alert(result);
}

function mult() {
  value1 = parseInt(document.getElementById('num1').value, 10);
  value2 = parseInt(document.getElementById('num2').value, 10);
  result = value1 * value2;
  alert(result);
}

function divi() {
  value1 = parseInt(document.getElementById('num1').value, 10);
  value2 = parseInt(document.getElementById('num2').value, 10);
  result = value1 / value2;
  alert(result);
}

function clearValues() {
  value1 = document.getElementById("num1");
  value2 = document.getElementById("num2");
  value1.value = 0;
  value2.value = 0;
}