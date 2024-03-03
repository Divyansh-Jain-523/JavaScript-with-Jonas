// here we are going to implement our all previous function logics

const defAge = birthYear => 2024 - birthYear;
const isRetired = yearForRetirement => yearForRetirement > 0 ? true : false;

const retireInfo = (birthYear, name) => {
    const age = defAge(birthYear);
    const yearForRetirement = 65 - age;
    if(!isRetired(yearForRetirement)){
        console.log('Happy Retirement sir 🎉');
    }
    else console.log(`${name} You will retire soon 😐`);
}


retireInfo(1919,'coc');
retireInfo(2000,'alez');