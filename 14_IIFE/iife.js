// Immeditiely Invoked Function Expression (IIFE)
// Use of IIFE - it exceutes function Immeditiely / To prevent polluted from global scope

// without IIFE
function chai(){
    console.log(`DB CONNECTED`)
}

chai()

// with IIFE
(function chai(){
    console.log(`DB CONNECTED TWO`)
})(); //we have to close IIFE with semicolon ; at end

// using IIFE with parameter N Argument
(function aurCode(server){
    console.log(`DB CONNECTED WITH ${server}`)
})("MongoDB");

// with arrow function using IIFE without parameter N Argument
( () => {
    console.log(`DB CONNECTED THREE`)
} )();

// with arrow function using IIFE with parameter N Arugment
( (servertwo) => {
    console.log(`DB CONNECTED WITH ${servertwo}`)
} )("Node.js");