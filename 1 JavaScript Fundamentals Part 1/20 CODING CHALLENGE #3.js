/*
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the
console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 116
TEST DATA BONUS 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 116
TEST DATA BONUS 2: Tolphins score 97, 112 and 102.Koalas score 109, 95 and 106

GOOD LUCK
*/


/*const avgDolphins = (96 + 108 + 89)/3;
const avgKoala = (88 + 91 + 116)/3;*/

const avgDolphins = (97 + 112 + 102)/3;
const avgKoala = (109 + 95 + 106)/3;

console.log(avgDolphins,avgKoala);
if(avgDolphins > avgKoala && avgDolphins >= 100){
    console.log(`Dolphins wale log jeet gye hai, unka total hai ${avgDolphins*3}`);
}
else if(avgDolphins < avgKoala && avgKoala >= 100){
    console.log(`Koala wale log jeet gye hai, unka total hai ${avgKoala*3}`);
}
else if(avgDolphins === avgKoala && avgKoala >= 100 && avgDolphins >= 100 ){
    console.log(`Dekho match kaafi romanchak tha, aur dono hi team ne barabar score krke match draw kr diya`);
}