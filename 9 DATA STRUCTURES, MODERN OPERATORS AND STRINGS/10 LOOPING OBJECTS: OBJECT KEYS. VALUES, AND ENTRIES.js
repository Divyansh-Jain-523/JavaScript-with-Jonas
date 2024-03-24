const object = {
    a : {
        a1 : 1,
        a2 : 2,
    },
    b : {
        a1 : 1,
        a2 : 2,
    },
    c : {
        a1 : 1,
        a2 : 2,
    },
    d : {
        a1 : 1,
        a2 : 2,
    },
    e : {
        a1 : 1,
        a2 : 2,
    },
}

// Object.keys() returns an array of keys of an entire object

console.log(Object.keys(object));

// Object.values() returns all values of an object

console.log(Object.values(object));

console.log(Object.entries(object));
// this will return an array having a key and value pair

// iterating an object

const keys = Object.keys(object);
for(let key of keys) console.log(key,object[key]);

const values = Object.values(object);
for(let i = 0 ; i < Object.keys(object).length ; i++) console.log(i,values[i]);

const entries = Object.entries(object);
for(const [key,{a1:a,a2:b}] of Object.entries(object)) console.log(key, b, a);


// here we did destructuring while declaration
