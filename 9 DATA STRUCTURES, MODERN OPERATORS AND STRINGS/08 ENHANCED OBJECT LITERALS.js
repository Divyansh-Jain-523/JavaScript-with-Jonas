// here we are going to learn 3 enhancements in objects

const prop3 = 'value3';
const object = {
    prop1 : 'value1',
    prop2 : 'value2',
    // prop3 is declared outside but we can use that here using two way
    // prop3 : prop3, // this will works but we can simplfy that too
    prop3,
// 
    prop4 : 'value4',
    // we can declare function without making a function statement ;
    prop5(args){
        
        console.log(args ??= 0);
    },

    // we can dynamically assign key here to by simply using [varname] this will return key whatever var needs to point and we can manupulate using string prop and `` literal

    [`${12+200-310+'Champa'}`] : 'valueUnknown',
};
console.log(object);
object.prop5(12);



