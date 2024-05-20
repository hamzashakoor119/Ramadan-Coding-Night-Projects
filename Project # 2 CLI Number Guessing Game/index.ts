#!/usr/bin/env node

import inquirer from "inquirer";

console.log("\n\t( Wellcome To Number Guessing Game With Hamza )\n");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const userInput = await inquirer.prompt([
  {
    message: "Please Type Your Guessing Number (between 1 to 10):",
    type: "number",
    name: "userGuessedNo",
  },
]);

// Conditional Statements:

if (userInput.userGuessedNo === randomNumber) {
  console.log("Congratulations! You Winn The Game ! You Guessed the Correct Number.");
} else {
  console.log("Sorry, You Lose The Game Because You Guessed a Wrong Number.");
}

