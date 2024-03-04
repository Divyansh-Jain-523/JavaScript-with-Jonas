// INTRODUCTION TO OBJECTS

// Objects are same as Arrays and can hold multiple types of data but we use indices in an Array and here we use property name or keywords here 
// Ex : arr[0] = '12'
// but here arr['twelve'] = '12'

// declaration of an Object using Literals '{}'

const obj = {
    name: 'Divyansh',
    age : 21,
    caste : 'Jain'
};

console.log(obj['name']);
// given property must be accessed in format of an string using [] or can be
console.log(obj.caste);

const obj2 = new Object(
    {
        name: 'Divyansh',
        age : 21,
        caste : 'Jain'
    }
);
// Second Object type Declaration of an Object
console.log(obj2.name, obj2.caste);