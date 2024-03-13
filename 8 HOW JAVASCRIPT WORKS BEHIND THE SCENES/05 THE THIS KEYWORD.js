// this keyword is very dynamic in nature
// we are learning use of 'this' for strict mode

'use strict'

// this keyword with functions 

// this cannot be used with/within an arrow or a function expression that is drawback of it, but it refers object of its parent function

let f = () => {
    console.log(this);
}
let g = function () {
    console.log(this);
}
f();
g();
console.log(this) ;

// with normal function is we calling a method using objectname ex obj.name() then this will refer to obj as that invokes the method

// if we used nothing, directly execution that than it will undefined for strict mode and refers window for normal mode

const jonas = {
    cl : function (){
        console.log(this);
    },
    age: 17
};

jonas.cl();

const j2 = {

};
j2.cl = jonas.cl;

j2.cl();