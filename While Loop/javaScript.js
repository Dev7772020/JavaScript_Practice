// let x = "";
 
// while(x === "" || x === null){
//     x = window.prompt(`Enter your name`);
// }

// console.log(`Hello ${x}`);

/* ***************************************** */

let logedIN;
let username;
let password;

while(!logedIN){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "myUsername" && password === "myPassword"){
        logedIN = true;
        console.log(`You are LogedIN`);
    }
    else{
        console.log(`Credentials are incorrect please try again`);
    }
}