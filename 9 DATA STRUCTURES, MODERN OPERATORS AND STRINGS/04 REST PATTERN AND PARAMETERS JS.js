// rest pattern is exactly opposite to spread pattern

// it will pack elements (multiple) in an array or can be considered as VarArgs of java


// example we need to make ma function takes any number of argument then we use rest pattern

function sum (...args){
    let sum = 0;
    for(let i in args) sum += args[i];
    return sum;
}

console.log(sum(12,2,23,3,4,7));
console.log(sum(12,223,23,3,4,7));
console.log(sum(12,22312,23,3,4,7));
console.log(sum(12,224,2463,3,4,7));

// here all arguments are converted into an array and functions accpets array indrectly as arguments

// rest pattern has also use in destructuring arrays and objects
// whatever we need to destructure do it if we want to carry forward rest data we can do same

// const arr = [12,2,34,6,557,79,80,65,6];
// i want to store 1st and 4th element and after that in other array then
// const [a,,,b,...arrRest] = arr;
// console.log(a,b,arrRest);
// as 2nd and 3rd ele are skipped

// rest ... will always a last variable nobody after that is acceptable

// same for objects
const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 5,
    e : 4,
    f : 0
};

const {a,b,c,...objRest} = obj;
console.log(a,b,c,objRest);