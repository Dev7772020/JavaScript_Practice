const submitBTN = document.getElementById("submitBTN");
const ageInput = document.getElementById("ageInput");

submitBTN.onclick = function(){

    let age = ageInput.value;
    // age = Number();

    console.log(age);

    if (age >= 80) {
        window.alert("You are Too old to have Licence");
    }

    else if (age >=18) {
        window.alert("You are eligible for DL");
    }

    else if (age <= 0) {
        window.alert("You are not yet born");
    }

    else if (age <=18) {
        window.alert("You are not eligible for DL");
    }

    
}

