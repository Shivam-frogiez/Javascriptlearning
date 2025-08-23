//for loop in js

// ["", "", "", ""] this is string inside array
// [{}, {}, {}, {}] this is object inside array

// for of loop with array

const myArr = [2, 4, 6, 8, 10]

for (const i of myArr) {
    // console.log(`The number is ${i}`)
}

// for of loop with string

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('UK', 'United Kingdom')
map.set('IN', 'India') //if we try to duplicate it wont't Map provide unique data


console.log(map);

video continue from 9:00 Video No. 29