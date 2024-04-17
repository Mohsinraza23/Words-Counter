#!/usr/bin/env node
// import inquirer modules which is command line interface for index.
import inquirer from "inquirer";
//Declare a constant 'answer ' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array of word to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
