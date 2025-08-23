// Test page 02

//**************** */ 4. What’s the difference between `var`, `let`, and `const`? Show examples of **scope difference**.
// let a = 5
// const b = 10
// var c = 15
// till here all works fine but var creats trouble in block scope

// here is the example
{
    let a = 10
    const b = 15
    var c = 20
}
// console.log(a);
// console.log(b);
console.log(c); //here var is inside the block scope but acting as a global scope that's why later in js in ecma script let & const came in action now we use only let and const inspite of var to write a error free code

//**************** */ 5. Create a variable using `const` and try to reassign it. What happens?
const reAssign = "testing"
console.log(reAssign);
reAssign = "anotherTesting" // reasssigning value to const gives error bcz const values can't be overwritted inspite let values can