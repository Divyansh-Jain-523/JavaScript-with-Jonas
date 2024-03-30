// arr.at() is exactly same as arr[]

// we can use both for same purpose

// foreach is lil bit differernt

let arr = [1, 2, 35, 457, 42, 79, 543625, 24378, 66, 5238, 652];
// we can use normal for loop , for of loop and foreach too
// for each needs a callback function in which current element , current index and current array is passed as argument

// remember order ele, index and array itself

arr.forEach(function (ele, index, arr) {
  console.log(ele, index, arr);
});

const ok = {
  a: "a",
  b: "b",
};

const map = new Set([
  [1],["b"],
]);

map.forEach(function (a, b, c) {
  console.log(a, b, c);
});
