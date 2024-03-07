// baaki sab aata hai kuch new cheeze jo pata chali bas unko implement krna seeke 
// jaise a[i] = kuch bhi ki jagh , a.push(kuch bhi use kro);
// iske liye array phele se define krna hoga

const a = [];
for(let i = 1 ; i <= 10 ; i++){
    a.unshift(i);
    // ye bhaiya element to last mai add krte jaate hai 👍
}
console.log(a);
// pop last ka hatate hai aur return krte hia
// push last mai jodte hui aur nayi size return krte hai
// unshift aage jodte hai aur nyi size return krte hai
// shift aage ka udate hai aur usko return krte hai

