/*
Dekho idhar comparison ke liye do type ke operators hote hia 
        loosely
        strictly


        losely : isme == ka use hota hai aur ye sirf values compare karta hai coehcion ka use bhi karta hai;

        *** suno phele coechion ke baare mai ko bhi smja wo theek tha leki ab smjo coechion mai apne se chote jis bhi data type ke saath kaam hota hai usme switch kr deta hai jaise string num se bada hai aur jb num se deal krte hai to coechion usko num mai hi convert kr deta hai

        ab loosely mai asa hota hai jaise '1' aur 1 ke beech compare krna hai to wo '1' ko bhi 1 bna dega aur fir 1 aur 1 mai compare krege 

        and strictly ye sab skip kr deta hai aur direct '1' aur 1 ko compare krata hai

        baaki sab code aur result dekke smj jaana
*/

const a = String(1);
const b = Number(1);

// ab loosely '==' in dono ko same bta dega

console.log(a == b);

//lekin

console.log(a === b);


// smj nhi aaya to ek aur dekke smjo 

const c = false;
const d = 0;

console.log(c == d);
// ab 0 to falsy return krta hai to false == false true dega

// lekin 0 aur false same datatype nhi hai to false hi dega
console.log(0 === false);



// aur dekna hai

const f = '';
// ab '' khali string to hamesha hi false return krta hai to zero bhi wohi krta hai

console.log(f == d);
console.log(f === d);

// agar ab smj nhi aaya to video dekh fir