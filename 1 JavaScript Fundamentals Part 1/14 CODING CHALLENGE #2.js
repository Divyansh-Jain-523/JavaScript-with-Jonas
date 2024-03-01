/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9) !"
HINT: Use an if/else statement
GOOD LUCK
*/

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);


// Solution 1
// if(markBMI > johnBMI){
//     console.log("Mark's BMI is higher than John's!");
// }
// else
//     console.log("John's BMI is higher than Mark's!");

// Solution 2
if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`);
}
else
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
