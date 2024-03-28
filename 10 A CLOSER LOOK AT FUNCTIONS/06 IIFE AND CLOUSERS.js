// clouser is non other than a js property 

// it prevents the lexical scope of the element if the parent is out of execution context

// ex
let inner;
const outer = function(){
    let a = 10;
    inner = function(){
        return a**2;
    }
}

// as inner is bounded under outer but we can execute outer just invoking outer once

outer();
console.log(inner());
console.log(inner());
console.log(inner());

// we need to invoke outer at least once 
// as outer enters in execution context then scope is defined along with closures assigned;

// Immidately invoking function expression

// can be refered as ananoyumus functions which doesnt stored by name just designed to execute once

(function(){
    console.log('Function IIFE');
})();
// we need to wrap funtion () under these otherwise JS will throw an error and after them use () to invoke function 
// if we forget to execute function will needs to rewrite 
