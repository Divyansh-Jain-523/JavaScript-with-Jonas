// spread operator : used for getting each and every element in an array without using loops
'use strict'

// let arr = [12,23,34,45,56,7,8,9];

// // before es6 we use
// for(let i = 0 ; i < arr.length ; i++)
//     console.log(arr[i]);

// // now after es6

// console.log(...arr);
// // you will get each and every element there


// // this spread operator can only used for two deeds either we have to access elements and passing as an array or either we want to copy data to other DS

// let newArr = [12,23,2];
// let arrUnstruct = (arr) => {
//     for(let i = 0 ; i < arr.length ; i++){
//         console.log(arr[i]);
//     }
// }

// arrUnstruct(newArr);
// // newArr given as an array and access them as an array
// // but ...arr it will give muliple arugements 
// arrUnstruct = (i1,i2,i3) => {
//     console.log(`${i1}, ${i2}, ${i3} `);
// }

// // either we have to pass 3 elements or we have to pass array having 3 elements in distrubuted from 

// // if arr is passed directly = [] considered as an array
// // other wise in this ... arr = numbers,....

// arrUnstruct(...newArr);
// // here we are instructing arrUnstruct(i1,i2,i3); and i1,i2,i3 => ...newArr
// // 2nd case
// const newArr2 = [0,...newArr, 'end'];
// // this will clone each and every element form itself to other and in same order


// we can use ... opertor to make a deep copy of an Object too as we did in array to create new arrays
// before we learned how to make shallow copy of an object using
// Object.assign(object)
// if we did objN = obj ;
// this will refer to same memory loaction in both if we change one it will change in both as same memory location
// if we use object.assign() this will clone level 1 elements and shares memory for nested objects

// const nObj1 = {
//     'level 1' : 21,
//     'level 2' : [2,1,2],
// }

// const nObj2 = Object.assign({},nObj1);
// // console.log(nObj2,nObj2['level 2']);
//  nObj1['level 2'][2] = 21;
//  nObj1.age = 111;
//  console.log(nObj1);
//  console.log(nObj2);
 

// if we did any operration in level 2 it will refelct into both
// nObj1['level 2'].pop();
// console.log(nObj1['level 2'],nObj2['level 2'])

// coz level two and rest upcoming levels are only sharing memory address in assing()
// which clones tier 1 properties only 

// but using ... wed can clone exact object
// now do same with ... 

// const nObj1 = {
//     'level 1' : 21,
//     'level 2' : [2,1,2],
// }

// const nObj3 = {...nObj1};
// console.log(nObj1,nObj3); 
// clones everything

// now 
// nObj1['level 3'] = 'as';
// console.log(nObj1);
// console.log(nObj3);

// as both Object.assign and ... works same then what is the differnce 
// Object.assign is a bit slower than ... and needs an addition argument of an empty DS otherwise that will perform and modify the same whatever is first agrument

// const z = Object.assign({}, q,r);
// q and r both meregeed together and cloned to z if we didnt passed {} as first argument than q and z are logiallcy same

// Spread unpacks an Array or an Object
// const arr0 = [1,2,3,4,5,6];
// const arr1 = [0, ...arr0, 7, 8];
// console.log(arr0,arr1);

// const obj0 = {
//     a : 12,
//     b : 13,
// };

// const obj1 = {
//     a : 12, 
//     b : 13,
//     c : 14,
// };
// Or
// const obj1 = {...obj0 , c : 14};
// console.log(obj0,obj1);

// Spread Operators in functions

// as spread unpacks the array or object we can use that in functions too

const testF = function (a, b, c){
    console.log(c,b,a);
}

// here we need to pass 3 arguments and we owe them in the form of an array then we needs to upack the array

const argu = ['a','b','c'];
testF(argu);
// this wouldnt work correctly it needs three and considers as only one in form of an array
testF(...argu);
// ...arug will unpack all and passed as arguments
