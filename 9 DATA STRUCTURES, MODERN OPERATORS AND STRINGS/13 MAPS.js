// MAP is same just here we use .set instead of put
// .get is same
// .clear to clean everthing

// Map VS Object

// keys in object can only be string and no restriction in Map

let sum = 0;
const map = new Map();
for(let i = 1 ; i <= 105; i++){
    sum += i;
    console.log(map.set(i,sum));
};
console.log(map);


// has is used to check 
map.has(key) // returns boolean;
map.delete(key);
map.clear();
map.set();
map.size();