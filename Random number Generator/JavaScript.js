const minVal = document.getElementById("minVal");
const maxVal = document.getElementById("maxVal");
const display = document.getElementById("display");
const generateBTN = document.getElementById("generateBTN");

generateBTN.onclick = function(){
    let min = minVal.value;
    let max = maxVal.value;
    min = Number(min);
    max = Number(max) + 1;

    display.textContent = Math.floor(Math.random() * (max - min)) + min;
}
