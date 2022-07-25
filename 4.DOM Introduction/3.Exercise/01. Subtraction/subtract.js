function subtract() {
  let firstNumber = document.getElementById("firstNumber");
  let firstNumAsNum = Number(firstNumber.value);
  let secondNumber = document.getElementById("secondNumber");
  let secondNumAsNum = Number(secondNumber.value);
  let result = firstNumAsNum - secondNumAsNum;

  let resultElement = document.getElementById("result");
  resultElement.textContent = result;

//   document.getElementById("result").textContent = Number(document.getElementById("firstNumber").value) - Number(document.getElementById("secondNumber").value);
}
