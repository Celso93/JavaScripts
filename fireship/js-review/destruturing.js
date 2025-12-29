// access the properties
const dog = {
    nome: 'peter',
    idade: 15,
    friend: "cat",
    bark(){
        console.log('au au')
    }
}

// bad way to access many properties
//const name = dog.name;
//const age = dog.age;

// best way
// you can change the name of a property
const { nome, idade, friend: amigo } = dog;
console.log(nome)
console.log(idade)
console.log(amigo)


console.log("----------------------ARRAY-----------------------")

const example = ['foo', 'bar', 'baz']

// destruturing: other way to access
const [a, b, c] = example;
console.log(a)

console.log("----------------------COURSE EXAMPLES-----------------------")

// Object destructuring
const person = {
  name: 'John',
  age: 32,
  city: 'New York',
  country: 'USA'
};

const { name, age } = person;

// Object destructuring with alias
const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;