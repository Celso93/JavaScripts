/*
[ARRAY]
    A data structure to store multiple values in the same variable
    In programming, it is often helpful to work with lists of data
    index of a array [0, 1, 2]
    length start with 1
*/

const exampleArray = ['string', 0, true, undefined, null, []];
console.log(exampleArray);
console.log(exampleArray.length);

// Another thins that you can do with array
let exampleArray2 = ["texto1", "texto2", "texto3"]

// Adding new information
exampleArray2.push("texto4");
console.log(exampleArray2);

// Removing/ alocating the last element
exampleArray2.pop();
console.log(exampleArray2);

// Accesing individual index value
console.log(exampleArray2[0]);

// Becarefull witht the index this situation below
console.log(exampleArray2[100]);
