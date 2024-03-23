#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { CLIENT_RENEG_LIMIT } from "tls";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "guessNum",
    type: "number",
    message: chalk.blue("Guess any number between 1-6"),
  },
]);

if (randomNumber === answer.guessNum) {
  console.log(chalk.green("Your Guess Was Correct!"));
} else {
  console.log(chalk.red("Sorry , Better Luck Next Time :( "));
}