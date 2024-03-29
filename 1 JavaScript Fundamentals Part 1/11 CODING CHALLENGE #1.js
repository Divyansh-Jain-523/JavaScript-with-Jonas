/*
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88m tall.
John weights 85 kg and is 1.76 m tall.
*/


// Question 1
/*
const massMark  = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMark/ heightMark ** 2;
const johnBMI = massJohn/ heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/


const massMark  = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark/ (heightMark * heightMark);
const johnBMI = massJohn/ (heightJohn * heightJohn);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);