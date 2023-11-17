//taking input of operator
function signAdd() {
  sign = "Add";
}
function signSub() {
  sign = "Sub";
}
function signMul() {
  sign = "Mul";
}
function signDiv() {
  sign = "Div";
}

//calculating result based upon sign given by user
function calculation(a, b) {
  if (sign === "Add") {
    return a + b;
  } else if (sign === "Sub") {
    return a - b;
  } else if (sign === "Mul") {
    return a * b;
  } else {
    return a / b;
  }
}
//calculate button
function calculate() {
  var a = parseInt(document.getElementById("input-box-1").value);

  var b = parseInt(document.getElementById("input-box-2").value);

  var result = calculation(a, b);
  displayResult(result);
}

function displayResult(result) {
  document.getElementById("display-result").innerHTML = result;
}
