// as we know passing anything via object directly passed the orignal object that is capable of changing any property of an object

const obj = {};
// we have an object 

function xyz(ref){
    ref.x = 0;
}

console.log(obj);
xyz(obj);

console.log(obj);
// see our object has been modified so avoid passing object itself use primitive values

// as we know passing an object or cloning any object will directly and object doesnt store in execution context it stored on heap memory so address is shared and everything on that address can be altered

// again see

const xyzObj = obj;
obj.x = 1;
console.log(xyzObj);
// we changed on xyz but changed on both as we passed obj
