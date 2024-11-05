const less18 = document.getElementById("less18");
const bw1828 = document.getElementById("18to28");
const bw2835 = document.getElementById("28to35");
const above35 = document.getElementById("above35");
const married = document.getElementById("married");
const unmarried = document.getElementById("unmarried");
const submitBTN = document.getElementById("submitBTN");
const comment = document.getElementById("comment");
const input = document.getElementsByClassName("radioBtns");

submitBTN.onclick = function(){
    if(less18.checked & married.checked){
        comment.textContent = `Your Marrige is Illigal`;
    }
    else if(less18.checked & unmarried.checked){
        comment.textContent = `You are about to marry in 3-4 years`;
    }
    else if (bw1828.checked & married.checked){
        comment.textContent = `Your marrige is leagel`;
    }
    else if(bw1828.checked & unmarried.checked){
        comment.textContent = `you can marry now`;
    }
    else if (bw2835.checked & married.checked){
        comment.textContent = `Your marrige is leagel`;
    }
    else if(bw2835.checked & unmarried.checked){
        comment.textContent = `Marry hurry you are running out of age`;
    }
    else if(above35.checked & married.checked){
        comment.textContent = `Your marrige is leagel`;
    }
    else if(above35.checked & unmarried.checked){
        comment.textContent = `You are too late`;
    }

    else{
        comment.textContent = `Enter Both`;
    }
}