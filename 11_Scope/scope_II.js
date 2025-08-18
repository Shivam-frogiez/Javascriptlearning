// scope II in js function nesting and scope

function one(){
    const username = "ShivSinghKeer"
    
    function two(){
        const email = "thisismyemail@gmail.com"
        console.log(username)
    }
    // console.log(email)
    two()
}

// one()

// scope in if statement

if(true){
    const website = "forgiez.Inc"
    if (website === "forgiez.Inc"){
        const useralpha = "Shivam-frogiez"
        // console.log(`The alpha user name is ${useralpha} and belongs to this ${website}`)
    }
    // console.log(useralpha)
}

// console.log(website)

// declaring function inside a variable

// console.log(addone(8))
function addone(num1){
    return num1 + 1
}

// console.log(declFunct(2))
const declFunct = function(num2){
    return num2 + 1
}