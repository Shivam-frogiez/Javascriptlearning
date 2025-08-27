// Nums And Math in JS

// Generate a random number between 1 and 10.
// console.log(Math.round(Math.random()*10))



// Round 4.7 up and 4.2 down using the Math object.
// console.log(Math.ceil(4.7))
// console.log(Math.floor(4.2))



// Write a program to find the largest number in an array without using Math.max().
const myArr = [1234, 31, 12, 235, 23, 3412]

// ????????????????????????????????????????????????????????????????




// function rockPaperScissors() {
//     const choices = ["rock", "paper", "scissors"];
//     rl.question("Choose rock, paper, or scissors: ", (user) => {
//         const computer = choices[Math.floor(Math.random() * 3)];
//         console.log(`Computer chose: ${computer}`);
//         if (user === computer) {
//             console.log("It's a tie!");
//         } else if (
//             (user === "rock" && computer === "scissors") ||
//             (user === "paper" && computer === "rock") ||
//             (user === "scissors" && computer === "paper")
//         ) {
//             console.log("You win! 🎉");
//         } else {
//             console.log("You lose! 😢");
// const readline = require("readline");

// // Create input interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//         }
//     });
// }
// rockPaperScissors()


// const readline = require("readline");

// // Create input interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function passwordGenerator() {
//     rl.question("Enter password length: ", (len) => {
//         len = parseInt(len);
//         const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
//         let password = "";
//         for (let i = 0; i < len; i++) {
//             password += chars.charAt(Math.floor(Math.random() * chars.length));
//         }
//         console.log(`Generated Password: ${password}`);
//     });
// }
// passwordGenerator()

const readline = require("readline");

// create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function passwordGenerator(){
    rl.question("Enter password length: ", (len) => {
        len = parseInt(len);
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
        let password = "";
        for (let i = 0; i < len; i++){
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log(`Generated Password: ${password}`);
    })
}
passwordGenerator()