const readline = require("readline") //here we are importing node.js build-in module to take user input from console n give output
const fs = require("fs") //here we are importing node.js build-in module to take acces of files, folder N drives to edit, manage, delete

const FILE_PATH = "19_ExpenseTrackerProject/selftry.json"; //assigning the path of the file

//Below load data files from json file

let expenses = (() => {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, "utf8");
        return JSON.parse(data, (key, value) => {
            if (key === "date") return new Date(value);
            return value;
        });
    }
    return [];
})();



// let expenses = (() => {
//     if (fs.existsSync(FILE_PATH)) {
//         const data = fs.readFileSync(FILE_PATH, "utf8");
//         return JSON.parse(data, (key, value) => {
//             if (key === "date") return new Date(value);
//             return value;
//         });
//     } 
//       return []; // ✅ Default empty array 
// })();
