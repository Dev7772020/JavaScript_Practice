const decreaseBTN = document.getElementById("decrease");
const increaseBTN = document.getElementById("increase");
const resetBTN = document.getElementById("reset");
const countLable = document.getElementById("numDisplay");
let count = 0;
count = Number(count);

increaseBTN.onclick = function(){
    count++;
    countLable.textContent = count;
}

resetBTN.onclick = function(){
    count = 0;
    countLable.textContent = count;
}

decreaseBTN.onclick = function () {
    count--;
    countLable.textContent = count;
}