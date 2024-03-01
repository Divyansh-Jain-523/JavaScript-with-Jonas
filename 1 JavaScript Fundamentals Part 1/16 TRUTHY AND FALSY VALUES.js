/*
aao kuch naya batata hu

    truthy and falsy values : ye wo maapdand hai jinke aadhar pe ham sataya aur jhoot ko phechan skate hai
    Just Kidding dude!

        truthy values ka simple meaning hai other that boolean which return true and ye wohi hai jo false return nhi karte haii
            ab false kon return nhi krata? 
            JS ma paach 5 cheeze hai jo fasle return karte hai
            0 , '' (empty string), undefined, null and NaN
            ye sabhi jhoot hi bolte hai
            
            -> sir ye sun liya ab inka matlv kya hai
            dekho jb apan conditions ya kisi type ke boolean se khelte hai to ye jo falsy hai ye false jaise act karte hai aur truthy ture jasie JS mai falsy ke alawa sab true return krte hai

            const a = true && 0;
            returns false as true && false = false;

            const b = true && '';
            returns false as true && false = false;

            const c = !'';
            '' refers false and ! will change it to true;



*/


const a = !'';
console.log(a);

console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log('ye sab false return krte hai');