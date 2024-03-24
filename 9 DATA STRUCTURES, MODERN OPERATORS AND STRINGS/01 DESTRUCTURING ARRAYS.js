// bro kaafie easy hai kuch nhi bs [] iske and jo jo values ke liye bar chiaye wo define kr do and = mai array rakh do

// ex: 

// const x = [12,2,3];
// const [a,b,c] = x;
// console.log(a,b,c);
// // ye sab alag alag ho gye and we can skip any element if we dont want by , if we want to form above i need only 2 then

// const [,y,] = x;
// console.log(y); 
// // can do with nested arrays too

// const x2 = [12,[2324,34,46,6],6];
// // if we want all them as three one for 12 one for array and last for 6 
// const [q1,q2,q3] = x2;
// // q2 holds a complete array and we can destructure it later and we wnat to do all ast once them

// const [w1,[w2,w3,w4,w5],w6] = x2;
// // here form w1 to w6 each will holds there respective values

// // swapping using destructuring

// let a1 = 3, b1 = 5;
// // we want a1 = 5, b1= 3;
// [a1,b1] = [b1,a1];
// // no other variable requried this will directly swap and can do at same with multiples;

// // assigning defalut values while destructing 
// const [d1,d2=1,d3] = [2,undefined,11];
// console.log(d1,d2,d3);
// // whenever a value is not found that is undefined and default will override that


// // for skipping just do 
// const [c1,,c3] = [1,2,3];
// // c1 = 1, c3 = 3; ,,will skip and ,,, will skip twice and so on
// console.log(c1,c3);

const z = [1,2,3,4,5,6,7,[8,9,10],11,12,13,[14,15],16];

const [a,b,c,d,e,f,g,[h,i,j],k,l,m,[n,o],p] = z;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
console.log(o);  
console.log(p);

// default values can be asigned also