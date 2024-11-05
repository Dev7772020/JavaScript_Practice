const rollBTN = document.getElementById("rollBTN");
const result = document.getElementById("result");
const max = 6;
const min = 1;


rollBTN.onclick = function(){
    let randomNUM;
    randomNUM = Math.floor(Math.random() * max) + min;
    result.textContent = randomNUM;
    // console.log(randomNUM);
}