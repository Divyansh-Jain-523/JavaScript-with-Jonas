/*
Operators in JavaScript

    Operational
    Assignment
    Incremental and Decremental
    Comparision
    Logical
    typeof


    Operational Operators : 
                            +
                            -
                            *
                            **
                            /
                            %

    Assignment Operators : 
                            =
                            +=
                            -=
                            *=
                            /=
                            %=

    Comparision Operators :
                            <
                            >
                            <=
                            >=
                            ==
                            !=
                            ===

    Logical Operators :
                        ||
                        &&
                        !

    typeof : typeof(var)
             typeof var
*/

// Operational Operators 
const a = 10;
const b = 20;

console.log('Sum', a+b);
console.log('differnece', a-b);
console.log('product', a*b);
console.log('quiotient', a/b);
console.log('remainder', a%b);
console.log('expotential',a**b);

// Assignment Operators
let c;
c = 10;
c += 5; // 10+5 = 15
c -= 5 //15-5 = 10
c *= 5 //10*5 = 50
c /= 5 //50/5 = 10
c %= 2; // c%2 = 1

// Incremental and Decremental
// operation = get & put
c++; // c = 1 & c + 1
++c; // c = 2+1 & c = 3
c--; // c = 3 & c - 1 
--c; // c = 2-1 & c = 1

//Conditinals
const a1 = 12;
const a2 = 10;

a2 < a1 ; //true
a1 < a2 ; //false
a1 == a2; // false

