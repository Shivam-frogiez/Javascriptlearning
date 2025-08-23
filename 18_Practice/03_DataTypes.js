// Test page 03

// 6. Write a program to check the data type of these values:
//    `"123"`, `123`, `true`, `null`, `undefined`, `[1,2,3]`.
const a = "123"
const b = 123
const c = true
const d = null
const e = undefined
const f = [1,2,3]

console.log(typeof(a), "- this was the type of a")
console.log(typeof(b), "- this was the type of b")
console.log(typeof(c), "_ this was the type of c")
console.log(typeof(d), "_ this was the type of d")
console.log(typeof(e), "_ this was the type of e")
console.log(typeof(f), "_ this was the type of f")


// 7. Convert `"50"` (string) to a number and add `20` to it.
let num1 = "50"
num1 = Number(num1)
let num2 = num1 + 20
console.log(num2)