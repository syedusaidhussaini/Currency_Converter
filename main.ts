#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  PKR: 1, // Base Currency
  EUR: 0.91, //Random Currency
  GBP: 0.76, //Random Currency
  TAKA: 0.50, //Random Currency
  USD: 0.0036 //Random Currency
};

let user_answer = await inquirer.prompt(
  [  {
        name: 'from',
        message: "Enter from Currency",
        type: "list",
        choices:['USD','EUR','GBP','TAKA','PKR']

     },
     {
       name: 'to',
       message: "Enter to conversion currency",
       type: 'list',
       choices: ['USD','EUR','GBP','TAKA','PKR']

     },
     {
      name: 'amount',
      message: "Enter your amount",
      type: "number"
     }
  ]
);

//Dynamics equations 

let userFromCurrency = user_answer.from

let userToCurrency = user_answer.to

let fromAmount = currency[userFromCurrency]

let toAmount = currency[userToCurrency]

let amount = user_answer.amount

let baseAmount = amount / fromAmount

let convertedAmount = baseAmount * toAmount

// console.log("Your converted Currency is :",convertedAmount);

let decimalRemoval = convertedAmount.toFixed(2)

console.log("Your converted Currency is :", decimalRemoval);