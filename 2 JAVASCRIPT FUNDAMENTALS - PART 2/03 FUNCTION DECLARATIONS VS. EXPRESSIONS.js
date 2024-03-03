// Function declaration : defining function anywhere and invoking it form anywhere

timepass(); // invoking before declaration

function timepass(){
    console.log('kaiko aaye idhar');
}

timepass(); // invoking after declaration 

// Function Expression : assigning a function , ananoymus function into a variable can be reffered as Function expression , these type of functions having different scope

// functionTemp(); // invoking before declartion doesnt work but

const functionTemp = function (parameter)
{
    // body
    console.log('Inside Temp');
}

functionTemp(); // invoking after declartion works but