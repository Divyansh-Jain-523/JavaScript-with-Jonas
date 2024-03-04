// Array methods

// Push or arr.push()
// it adds new element at last of an Array

const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);
// it also returns the length of new Array

console.log(arr.push(15),arr);

// unshift : similar to push but adds on index 0

console.log(arr);
console.log(arr.unshift(0), arr);


// arr.pop : removes the last element of an array and returns it too
console.log(arr.pop(), arr);

// for index 0 arr.shift() and rest both are same

console.log(arr.indexOf(12));
//returns index of argument otherwise -1

console.log(arr.includes(12), arr);
// returns boolean if argument exists withinn array then true otherwise false and this method compares striclty 23 != '23' here