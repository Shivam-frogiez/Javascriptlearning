// for loop

["", "", "", ""] //strings inside array
[{}, {}, {}, {}] //object inside array

const array = [1, 2, 3, 4]
for (const i of array) {
    // console.log(i)
}

const greet = "Hello! Greetings"

for (const greetings of greet) {
    // console.log(`Each word of our greeting is ${greetings}`)
}

// Map
//appling for loop in map

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', 'France')
map.set('Ca', 'Canada')
map.set('IN', 'India') //map are unique i.e. there ignore dupliace keys 

// console.log(map);
for (const [key, value] of map) {
    // console.log(key,':-', value)
}

// now applying for of loop in object

const myObject = {
    'game1': 'IGI',
    'game2': 'NFS',
    'game3': 'Call of Duty Modern Walfare',
    'game4': 'RDR2'
}

// console.log(myObject)

// for (const [key, value] of myObject) {
//     console.log(key, value)
// }

//Note:- Object are not itrable for forof loop this has alternative method

// the method is based on for in loop

// const myLanguage = {
//     'JS': 'JavaScript',
//     'HTML': 'Hyper Text Markup Language',
//     'CSS': 'Cascadeing Style Sheet',
//     'RB': 'Ruby',
//     'Ai': 'Artifical Intelligence'
// }

// for (const key in myLanguage) {
//     console.log(`${key} is the shortcut of ${myLanguage[key]}`);
// } //continue video at 16:12:00

const myNewObject = {
    'Name' : "Shiv Singh Keer",
    'Age' : 24,
    'Subject' : 'Full Stack Developer',
    'Palace' : 'Puwaliya Gauv'
}

for (const values in myNewObject) {
    // console.log(`${values} :- ${myNewObject[values]}`)
}

// printing array in forin loops

const myNewArray = ["This" , "is" , "too" , "good" , "for" , "the" , "bycycle" ]

for (const key in myNewArray) {
    // console.log(key)
}

// now playing with for each loop

const foreachexample = ["JS" , "Css" , "HTML" , "Node" , "Flutter" , "ML"]

foreachexample.forEach( function (val){
    console.log(`${val} + 1`)
} )
