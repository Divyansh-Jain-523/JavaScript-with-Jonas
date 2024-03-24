// it is enhanced version of for loop in which we dont have to define any counter or increment or decrement same


const arr = [12,34,4,685,null,42,5,47,,69,6,76,5,3,,9769,868,5235];
for (let i of arr) console.log(i);

// one more thing here we learned about arr.entries

console.log(arr.entries());//this will return iterator object but using this we can achieve same

for (let i of arr.entries()) console.log(i);
// we can say it as hashmap working with indices as key and value as we given

