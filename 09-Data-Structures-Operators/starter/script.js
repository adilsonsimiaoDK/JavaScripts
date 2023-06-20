'use strict';

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

  openingHours: {
    thu: {
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
  },
  order: function (starterIndex, mainIndex) {
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
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assiggnment operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//mullish assignment oprator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
