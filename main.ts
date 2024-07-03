#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
    USD : 1, // base currency
    EUR : 0.91,
    PKR : 280,
    GBP : 0.76,
    INR : 74.57,
}

let moneyExchange = await inquirer.prompt(
    [
        {   name: "from",
            message: "Enter From Currency: ",
            type: "list",
            choices: ["USD","INR", "GBP", "EUR", "PKR"]
        },
        {   name: "to",
            message: "Enter To Currency: ",
            type: "list",
            choices: ["USD","INR", "GBP", "EUR", "PKR"]
        },
        {
            name: "amount",
            message: "Enter The Amount: ",
            type: "number",
        }
    ]
)

let fromAmount = currency[moneyExchange.from];
let toAmount = currency[moneyExchange.to];
let amount = moneyExchange.amount;
let baseAmount = amount / fromAmount;
let finalAmount = baseAmount * toAmount;
console.log(finalAmount.toFixed(2));
