// sets apn jante hai use krna dekh lo bs

// set ek iterator leta hai jaise array ya string (ha stirngs bhi iterator hoti hia)

const arr = [1,2,2,3,12,34,6];
const arrSet = new Set(arr);
console.log(arrSet);

// we can pass string too in set and that will return unique characters in string

const nSet = new Set('Divyansh Jain');
console.log(nSet);

// add delete and clear in set

nSet.add('k'); // adds an element
console.log(nSet);
nSet.delete('k'); // deletes an element
console.log(nSet);
nSet.clear(); // clears set
console.log(nSet);