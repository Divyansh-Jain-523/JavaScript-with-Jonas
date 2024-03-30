let arr;
// SLICE 
// does not mutate orignal array
arr = ['a',1,4,457,89436];
console.log(arr.slice(-1));
// returns last element

console.log(arr.slice(1,7));
// returns arr from 1 to 6 indice

// SPLICE
// it is exactly the same as slice but mutates the orignal array

// JOIN
// converts array to string by joining elements with string whatever you passed as an argument

console.log(arr.join('@'));

// CONCAT
// used to add two arrays

// REVERSE
// returns reverse of orginal array and converts orignal to same also

console.log(arr.reverse());
console.log(arr);