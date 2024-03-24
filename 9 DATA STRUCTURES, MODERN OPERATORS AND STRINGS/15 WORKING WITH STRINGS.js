const str = "Divyansh Jain Sucessfull";

//indices works length same
// index and lastIndex

console.log(str.slice(str.indexOf(" ") + 1, str.lastIndexOf(" ")));

// -n reffers n from last but works with slice method

console.log(str.slice(0, -3));

function checkMiddle(seat) {
  if (seat.slice(-1) === "B") return true;
  return false;
}

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());

const mail = "divyansh200325@gmail.com";
const loginMail = "Divyansh200325@GMAIL.com  ";

console.log(mail === loginMail);
console.log(mail === loginMail.toLowerCase().trim());

// .trim() removes extra whitespaces such as '   ' will remove this
// it will not affect 'a b' as it doesnt having any leading or ending space

console.log("aaaabc".replaceAll("a", "c"));

// .includes used to return boolean
// .startsWith() // .endsWith()

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// function checkBaggage(str){
//     if(str.includes('gun') || str.includes('knife')) console.log("You aren't allowed!!")
//     else console.log('ready to Go!!!!!!')
// }

// here a loophole found
checkBaggage('Got some snacks and a GUn for protection');
// this will allow him to board
// strings are case sensitive so it is best approach to convert them in either lower case or upper one to avoid variation like Gun GUN gUn guN gUN GUn etc

// redefining the function

function checkBaggage(str){
    str = str.toLowerCase();
    if(str.includes('gun') || str.includes('knife')) console.log("You aren't allowed!!")
    else console.log('ready to Go!!!!!!')
}

// problem solved !


// .split returns an array of multilple substring having a pratition on your target


const r = 'Divyansh Jain';
// i want to split on base of 'a' 
const rA = r.split('a');
console.log(rA);
// a will removed and splited the string

// now a join method exits to works opposite as split
const strNew = rA.join('a');
console.log(strNew);

// pad in string 
// this will allow us to convert a string to an exact length an fills with desired character or string

console.log(r.padStart(25,'-'))
console.log(r.padEnd(25,' - +'))

function maskAadhar(aadhar){
    aadhar += '';
    return aadhar.slice(-4).padStart(aadhar.length,"*");
}

console.log(maskAadhar(557582628898));
console.log(maskAadhar('557582628899798'));

// repeat(n) used to repeat str n times

console.log('123456789'.repeat(10));

