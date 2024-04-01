#! /usr/bin/env node   
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
