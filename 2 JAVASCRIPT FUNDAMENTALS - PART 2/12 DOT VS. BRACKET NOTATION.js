// we can get data from objects using 2 ways either use '.' before property name or use '[]' inside which pass property name in string format 

const Divyansh = {
    name: 'Divyansh',
    age: 21,
    gender: 'M',
    skills: ['HTML', 'CSS', 'JS', 'JAVA']
};

Divyansh.name;
Divyansh['name'];
Divyansh['skills'];
Divyansh['skills'][1];
Divyansh.skills[0];

// we can access objects and its data in these formats

// Differnce between '.' and '[]'
// we use dot only and only if we are sure to access property the property cannot change and cannot be used instead of a variable
// ex : const m = 'ok'
//  Divyansh.m = undefined // m reffered for ok but it will cosidered as m 

// using [] having multiple benfits as we pass property in string format and we can alter the string 😄 and can change the request.

const t = 'name';
console.log(Divyansh.t); // returns undefined

console.log(Divyansh[t]); // returns name as passing name in form of t, t -> 'name'

// and using '[]' we can dynamically make request by getting input from user

const inp = prompt('Request');
console.log(Divyansh[inp]);

// and

if (Divyansh[inp]) console.log('ha Hai 😘');
//returns true if exists as anything excluding falsy are true
else console.log('Nhi hai bhai 😢')


console.log(`${Divyansh.name} has ${Divyansh.skills.length} skills, and his best skill is ${Divyansh.skills[1]}`);

