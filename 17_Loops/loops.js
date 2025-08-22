// loops are also called itrations

// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}

// if inside for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if ( element == 5 )
    {
        // console.log("the value of i is 5")
    }
    // console.log(element)
}

// now loop inside loop

for (let i = 0; i < 10; i++) {
    // console.log(`The value of outer loop: ${i}`)
    for (let j = 0; j < 8; j++) {
        // console.log(`The value of inside loop is ${j} and it's parent loop is ${i}`)
    }
}

// Now using loop with array

const myHeros = [ "Batman", "Superman", "Ironman" ]
    // console.log(`length of myHeros Array: `, myHeros.length)
for (let i = 0; i < myHeros.length; i++) {
    const element = myHeros[i];
    // console.log(element)
}

// using break and continue in loop

// break example
for (let i = 0; i < 10; i++) {
    if ( i == 7 ){
        // console.log("Detected 7")
        break
    }
    // console.log(i)
}

// continue example
for (let index = 0; index < 10; index++) {
    if ( index == 4 ){
        console.log("Dected No 4")
        continue
    }
    console.log(index)
}