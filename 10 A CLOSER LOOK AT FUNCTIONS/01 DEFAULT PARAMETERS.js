// default parameters 
// assign default values in parameters so that is agrument is absent it will used

// ex
/*
const expo = (n,m = 2) => n**m;
console.log(expo(2,3));
console.log(expo(3,6));
console.log(expo(2,9));
console.log(expo(2));
*/
// m == 2 as set as default

const siCalc = (p,r = 10,t = 2) => (p*r*t)/100;

console.log(siCalc(100,5,3));
// here we cannot skip middle argumnets so it is better replace them with undefined
// console.log(siCalc(100,,3)); // r missing 
console.log(siCalc(100,undefined,3));


