#!/usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstnum", type: "number", name: "firstnum" },
    { message: "Enter secondnum", type: "number", name: "secondnum" },
    {
        message: "Please select operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnum + answer.secondnum);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnum - answer.secondnum);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnum * answer.secondnum);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnum / answer.secondnum);
}
else {
    console.log("Please select a valid operator");
}
