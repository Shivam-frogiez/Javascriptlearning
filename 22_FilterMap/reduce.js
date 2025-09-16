const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`The value of Acc: is ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// writing the above code in arrow function
// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`The Value of Acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0 )

// console.log(myTotal)

// now making a bill of the shopping cart

const shoppingCart = [
    {
        item: "JS Course",
        price: 2999
    },
    {
        item: "HTML Course",
        price: 1999
    },
    {
        item: "CS Course",
        price: 1999
    },
    {
        item: "Dart Course",
        price: 8999
    }
]

const priceToday = shoppingCart.reduce( (acc, list) => acc + list.price, 0 )

console.log(priceToday)