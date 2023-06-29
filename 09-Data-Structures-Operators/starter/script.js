'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// if (restaurant.openingHours && restaurant.openingHours.fri)
//   console.log(restaurant.openingHours.fri.open);

// with optional chaining

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  //ES6 enhanced literals exempls
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    //console.log(obj);
  },
  orderDelivery: function (starterIndex, mainIndex, time, address) {
    //console.log(starterIndex);
  },
  orderPastas: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//WHIT optional chaining
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// //Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //arrays
// const users = [];
// const user = [{ name: 'Adilson', email: 'hallo@mail.com' }];
// console.log(user[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(user[0].name);
// else console.log('user array empty');

//Looping Object with keys property names!
// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day}`;
// }
// console.log(openStr);
// //entries return index value

// //Property
// const values = Object.values(openingHours);
// console.log(values);
// console.log('======================================================');

// //Entire object
// const entrie = Object.entries(openingHours);
// //console.log(entrie);
// for (const [key, { open, close }] of entrie) {
//   console.log(`oN ${key}`);
// }

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log('Destructuring  arrays get an array,  categories ' + categories);
//access restaurant array and pass Restaurantname,
//to name and OpeningHours to hours and create a tags for each category
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

//( Default values )access restaurant array and pass StarterMenu to starters.
// const { menu = [], starterMenu: starters = [] } = restaurant;

//Mutating variables.
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

//Nested objects
//const { fri } = openingHours;
// const {
//   fri: { open, close },
// } = openingHours;

// console.log(typeof openingHours.fri);
// console.log(open, close);

///////////////////////////
//Destructuring arrays.
// const arr = [2, 3, 4, 5];
// const a = [0];
// const b = [2];
// const c = [3];
// const d = [4];

// const [x, y, z, w] = arr;
// console.log(x, y, z, w);
// console.log(arr);

// let [main, , , secondary] = restaurant.categories;
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const neste = [2, , [3, 6]];
// const [i, l, [j, k]] = neste;
// console.log('first number array neste ', i, 'secondary Number array neste', j);

// const [starter, mainCourse] = restaurant.order(j, i);
// console.log(starter, mainCourse);

// const arr = [6, 7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// copy array
// const mainMenucopy = [...restaurant.mainMenu];
// //join 2 array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// // iterables: arrays, strings, maps, set. not objects
// const str = 'adilson';
// console.log(...str, '', 'S.');
// const letter = [...str, '', 'Simiao'];
// console.log(...letter, 'S.');
// const orderPasta =[prompt('Let\s make pasta ingredients 1?', prompt('ingredients 1?')]
// // [...restaurant.orderPastas];
// console.log(...orderPasta);

//Spread, because on Right side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //Rest, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4];
// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(2, 3, 4, 5, 6);
// const x = [22, 5, 6];
// add(...x);
// restaurant.orderPizza('Pineable', 'onion', 'olives', 'cheese');
// spread all of the remaining basically unused parameters
//rest
// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
//OR assiggnment operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//mullish assignment oprator (null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored


Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
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
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const player1 = [game.players];
// const player2 = [game.players[0]];
//const [player1, player2] = [game.players[0], game.players[1]];
// const [player1, player2] = game.players;
// const [gk1, ...fieldPlayer1] = player1;
// const [gk2, ...fieldPlayer2] = player2;
// const allPlayers = [...player1, ...player2];
// const player1final = ['Thiago', 'Coutinho', 'Perisic', ...player1];

// console.log(player1);
// console.log(player2);
// console.log(allPlayers);
// console.log(player1final);

// console.log('========================================================');
// console.log(`Goalkeeper' ${gk1}, FieldPlayer: ${fieldPlayer1}`);
// console.log(`Goalkeeper' ${gk2}, FieldPlayer: ${fieldPlayer2}`);
// console.log('--------------------------------------------------------');
//5. Object em javascript
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// const printGoal = function (...players) {
//   console.log(`${players.length} goals were score`);
// };
// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoal('Davies', 'Muller');
// printGoal(...game.score);
// team1 < team2 && console.log('Team 1 is more likely to win');

// //New for interation or loop
// for (const player of allPlayers) console.log(player);

// //for with interation and index
// for (const player of allPlayers.entries()) console.log(player);
// for (const [player, element] of allPlayers.entries())
//   console.log(`${player + 1}: ${element}`);
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//1.

let media = 0;
const scores = Object.entries(game.scored);
const averages = Object.values(game.odds);

// for (const [key, value] of scores) {
//   console.log(`Goal ${key}:  ${value}`);
// }
//2.
// console.log();
// for (const average of averages) {
//   media += average;
// }
// let average = media / averages.length;
// console.log(`Average is ${average.toFixed(2)}`);

// for (const [team, point] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${point}`);
// }
// //===============SET======================//
// const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Garlic Bread']);
// console.log(ordersSet.size);

