// first class functions are simple functions either they are arrow, expression or simple one
// but higher order functions are those which either returns a function itself or needs as an agrument reffered as a callbreak function,

// example :

// function xyz(){
//     code
// }

// it is a simple function

// .addEventListener('event',function);

// function reffered as a callbreak and addEventListener is reffered as higher order function

// and

function x2yz(n) {
  if (n % 2 == 0) {
    return (x) => x ** 3;
  }
  return (x) => x ** 2;
}

console.log(x2yz(3)(4));
// as this funtion returns a function too it is also a higher order function

const greet = (greet) => (name) => console.log(`${greet} ${name}!`);
greet("hi")("div");
// this is a funtcion that returns a function

const expo = (num) => 2 ** num;

const square = (num) => num ** 2;

const cube = (num) => num ** 3;

// above all are first class function and below one is higher order function

const xAction = function (num, func) {
  console.log(func(num));
  console.log(func.name);
};
// this is a higher order function where func is a callbreak

xAction(10, expo);

// again

const strOperation = (str, fn) => fn(str);

const toSingleStr = (str) => {
  console.log(str.replaceAll(" ", ""));
};

strOperation("A B DES C", toSingleStr);
// an other example if high level function

const calc = (a, b, fn) => {
  console.log(fn(a, b));
};

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const pow = (a, b) => a ** b;
const rem = (a, b) => a % b;

calc(4, 3, pow);
