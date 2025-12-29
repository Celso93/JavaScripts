/*
[LOOPS]
    Examples
      For
      While

    convetion, we start with i.. and letter after that/
*/

// For(count; condition; counter++)
const names = ['oslec', 'name', 'luffy', 'zoro']
const numbers = [1, 2, 3, 4]

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

for (let j = 0; j < numbers.length; j++){
    console.log(numbers[j] * 2);
};

console.log('---------------------------------------------')

// Most the use of while is when you need a condition to stop loop

let password = "tomorrow";
let userGuess = "";

// prompt/alert to no run in nodejs, just in the console ! Use the loops.html to check this


// while (userGuess !== password) {
//    userGuess = prompt("Please enter your password");
// };

// alert("Login Successful");

// Warning do not use this for loggin

// do {logic} while (boolean)
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--
} while (number > 0);

console.log(original + " factorial is " + factorial);
