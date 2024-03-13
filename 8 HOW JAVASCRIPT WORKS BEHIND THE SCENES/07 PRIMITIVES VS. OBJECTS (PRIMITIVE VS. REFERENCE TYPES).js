// now we are going to learn about Primitive vs Reference objects

// here if we do any action bw primitves that will store in call stack and automatically copies the element 

let c = 12;
let d = 11;
c = 13;
// here c and d are independent and having no change if we change values of them

// but 
const l = {
    age : 12
};
const m = l;
// as objects are bigger in size so they will stored in heap pool 
// but memory location of that same is share with call stack and that same will shared with m by l;
// ex m targets data at 00x point
// and we tries to clone it as we did above than l recives data that points same address

// now if we change l.age it will automatically change m.age as both points the same

l.age = 1;
console.log(l,m);// age : 1, age : 1
// as both points the same

// in case of objects no copy is created and objects here are everything excluding Primitive datatypes that are : String, Number, BigInt, Boolean, null, undefined and Symbol

// and a important thing is we assign const to any object then properties of same can be overrriden but new cannot be created

const obj = {
    age: 12
};
// we can add or remove properties but cannot do something like this
obj = {
    xyz : 'xyz'
};
// this will throw error of modifying constant 

// perfoming a shallow copy 

const x = Object.assign({},obj);
// this will create a shallow copy (only of level 1) properties nested arent make copy they just given refernce