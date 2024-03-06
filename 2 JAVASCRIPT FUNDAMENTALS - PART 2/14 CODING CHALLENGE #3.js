/* 
1 for each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark
Miller's (23.9) !"
TEST DATA: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
GOOD LUCK
*/

const john = {
    fullName : 'John Smith',
    height : 1.95,
    mass : 92,
    calcBMI : function (){
        this.BMI = this.mass/(this.height ** 2);
    }
}

const mark = {
    fullName : 'Mark Miller',
    height : 1.69,
    mass : 78,
    calcBMI : function (){
        this.BMI = this.mass/(this.height ** 2);
        return this.BMI;
    }
}
john.calcBMI();
mark.calcBMI();
console.log(`${john.fullName+"'s"} BMI (${john.BMI}) is ${john.BMI > mark.BMI ? "higher" : 'lower'} than ${mark.fullName+"'s"} BMI (${mark.BMI})`);