'use strict'

// Arrow Functions

// these are simplified form of funcion expression and are of multiple types 

// first type;

let square1 = function (n){
    return n**2;
}

// for above single line functions we can do this
// here no need to specify return also

let square2 = n => n**2;

console.log(square2(12));

// make a bit complex when dealing with multiline or multiparameter ones's
// return need to use whenever reqrired in multiline

const cube1 = n => {
    console.log('cube');
    return n**3;
}

// make a bit complex when dealing with multiline or multiparameter ones's
// need to () and justify para's under it 

const fTemp1 = (one, two) => one**two;
const fTemp2 = (one, two) => {
    console.log(one);
    console.log(two);
}

console.log(cube1(2));
console.log(fTemp1(21,3));
fTemp2(12,34);


// here is a disadvantage too
// you cannot work using 'this' in these type of functions 