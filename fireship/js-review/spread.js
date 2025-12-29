// how to object merge two object from different API
const obj1 = {
    first: 'a',
    second: 'b',
    third: 'c',
}

const obj2 = {
    third: 'd',
    fourth: 'e',
}

// it's work but there is a better way
// ...assign({newobject}, lowPriority, highPriority)
// theses object have a same property called third, the high priority will remaing in the object
const full = Object.assign({}, obj1, obj2);
console.log(full)

console.log('-------------------------Spread-Type 1------------------------------')
const full2 = {...obj1, ...obj2}
console.log(full2)

console.log('-------------------------Spread-Type 2------------------------------')
const obj3 = {
    first: 'a',
    second: 'b',
    third: 'c',
}

const obj4 = {
    ...obj3,
    third: 'd',
    fourth: 'e',
}

// You can add the spread inside of the object
// the priority will change depending on position
// Above, the property third will be 'd' because the object is set before
console.log(obj4)

console.log('-------------------------Array Spread------------------------------')
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];