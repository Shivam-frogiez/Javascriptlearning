// how to use this and current contest in js

const user1 = {
    username: "ShivSinghKeer",
    website: "Frogiez.Inc",

    welcomeMessage: function(){
        console.log(`The Username is ${this.username} and belongs to this ${this.website}`)
        // console.log(this)
    }
}

user1.username = "Gopal"
// user1.welcomeMessage()
// console.log(typeof(user1))

// we cant use this in function, used in Object only

// function thisuser(){
//     const usernamexx = "ShivSinghKeer"
//     console.log(this)
//     console.log(this.usernamexx)
// }

// thisuser()

// const thisuser = function(){
//     let usernamexx = "Shiv Singh Keer"
//     console.log(usernamexx)
// }
// thisuser()

// making arrow function came later in js in bs6
// const thisuser = () => {
//     let usernamexx = "Shiv Singh Keer"
//     console.log(this.usernamexx)
// }
// thisuser()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(5, 2))

// Inpelicit Return
const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(5, 2))

// video This and arrow function at 15:44:02