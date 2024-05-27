import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmont = baseAmount * toAmount;
let roundNum = Math.floor(convertedAmont);
console.log(roundNum);
