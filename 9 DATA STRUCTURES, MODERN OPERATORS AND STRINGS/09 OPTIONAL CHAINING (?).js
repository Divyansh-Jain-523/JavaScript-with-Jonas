// Optional Chaining 
// this is a new feature of mordern JAVASCRIPT
// this is used mainly for returning undefined for properties or value which doesnt exist and later there sub-properties throws error as we are trying to get undefined.prop

// ex:
const obj = {
    a : 'a',
    b : 'b',
    c : 'c',
    sum,
}

// here a b c are exist but we try to get obj.d that will return undefined
// but if we try to get obj.d.e this will throw an error and as we are not sure that property exists or not we use optional chaining

// console.log(obj.d.e); //throws error
console.log(obj?.d?.e);
// ask obj does obj.d exist if yes then procced otherwise return undefined same for obj.d.e and in this case it will be undefined

const objDaysHours = {
    mon : 8.30,
    tue : 10.30,
    thurs : 9.30,
    satur : 9.00,
    // rest days are undeclared
}

const days = ['mon','tue','wednes','thurs','fri','satur','sun'];
// here all 7 exists now if we fetch all using simply way

for(let day of days) console.log(objDaysHours[day]);
// this will work and return undefined in this case but
// if we use nested properties than doesnt work

console.log(`-------------------------------------`);

const objDaysHoursOpenClose = {
    mon : {
       open: 8.30,
       close : 12.00,
    },
    tue : {
       open: 10.30,
       close : 12.00,
    },
    thurs : {
       open: 9.30,
       close : 12.00,
    },
    satur : {
       open: 9.00,
       close : 12.00,
    },
    // rest days are undeclared
}
// for(let day of days) console.log(objDaysHoursOpenClose[day].open);

// this will work for mon and tue then throws error form wednes as wednes is undefined and we are accessing wednes.open which is undefined.open

// for better apporch were we are not sure that property is exists or not we use optional chaining which insead of throwing error directly returns undefined and close the rest operation

// for(let day of days) console.log(objDaysHoursOpenClose?.[day]?.open);

// here we check day exist or not then if yes open or not

// doesnt get any error just get undefined
// now enhance it will nullify opertor

for(let day of days){
   const open = objDaysHoursOpenClose?.[day]?.open ?? 'closed';
   console.log(`On ${day}day is ${open}`);
}


// same will works on methods to avoid errors ex:

function sum(a,b){
   console.log(a+b);
}

obj?.sun?.(2,4);// works only if exists no error thrown
obj?.sum?.(2,5);

// oh sorry that all is for objects


// same this will works on arrays
console.log(days?.[7] ?? "Malik 8wa din nhi hota hai");
// here we have elements till i = 6 an asking for 7 which doesnt exists so using nullish to confirm it