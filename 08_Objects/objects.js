// Objects in js

// defining Symbol and using it
const sybx = Symbol("key1")

const js_User = {
    "full name": "ShivSingh",
    age: 19,
    [sybx]: "mykey1",
    location: "Jaipur",
    email: "shivam-frogiez@gmail.com",
    isLoggedin: true
}

// changing value of object
console.log(js_User["age"]);

// console.log(js_User.name);
// console.log(typeof js_User,",", typeof sybx)


// freezing a value of object to prevent it from being changed

js_User.age = "25"
// Object.freeze(js_User)
js_User.age = "35"
console.log(js_User["age"]);

// adding function in object

js_User.greeting = function(){
    console.log("Hello JS user");
}

console.log(js_User.greeting());

// creatimg another fumction in js to acces another value from a object
js_User.greetingtwo = function(){
    console.log(`hello js user, ${this.email}`);  
}
console.log(js_User.greetingtwo());