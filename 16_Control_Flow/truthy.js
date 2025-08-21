// truthy value or falsy value

// const thisUser = BigInt(0) 

// if (thisUser){
//     console.log("It's working fine in this code");
// }
// else{
//     console.log("!Not working");   
// }

// falsy values: false, 0, -0, BigInt 0n, null, undefined, NaN
// truthy values: true, "0", 'false', " ", [], {}, function(){}

//  A Way to check array is empty or not
// const userEmail = []

// if (userEmail.length === 0){
//     console.log("Ya it Empty");
// }
// else{
//     console.log("No it does not Empty");
// }


// A way to check empty object
const newObj = {
    name: "Shiv Singh"
}

if (Object.keys(newObj).length === 0){
    console.log("Ya it's Empty")
}
else{
    console.log("No it's not Empty")
}