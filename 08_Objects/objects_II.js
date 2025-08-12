// const tinderUser = new Object() //but this is single-ton Object
// const tinderUserx = {} //and this is not single-ton object
// console.log(typeof(tinderUser), tinderUser);
// console.log(typeof(tinderUserx), tinderUserx);


const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            fistname: "ShivSingh",
            lastaname: "keer"
        }
    }    
}
// console.log(regularUser.fullname.userfullname.lastaname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"d"}
const obj3 = {5:"e", 6:"f"}

// const objparent = { obj1, obj2, obj3}
// const objparent = Object.assign({}, obj1, obj2, obj3)
// const objparent = {...obj1, ...obj2, ...obj3}
// console.log(objparent);

const users = [
    {
        id: 1,
        email: "S@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    }
]

// console.log(users[2].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));
