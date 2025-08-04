// array part II in js

const marvel_Heros = ["Ironman", "Spiderman", "Thor", "Groot"]
const dc_Heros = ["Batman", "Flash", "Superman"]

// marvel_heros.push(dc_heros)

// const all_Heros = marvel_Heros.concat(dc_Heros)
// console.log(all_Heros);

// alternative method of adding ararys

// console.log(...marvel_Heros, ...dc_Heros);

const another_Array = [0, 1, 2, [0, 11,156], 451, 45, 4541, [0, 1, [0, 15, 54]], 12]
console.log(another_Array.flat(1)); //flat value can also be Infinity for all sub-arrays

console.log(Array.isArray("ShivSinghKeer"));
console.log(Array.from("ShivSinghKeer"));
console.log(Array.from({this:"value", that:"is"}));

let score1 = 100
let score2 = 221
let score3 = 420
let score4 = 240

console.log(Array.of(score1, score2, score3, score4));







