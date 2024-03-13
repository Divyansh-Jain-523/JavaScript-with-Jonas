'use strict'


// ex 1
let a = 100;
let b = 'jonas';

const c = () => {
    let d = 'number';
    if(d){
        let a = 10;
        var b = 'Divyansh';
    
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}

c();

console.log(a);
console.log(b);

// var uses function scope means under block it will work till its parent function such as ;
let z =function () {
    {
        var x = 0;
        let y = 0;
    }
    // you can access x here but not y because let and const are block scoped

    console.log(x,y);//y is not declared
}
z();
