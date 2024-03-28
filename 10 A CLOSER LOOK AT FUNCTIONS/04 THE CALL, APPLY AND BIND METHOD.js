// these all three are just to define this over a function explictly

// didnt get
/*
as we invoke a method using an object and this will refer that object throw which it is been invoked so to change this explictly we use call, apply and bind and these all works for all types of methods
*/

const div = {
  name: "Divyansh Jain",
  roll: 16,
  age: 21,
  catoegry: "Genral",
};
const other = {
  name: "unspecified",
  roll: 19,
  age: 25,
  catoegry: "not mentioned",
};

function info() {
  console.log(
    `${this.name} is of ${this.age} and having roll ${this.roll} with cateogry ${this.catoegry}`
  );
}

// we need to execute info for both either we have to store function in both like this
const third = {
  name: "chamar",
  roll: 23,
  age: 22,
  catoegry: "third",
  info,
};

// this info will works better only with third
third.info();

// with other 2 it wont works a it wasnt inside of object and this will target window
// div.info(); //error
// other.info(); //error

// so here we use call()

info.call(div); //it needs first argument as object that needs to point by this
info.call(other);
info.call(third);

// here we can pass arguments after passing object
function sumIn(a, b) {
  console.log(`${this.name} is answering`);
  console.log(`sum of ${a} and ${b} is : ${a + b}`);
}

sumIn.call(third, 2, 6);

// now call VS apply
// both call and apply works same and a major diff. is only that after passing object instead of passing list in call uses to pass an array of arguments

sumIn.apply(div, [5, 635]);
// this is old way but we can use same with mordern JS
sumIn.call(div, ...[25346, 125243]);
// like this using spread operator

// now the bind method

// it returns a function that implements customized this in the function along with is we want to set / bind parameters we also can do that

// we are going to bind this in sumIn and this will refer to div

const sumInDiv = sumIn.bind(div);
// now in new method no need to assign this again and again now it is directly binded with div and can accept arugements directly and works in div object

sumInDiv(2442,346);

// we can also set defaults is same like this and can be resued again, like

const sumInDivD = sumInDiv.bind(other,20000);
// we need to always define this either that will point to null but needs to passed in order to use bind()
// set first argument now the method become a new one which accepts one argument only, see
sumInDivD(23463);
// const sumInDivD = sumInDiv.bind(other,20000);
// as we defined this in its parent it will never change for childs as it was binded