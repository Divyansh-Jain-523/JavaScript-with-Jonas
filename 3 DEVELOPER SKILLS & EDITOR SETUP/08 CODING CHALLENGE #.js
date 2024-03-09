// Coding Challenge #1
'use strict'
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days • .. 21°C in 2 days ... 23°C in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr'
and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5,-5, 0, 4]
*/

const printForecast = function (readings){
    let str = "";
    for(let i = 0 ; i < readings.length ; i++){
        debugger;
        str += (`... ${readings[i]}ºC in ${i+1} days `);
    }
    console.log(str);
}

const readings1 = [17, 21, 23];
const readings2 = [12, 5,-5, 0, 4];

printForecast(readings1);
// debugger ka use krna abhi tak nhi smja 😢