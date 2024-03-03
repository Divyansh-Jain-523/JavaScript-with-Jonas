'use strict'

// what are fuctions : a function is a reuseable block of code allows us to reuse code pass data (parameters and arguments) to it and fetch data by accessing it (using return);

function firstFunction(){
    console.log('hi');
}

firstFunction(); // invoking function

firstFunction(); // can be reused multiple times

function secondFunction(para1 , para2){
    console.log("Second funtion with use of parameters and arguments");
    console.log(`add : ${para1} + ${para2} = ${para1+para2}`);
}

secondFunction(2,12); // passing 2 and 12 as an arguments

function printTable(n){
    let i = 1;
    while(i <= 10){
        console.log(`${n} * ${i} = ${n*i}`);
        i++;
    }
    // this function will print a table of n 
}

printTable(21);

// returning a value throw a function 

function expo(num, power){
    return num**power;
}

const num = 2;
const power = 10;
const result = expo(num,power);
console.log(result);

// this same can be done also by
console.log(expo(2,20))