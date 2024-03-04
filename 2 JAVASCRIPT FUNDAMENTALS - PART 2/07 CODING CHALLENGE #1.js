/*

The team is only reffered as winner if they have atleast double point to opponent 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the  victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkwinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores
GOOD LUCK
*/

const average = (a,b,c) => (a+b+c)/3;

const checkWinner = (avgDolhins,avgKoalas) =>{
     const winner = avgDolhins > avgKoalas ? "Dolhins" : "Koalas";
     if(winner === 'Dolhins' && avgDolhins >= avgKoalas*2){
         console.log(`${winner} wins 🏆 (${avgDolhins} vs ${avgKoalas})`)
     }
     else if(winner === 'Koalas' && avgDolhins*2 <= avgKoalas){
        console.log(`${winner} wins 🏆 (${avgDolhins})`)
     }
     else console.log(`No Team Wins 😭`);
}

checkWinner(average(44,23,71),average(65,54,49));
checkWinner(average(85,54,41),average(23,34,27));
