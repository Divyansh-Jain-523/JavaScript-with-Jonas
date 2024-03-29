// Coding Challenge #1
/*
We're building a football betting app (soccer for my American friends
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('playersiFinal') containing all the original teaml players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'teaml', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
7. The team with the lower odd is more likely to win.
print the console about winning team without using if else or ternary
TEST DATA FOR 6: Use players 'Davies', 'Muller','Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scorerd
GOOD LUCK
*/

const game = {
    team1 : 'Bayern Munich',
    team2 : 'Borrussia Dortmund',
    players : [
        [
            'Neuer', 
            'Pavard', 
            'Martinez', 
            'Alaba', 
            'Davies', 
            'Kimmich',
            'Goretzka',
            ' Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],

        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score : '4:0',
    scored : ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date : 'Nov 9th, 2037',
    odds : {
        team1 : 1.33,
        x : 3.25,
        team2 : 6.5,
    },
};


// solution

const [players1,players2] = game.players;
const [gk, ...fieldPlayers] = players1; 
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const {team1 ,x : draw , team2} = game.odds;
 

game.printGoals = function (...players){
    console.log(`${players.length} goals are made..`)
}

console.log()

game.printGoals('Davies', 'Muller','Lewandowski','Kimmich');