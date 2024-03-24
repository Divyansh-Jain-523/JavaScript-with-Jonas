// it is quite simple functionality

// here we are going to learn something that is really helpful for projects
// we know about 'and' 'or' in booleans but they are not limited upto there only

// && allows us to exectue first falsy value
// || allows for truthy
// and ?? allows for truthy but considers falsy as only null and undefined

// all these will definately execute last one if there is no suitable found

let x ;
x = 12 && true && 0;
console.log(x);
x = 12 || true || 0;
console.log(x);
x = 0 ?? 12 ?? true ?? 0;
console.log(x);

// and its simplified is logial once 

x ??= 0;
console.log(x);
// if x doesnt intalized
x ||= 19;
console.log(x);
// if x is truthy
x &&= false ;
console.log(x);
// if x is falsy