// console.log(new Set('Adilson'));
// console.log(ordersSet.has('Risotto'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Rissolis');
// console.log(ordersSet);
// ordersSet.delete('Garlic Bread');
// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);
// const food = new Set([
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Garlic Bread',
//   'Pizza',
//   'Pasta',
// ]);
// console.log(food);
// How to create Map
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze');
// console.log(rest);
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed');
// console.log(rest.get(true));
// console.log(rest.get('name'));
// const time = 23;
// console.log(rest.get(time > rest.get('') && time < rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));
// const question = new Map([
  // ['question', 'What is the best programing language in thre world'],
  // [1, 'C'],
  // [2, 'Java'],
  // [3, 'Javascript'],
  // ['correct', 3],
  // [true, 'correct'],
  // [false, 'Try again'],
// ]);
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// 
// console.log(hoursMap);
// for (const [key, value] of question) {
//  if (typeof key ==='number') console.log(`Answer ${key}: ${value}`);
//  }
// 
// const answer = Number(prompt('Your answer '))
// console.log(answer)
// console.log(question.get('correct') === answer);
//Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
 The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀 :grinning:
*/

// const gameEvents = new Map([
  // [17, '⚽️ GOAL'],
  // [36, '🔁 Substitution'],
  // [47, '⚽️ GOAL'],
  // [61, '🔁 Substitution'],
  // [64, '🔶 Yellow card'],
  // [69, '🔴 Red card'],
  // [70, '🔁 Substitution'],
  // [72, '🔁 Substitution'],
  // [76, '⚽️ GOAL'],
  // [80, '⚽️ GOAL'],
  // [92, '🔶 Yellow card'],
// ]);
// let points = 0;
// const events = [...new Set(gameEvents.values())]
// gameEvents.delete(64)
// 
// console.log(`"An event happened, on average, every ${90 / gameEvents.size} minutes` )
// const time =[...gameEvents.keys()].pop
//  
// 
// 
// 
// for(const [min, event] of gameEvents.entries()){
// const half = min  <=45 ? 'FIRST': 'SECOND';
// console.log(`[ ${half} 'HALF' ${min}: ${event} ]`) 
// }
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(1, -1));
// console.log(new String('adilson'));
// 
// 
// 
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(0, airline.lastIndexOf(' ') + 1));
// 
// const checkMiddleSeat = function(seat){
  // const s  = seat.slice(-1);
  // if ( s === "B" || s ==="E"){
    // console.log(`${seat} Are middle seats`);
  // }else console.log('You got lucky :');
// }
// checkMiddleSeat('11B')
// checkMiddleSeat('23A')
// 
// console.log(typeof new String('adilson'));
// console.log(typeof new String('adilson').slice(1));
// const passenger = ' AdiLsoN'
// const passengerUppercase =passenger.toUpperCase().slice(1);
// const passengerlowercase =passenger.toLowerCase();
// console.log(passengerUppercase);
// 
// const email = "adilsosnimiao@email.com";
// const loginemail = " Adilsosnimiao@email.com ";
// const normalizeEmail = loginemail.toLowerCase().trim();
// console.log(email=== normalizeEmail);
// const announcement = "All passengerscome to boarding door 23. Bording door 23"
// console.log(announcement.replaceAll('door', 'gate'))
// console.log(announcement.includes('door'))
// 
// console.log(announcement.replaceAll(/door/g, 'gate'))
// console.log(announcement.endsWith('23'))
// const firstName = 'adilson'
// const lastName = 'simiao'

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName)
// const capitalizeName = function(name){
//   const names  = name.split(' ');
//   const namesUpper = [];
//   for (const n of names){
//     //namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica aan smith davis');
// //capitalizeName('adilson simiao');

// //padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+'));
// console.log('adilson'.padStart(10, '+'));
// console.log('adilson'.padEnd(10, '+'));

// const maskCreditcard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return(last.padStart(str.length, '*'));
// }
// console.log(maskCreditcard(387373094983209))
// console.log(maskCreditcard(387373094))
// console.log(maskCreditcard("34560945094322"))
// console.log(message.repeat(5))



///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// function getText() {
//   let texto = textArea.value;
//  // console.log(texto); // Exibe o texto no console
//  if(texto === "underscoreCase"){
//   console.log('hi hire✅')
//  } 

// }
// document.onclick = getText;
// const text = textArea.value;
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// const newFlights = flights.split('+');
// const newFlights1 = flights.split(';');
// console.log(newFlights1)
const getCode = str => str.slice(0, 3).toUpperCase();

for (const fly of flights.trim().split('+')){
      const[type, from, to, time] = fly.split(';');
      const output = ` ${type.startsWith('_Delayed')? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replaceAll(':','h')})`.padStart(40);
      console.log(output)
      
}
// for (const fly of newflights.split('+')){
//       //console.log(fly.split(';'))
//  // console.log(newFlights)
// }


