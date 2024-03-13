// now we are going to learn what type of functions needs to used and when

// as we know 
/*
this will refer undefined when we excute function directly
this will refer window we logged to console directly 
this will refer window / undefined when tries to access an arrow function refer this for its parent and parent is window for that moment

now a new this

const jonas = {
    age : 12,
    const pAge : function (){
        console.log(this.age);//this will return jonas.age i.e. 12

        // now we want to return age - 1in new function under same
        const pAge2 = function () {
            return this.age -1;
        }
        pAge2();// as this is direct call this refered to undefined and error thrown as undefined.age not declared

        
        
    }
}

//but if we accidently declare var age = x;
then this age became a property of window object leads to return x which may intorduce some bugs

ex : var age = 12;// window.age = 12 property genrated
const obj = {
    c : function (){
        console.log(this.age);//this refer to 
    },
    d : () => {
        console.log(this.age);
    }
}
obj.c();
obj.d();
*/
/*
const x = {
    age : 12,
    f : function (){
        console.log(this.age); // this refer to 'x' here 

        // const y = function (){
        //     console.log(this.age);//returns undefiend as of now but we want to access age here so use arrow function
        // }

        const y = () => {
            console.log(this.age);// this refer to object of parent function as arrow doesnt have its own this so this will refer to object of f that is x and will give x.age
        }
        y();
    }
}
x.f();
*/

'use strict'
var age = 12;
const obj = {
    age : 11,
    c : function (){
        console.log(this.age);//this refer to 
    },
    d : () => {
        console.log(this.age);
    }
}
obj.c();
obj.d();

// all of this is for web not for backend