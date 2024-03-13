'use strict'
/*
For function declaration
it works and and functions can be accessed all over the scope

for var declarations of variables
it works but sets value as undefined that may create an issue
    ex : console.log(x);// no error here but returns undefined
        var x = 10;

for let and const declaration of variables it can be said as not works 
    compiler or JIT knows they are exists but refers them as unintailize that may lead a runtime error
        ex : console.log(y); // cannot access an un intailized variable
        const y = 10;

for function expression and arrow functions : as we define them as variable that directly depends what we used to declare them if we used var than it will not accepted as function if we want to access it before declaration

if we used let or const that we return a msg regarding unintialized variables
 */

// console.log(a);//undefined
// console.log(b);//uninitialzed
// console.log(c);//unitalized  
// console.log(d);//unitalized  
// console.log(d());//not a function XX     -- unitalized
// console.log(e);//Undefined
// console.log(e());//not a function
// console.log(f);// returns Function
// console.log(f());// Executes without any issue

var a = 10;
let b = 12;
const c = 14;
const d = () => 16;
var e = () => 18;
function f () {
    return 20;
}

// Simple functions are great works without any issue
// arrow are best when declared on top level code in top of program
// var is good but makes things unddefined due to hoisting and that invitation to bugs.


