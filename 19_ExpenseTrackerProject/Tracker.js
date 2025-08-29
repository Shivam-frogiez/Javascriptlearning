const readline = require("readline");
const fs = require("fs");

// ✅ File to store expenses
const FILE_PATH = "19_ExpenseTrackerProject/expenses.json";

// ✅ Load expenses from file or use default
let expenses = (() => {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, "utf8");
        return JSON.parse(data, (key, value) => {
            if (key === "date") return new Date(value);
            return value;
        });
    } 
      return []; // ✅ Default empty array 
})();

// ✅ Save expenses to file
function saveExpenses() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(expenses, null, 2));
}

// ✅ Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ✅ Menu
function showMenu() {
    console.log(`
    ========== Expense Tracker ==========
    1. Add Expense
    2. View All Expenses
    3. View Summary
    4. Delete Expense
    5. Exit
    `.trim());
}

// ✅ Add Expense
function addExpense(description, amount, date) {
    const expense = {
        description: description.trim(),
        amount: Number(amount),
        date: new Date(date)
    };
    expenses.push(expense);
    saveExpenses(); // Save after adding
    console.log("✅ Expense added successfully!");
}

// ✅ View Expenses
function viewExpenses() {
    console.log("\n===== All Expenses =====");
    if (expenses.length === 0) {
        console.log("Cart is Empty! Please add Some.");
    } else {
        expenses.forEach((exp, index) => {
            console.log(`${index + 1}. ${exp.description.toUpperCase()} - ₹${exp.amount} on ${exp.date.toDateString()}`);
        });
    }
}

// ✅ Summary
const calculateTotal = () => expenses.reduce((sum, exp) => sum + exp.amount, 0);
const calculateMax = () => Math.max(...expenses.map(exp => exp.amount));
const calculateMin = () => Math.min(...expenses.map(exp => exp.amount));
const calculateAverage = () => expenses.length > 0 ? (calculateTotal() / expenses.length).toFixed(2) : 0;

function viewSummary() {
    console.log("\n===== Summary =====");
    console.log(`Total Expenses: ₹${calculateTotal()}`);
    console.log(`Average Expense: ₹${calculateAverage()}`);
    console.log(`Max Expense: ₹${calculateMax()}`);
    console.log(`Min Expense: ₹${calculateMin()}`);
}

// ✅ Delete Expense
function deleteExpense(index) {
    if (index >= 0 && index < expenses.length) {
        expenses.splice(index, 1);
        saveExpenses(); // Save after deleting
        console.log("✅ Expense deleted successfully!");
    } else {
        console.log("❌ Invalid index.");
    }
}

// ✅ Ask Question (Promise)
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, ans => resolve(ans)));
}

// ✅ Main Loop
async function main() {
    let exit = false;
    while (!exit) {
        showMenu();
        let choice = await askQuestion("Enter your choice: ");
        choice = Number(choice);

        switch (choice) {
            case 1:
                let desc = await askQuestion("Enter description: ");
                let amt = await askQuestion("Enter amount: ");
                let date = await askQuestion("Enter date (YYYY-MM-DD): ");
                addExpense(desc, amt, date);
                break;

            case 2:
                viewExpenses();
                break;

            case 3:
                viewSummary();
                break;

            case 4:
                viewExpenses();
                let delIndex = await askQuestion("Enter expense number to delete: ");
                deleteExpense(Number(delIndex) - 1);
                break;

            case 5:
                exit = true;
                console.log("✅ Thank you for using Expense Tracker!");
                break;

            default:
                console.log("❌ Invalid choice. Try again.");
        }
    }
    rl.close();
}

// ✅ Start App
main();
