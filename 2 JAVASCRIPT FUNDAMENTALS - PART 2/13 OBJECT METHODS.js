'use strict'
// we know objects can holds multiple types of data incluiding a new data structure too , it may be an array or an object
// a new thing also introduced here that we can create methods within a object and refer them as object methods

// const fun1 = function () {
//   console.log("fun1");
// };
//  we define methods or function in this way and same can be done within an object

// const obj = {
//   name: "obj",
//   fun2: () => console.log("fun2"),
// };
// we define methods inside an object as same as we did outer and arrows functions are also work here just instead of equal we use colon ':'

// obj.fun2();

// 'this' keyword is refered for current object current object is refered as the object whatever is invoking the function

// as for here obj.fun2() fun2() is invoking using obj so this will refer obj and for prompt() or alert() like functions this will refer Window as they exist within it

// const user1 = {
//   name: "user Name",
//   age: () => {},
//   birthYear: 2003,
//   job: "NA",
//   bloodGroup: undefined,
// };

// console.log(`${user1.age()}`);
const z = "b" + "a" + +"a" + "a";
console.log(z.toLowerCase());

const a = () => 10;
console.log(a());

const pow = (a, b) => a ** b;
console.log(pow(2, 10));

const f = () => {
  return 0;
  console.log("Sorry");
};

let x = "a";
x += 11;
x += "b";
console.log(x);

const y = "11";
// y -= 12;
console.log(y);

console.log(`${10 > 12 ? "kaa be" : "Jaa be"}`);

let av = {
  name: "Unknown",
};
let b = "name";
console.log(a.b);
console.log(a[b]);

if (0 || "") console.log("hi");
else if (" ") console.log("hi2");
else console.log("be");

const jonas = {
  fName: "Jonas",
  isHavingDL: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    console.log(this);
    return this.age;
  },
  birthYear: 1991,
  job: "teacher",
};
// here a mistake is made used arrow function with 'this' keyword so that mine code wont work smoothly now resolved
console.log(
  `${jonas.fName} is a ${jonas.calcAge()} year old ${jonas.job}, and he has ${jonas.isHavingDL ? 'a' : 'no'} driving License`);

  jonas.calcAge();
  console.log(jonas.age);


  // under object method it is better to use full normal funtions to that will hellp use to protect from hard coding the object name just by using this keyword

  