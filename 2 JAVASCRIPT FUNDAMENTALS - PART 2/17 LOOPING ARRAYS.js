'use strict'
// mostly cheeze janta hu but recap ke liye its ok

const arr = [21,2,3,3,55,7,345,457,65873];
for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
}

// continue and break
// continue skips current iteration and break entirely

// for(let i = 0 ; i < arr.length ; i++){
//     if(i%2 == 1){
//         console.log('even', arr[i]);
//     }
//     else{
//         console.log('odd', arr[i]);
//     }
// }

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    'Michael',
    true,
    'Peter',
    'Steven'];
const types = [];

console.log('before');

for(let i = 0 ; i < jonas.length ; i++){
    console.log(jonas[i] , typeof jonas[i]);
}


// now using continue for same
console.log('only strings');
for(let i = 0 ; i < jonas.length ; i++){
    if(typeof jonas[i] != 'string') continue;
    console.log(jonas[i]);
}
