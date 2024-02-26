/*

Datatypes in JavaScript :
        Datatypes are classified into two cateogries - 
                                                        Primitive &
                                                        Object

    Primitive Datatypes : 
        they are of 7 types :  
                                Number
                                String
                                Boolean
                                undefined
                                Null
                                Symbol
                                BigInt

** JavaScript supports dynamic typing : no need to define datatype of a variable and it can be changed later tooo;
        ex : let a = '1000'; //String
         a = 1000; //Number
         a = true; //boolean
                                
*/

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
// OR 
console.log(typeof(javaScriptIsFun));

// String literals -> '' or "" but same on starting and ending of string

javaScriptIsFun = 1000;
// boolean is changed to number is an example of Dynamic typing

console.log(typeof javaScriptIsFun);

// Undefined is a datatype which allows variable to store a value which is still undefined which simply means defining and instructing a variable that it's values is not intialized yet, Undefined is a value as well as a Datatype

// Null : Null is a datatype but returns it's type as Object, null means nothing, completly empty;

