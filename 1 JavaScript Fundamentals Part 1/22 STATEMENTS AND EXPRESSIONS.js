/*
Expressions vs Statement

Expressions are the line of code which produces any kind of value it may be either string boolean or a number
    for ex : 2 + 45 is an Expression

Statement are line of code which instructs system what to do and when it may use expressions under it;

    ex: age = 23; //Expression
        if(age < 24){
            console.log("Hi");
        }

        // this whole is reffered as a Statement
*/


const currentYear = 2024;
const birthOfYear = 2003;
const age = currentYear - birthOfYear ;

// above all are Expressions


if(age < 24){
    console.log("Under 24");
}
else{
    console.log('Sorry Uncle');
}

// Above all are Statements 
