const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num0 = document.getElementById("num0");
const number = document.getElementById("number");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equalto = document.getElementById("equalto");
const answerdisplay = document.getElementById("answerdisplay");

let displayNUM = 0;

num7.onclick = function(){
    displayNUM = answerdisplay.textContent = 7;
}

// document.getElementById("answerdisplay").textContent = 7;


