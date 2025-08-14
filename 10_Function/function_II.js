// Part II of Function in JS with rest operator(...)

function calculatorCartPrice(num0,...num1){
    return num1
}

// console.log(calculatorCartPrice(2, 512, 44561));

// how to use and pass an object in function
const userData = {
    name: "ShivSinghKeer",
    age: 22
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and his age is ${anyobject.age}`);
}

// handleObject(userData)

// handleObject({
//     name: "alpha",
//     age: 12
// })


// how to use and pass an array in function

const myNewArray = [1,22,3423,34235]

function getmyupdateArray(myArray){
    return myArray[2]
}

console.log(getmyupdateArray(myNewArray))
console.log(getmyupdateArray(["myNewArray", "dfsg", 54]))