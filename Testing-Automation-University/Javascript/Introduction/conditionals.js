/*
CONDITIONALS
    Control structures/ take a decision
        == equal,
        === totaly equal,
        type and value
*/

let example1 = 16;
if (example1 < 16) {
    console.log('This is a if example');
} else if (example1 < 20){
    console.log('This is a else if example');
} else {
    console.log('This is a else example')
};

/* 
Complex Conditionals 
You need to check more than 2 values (mutiple conditions)

Truth Table
AND, &&
| P | Q | P AND Q |
| T | T |    T    |
| T | F |    F    |
| F | F |    F    |
| F | F |    F    |

OR, ||
| P | Q |  P OR Q |
| T | T |    T    |
| T | F |    T    |
| F | F |    T    |
| F | F |    F    |
*/

const car = {
    price: 2000,
    color: "blue",
    numDoors: 4
};

if (car.price <= 2000 && car.color === "blue" && car.numDoors === 4) {
    console.log('Buy the car')
} else {
    console.log('keep looking')
}