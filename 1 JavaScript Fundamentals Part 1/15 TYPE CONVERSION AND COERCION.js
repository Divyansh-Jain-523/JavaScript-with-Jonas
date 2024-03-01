/*
    type conversion in javascript 

        dekho bhai type coversion matalb ek datatype se durse mai convert karna
        lekin js mai to type hi define nhi karne hote hai fir ye kya kaam?  
            are bhai inki jaruart hoti hai aur jo tumne primitive wale pade hai wohi types hai i mean datatypes jaise number , string , boolean wagera
            ab iski jaruart kyon hai? js mai tumne input liya field ne string return kiya wo lekin hme to number se deal krna hai islye us string ko number mai badal dege
            ex:
                const a = '1000';
                const b = a+10; // '1000' + 10 = 100010
                const c = Number(a)+10; //1000+10 = 1010
                
        Q Sir agar string number mai change nhi ho sakta then?  
            agar wo number mai nhi ata to uska NaN bol dege Matlb Not a Number

*/

const a = '1000';
const b = a + 10;
console.log(b);
const c = Number(a) + 10;
console.log(c);

const d = "1000rupya";
const e = Number(d);
console.log(e);

console.log(typeof e);

/*
    ab baat ati hai type coercion
    coercion ek property hai jo ulta kaam krti hai concation wali property ke
    nhi smaje :
        agar apan '1000' mai 10 add krte hai to js 10 ko '10' bna deta hai 
        -> ha sir
        similarly coercion naam ki ek bala hai jo baaki math operators ke saath kaam krta hai sirf '+' ko chodeke kyoki wo tum smjte ho

        ex: 
            const a = 10;
            const b = a + '1'; // 101
            but

            const c = b-'1'; 
            or
            const c = b - 1;
            will return 10
            -> sir asa kyon?
                londe dekh 1+'1' hua 11;
                ab '11' - 1 minus ho ra to coesion trigger ho ra aur string number mai badla ja ra so 
                it means 11 - 1 that is 10;
                aur ye property -, /, *, % ke saath bhi kaam krta hia
            

*/

const a1 = '1';
const b1 = a1+1;
console.log(b1);
const c1 = b1-1;
console.log(c1, typeof c1);
console.log(typeof c1);
const d1 = c1*1000;
console.log(d1,typeof d1);


// both coercion and concatination will work only with strings or their literals