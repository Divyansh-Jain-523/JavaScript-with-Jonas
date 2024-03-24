// it is quite similar to destructing object we need to use {} instead of [] as that is object literal

// here indices wont work so we need to manually ask for properties destructuring

// such as 

// const obj = {
//     name : 'champa',
//     age : 99
// };

// if we want to destruture then 

// const {name, age} = obj;
// property name and var name must be same otherwise we cant access them

// const {name:naam, age:umar } = obj;
// we can rename them  but needs key to destructure them

// destructuring nested ones

// const obj2 = {
//     obj3 : {
//         name2 : 'pta nhi 1',
//         umar : 21
//     }, 
//     age : 22,
//     khandan : 'pta nhi 2'
// };

// const {obj3: {name2, umar},age, khandan} = obj2;
// console.log(name2 , umar, age,khandan);

// for nested objects use : to do destructutring with exact property name

// const r = {
//     s : {
//         t : {
//             u : {
//                 v : 122,
//                 w : 23
//             }
//         }
//     }
// };

// const {s :{ t:{u : {v,w}}}} = r;
// console.log(v,w);

// const a = {
//     b : 12,
//     c : {
//         d : 13,
//         e : 14,
//         f : {
//             g : 15, 
//             h : 16,
//             i : {
//                 j : {
//                     k : 17
//                 }
//             }
//         }
//     }
// };

// let a1 = 112, a2 = 113, a3, a4,a5,a6;
// console.log(a1,a2,a3,a4,a5,a6); 
// ({b:a1,c : {d :a2, e : a3, f :{g : a4, h : a5 ,i : {j : {k:a6}}}}} = a);
// console.log(a1,a2,a3,a4,a5,a6);

// if we are not declaring variables at same moment of destructuring the needs to use () for entire line as block expected



// const xyz = {
//     x1 : 11,
//     x2 : 12,
//     x3 : {

//         y1 : 13,
//         y2 : 14,
//         y3 : {
//             z1 : 15,
//             z2 : 16,
//             z3 : {
//                 z11 : 17,
//                 z12 : {
//                     z111 : 18,
//                     z112 : 19
//                 },
//                 z13 : 20
//             },
//             z4 : 21,
//             z5 : 22,
//         },
//         y4 : 23,
//     },
//     x4 : 24,
//     x5 : 25
// };

// console.log(xyz);

// const {x1 : a , x2 : b ,x3 : { y1 : c , y2 : d , y3 : {z1 : e , z2 : f,  z3 : {z11 : g, z12 : {z111 : h , z112 : i}, z13 : j}, z4 : k, z5 : l}, y4 : m}, x4 : n , x5 : o} = xyz;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);
// console.log(m);
// console.log(n);
// console.log(o);


const objNew = {
    x1 : 11,
    x2 : {
        y1 : 12,
        y2 : {
            z1 : 13,
            z2 : 14
        },
        y3 : 15
    },
    x3 : 16
}

const objNew1 = {
    x1 : 111,
    x2 : {
        y1 : 121,
        y2 : {
            z1 : 131,
            z2 : 141
        },
        y3 : 151
    },
    x3 : 161
}

const fun = ({x1 : a, x2 : {y1 : b , y2 : {z1 : c , z2 : d}, y3 : e}, x3 : f}) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

fun(objNew1);