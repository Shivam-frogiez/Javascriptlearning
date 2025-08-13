// creating a function

function saymyName(){
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("S");
    console.log("i");
    console.log("n");
    console.log("g");
    console.log("h");
    console.log("K");
    console.log("e");
    console.log("e");
    console.log("r");
}

// saymyName()

// function addTwoNumber(number1, number2){ //here number1, number2 are called parameters of function it can be also string
//     console.log(number1 + number2);
// }

// addTwoNumber(5, 2) //here 5, 2 are arguments of function

function addingNum(num1, num2){
    // console.log(num1 + num2);
    // const result = num1 + num2
    // return result
    return num1 + num2
}

const newsum = addingNum(5, 2)
// console.log(newsum);

// function isLoggedIn(username){
//     if(username === undefined){
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} is logged in the form`
// }
// console.log(isLoggedIn("f"))

// function isLoggedIn(username){
//     if(!username){ //second way or writing unername === undefined
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} is logged in the form`
// }

// console.log(isLoggedIn(""))


// In this function default value is given N when a user input a value then it is replaced with default value
function isLoggedIn(username = "samu"){
    if(!username){ //second way or writing unername === undefined
        console.log("Please enter a user name");
        return
    }
    return `${username} is logged in the form`
}

console.log(isLoggedIn("sammm"))