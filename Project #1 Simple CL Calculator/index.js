import inquirer from "inquirer";
const userinput = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Plzz Select a Operator For Perform Action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statment
if (userinput.operator === "Addition") {
    console.log("Your value is :", userinput.firstnumber + userinput.secondnumber);
}
else if (userinput.operator === "Subtraction") {
    console.log("Your value is :", userinput.firstnumber - userinput.secondnumber);
}
else if (userinput.operator === "Multiplication") {
    console.log("Your value is :", userinput.firstnumber * userinput.secondnumber);
}
else if (userinput.operator === "Division") {
    console.log("Your value is :", userinput.firstnumber / userinput.secondnumber);
}
else {
    "Plzz Select Valid Operator !";
}
;
