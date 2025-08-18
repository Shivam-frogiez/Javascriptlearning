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

function thisuser(){
    const usernamexx = "ShivSinghKeer"
    console.log(this.usernamexx)
}

thisuser()