const textBox = document.getElementById("textBox");
const radioF = document.getElementById("radioF");
const radioC = document.getElementById("radioC");
const result = document.getElementById("result");
let temp;

function convert() {
  if (radioF.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } 
  else if (radioC.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp + "°C";
  } 
  else {
    result.textContent = "Please select a unit";
  }
}
