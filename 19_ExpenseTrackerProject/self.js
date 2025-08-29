const readline = require("readline") //here we are importing node.js build-in module to take user input from console n give output
const fs = require("fs") //here we are importing node.js build-in module to take acces of files, folder N drives to edit, manage, delete

const FILE_PATH = "19_ExpenseTrackerProject/selftry.json"; //assigning the path of the file



//Below load data files from json file
let expenses = (() => { //in expeses var if json had data then data is loaded in utf8 format i.e. text string else empty string is returened
    if (fs.existsSync(FILE_PATH)) {  //existSync is a fs function - if file exist reutrn true else false from the FILE_PATH
        const data = fs.readFileSync(FILE_PATH, "utf8"); //readFileSync is a fs function - read the JSON FILE in utf8 format
        return JSON.parse(data, (key, value) => { //converts JSON String back to JavaScript object/Array
            if (key === "date") return new Date(value); //if key is equal to date then it converts string into a Date object 
            return value; //if key date not found then returns string value
        });
    }
    return []; //if JSON file is empty reutns empty array
})();


function saveExpenses() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(expenses, null, 2));
}