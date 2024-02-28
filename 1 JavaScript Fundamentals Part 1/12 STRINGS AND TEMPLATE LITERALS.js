// Suppose we have to create a string like "I'm Jonas a 46 years old teacher!" using some variables such as

const firstName = 'Jonas';
const birthYear = 1991;
const now = 2037;
const job = 'Teacher';

const jonas = "I'm "+firstName+' a '+(now-birthYear)+' years old '+job+"!";
console.log(jonas);

// this kind of code is lil bit complex so a new thing introduced in es6 known as template literal helpful for working with strings

// In template literal (``) we can access varibles directly by using ${var_name} and thats it, for above same check this
const jonasNew = `I'm ${firstName} a ${now - birthYear} years old ${job}!`;
console.log(jonasNew);


// We also create multiline string with this;

console.log(`1
2
3
4`);