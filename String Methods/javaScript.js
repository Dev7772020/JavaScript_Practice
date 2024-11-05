// let username = "DevSharma";

// username.charAt(0);
// username.indexOf("s");
// username.lastIndexOf("a");
// username.length;
// username = username.trim();
// username = username.toUpperCase();
// username = username.toLowerCase();
// username = username.repeat(5);
// username = username.startsWith(" ");
// username = username.includes(" ");
// username = username.replaceAll("a" , "_");
// username = username.padStart(15 , "-");
// username = username.padEnd(15 , "-");

// console.log(username);

/*******************************************/

// const fullName = "Dev Sharma";

// let firstName = fullName.slice(0 , 3);
// let lastName = fullName.slice(4);

// let firstChar = fullName.slice(0 , 1);
// let lastChar = fullName.slice(-2)

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);

/*******************************************/

// const fullName = "Deva Sharma";

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

/*******************************************/

// const email = "dev007@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extention = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extention);

/*******************************************/

// let username = window.prompt("Enter The username");

// username = username.trim();
// let firstChar = username.charAt(0);
// firstChar = firstChar.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = firstChar + extraChars;

// console.log(username);

/*******************************************/

let username = window.prompt("Enter The username");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);