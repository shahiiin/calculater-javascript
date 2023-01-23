var clear = false;
var num1;
var amalgar;

function NumberClicked(number) {
  var res = document.getElementById("result");
  if (clear == true) {
    num1 = res.value;
    res.value = '';
    clear = false;
  }
  res.value = res.value + number;
}

function OprClicked(opr) {
  clear = true;
  amalgar = opr;
}

function EqualClicked() {
  var res = document.getElementById("result");
  var num2 = res.value;
  switch (amalgar) {
    case "+":
      res.value = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      res.value = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      res.value =parseInt(num1) * parseInt(num2);
      break;
    case "/":
      res.value = parseInt(num1) / parseInt(num2);
      break;
  }
}

function ClearClicked (){
  var res = document.getElementById("result");
  res.value="";
  clear =false;
  num1 ="";
  num2 = "";
}