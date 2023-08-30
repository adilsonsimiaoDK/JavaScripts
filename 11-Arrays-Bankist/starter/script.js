'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'Duka Simiao',
  movements: [430, 1000, 700, -50, 90, 100, -400, 2000],
  interestRate: 0.45,
  pin: 5,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements.slice().sort((a, b) => b - a);
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type 
    movements__type--${type}">${i + 1} ${type}</div>
    
    <div class="movements__value">${mov}€ </div>
  </div>
  `;

    //document.querySelector('.movements').innerHTML += html;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements)

const calcPrinctBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
//calcPrinctBalance(account1.movements);

// const totalDepositIn = function(movements){
// const  totaldepositUsd = movements.
// filter(mov => mov > 0)
// //.map(mov => mov * euroToUsd)
// .map((mov, i, arr) =>{
//   console.log(account1.interestRate);
//   return mov * account1.interestRate})

// .reduce((acc, mov) => acc + mov, 0);
// const element = document.querySelector(".summary__value--in");
// element.textContent = `${totaldepositUsd}€`;
// }
// const totalDepositOut = function(movements){
//   const  totaldepositUsd = movements.
//   filter(mov => mov < 0)
//   //.map(mov => mov * euroToUsd)
//   .map((mov, i, arr) =>{
//     console.log(account1.interestRate);
//     return mov * account1.interestRate})

//   .reduce((acc, mov) => acc + mov, 0);
//   const element = document.querySelector(".summary__value--out");
//   element.textContent = `${Math.abs(totaldepositUsd)}€`;
//   }

const calculateTotalDeposit = function (acc) {
  const totalDepositUsd = acc.movements
    .filter(mov => mov > 0) // Filtra os valores positivos (depósitos)
    // .map(mov => Math.abs(mov * account1.interestRate))
    .reduce((acc, mov) => acc + mov, 0);

  const totalWithdrawalUsd = acc.movements
    .filter(mov => mov < 0) // Filtra os valores negativos (saídas)
    // .map(mov => Math.abs(mov * account1.interestRate))
    .reduce((acc, mov) => acc + mov, 0);

  const totalout = acc.movements
    .filter(deposit => deposit > 0) // Filtra os valores negativos (saídas)
    .map(mov => Math.abs(mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);

  // const elementIn = document.querySelector(".summary__value--in");
  // const elementOut = document.querySelector(".summary__value--out");
  // const elementInterrestRat = document.querySelector(".summary__value--interest");
  labelSumIn.textContent = `${totalDepositUsd}€`;
  labelSumOut.textContent = `${Math.abs(totalWithdrawalUsd)}€`;
  labelSumInterest.textContent = `${totalout}€`;
};

//calculateTotalDeposit(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
let currentAccount;
let currentAccountTransf;

function displayUI(acc) {
  displayMovements(acc);

  calcPrinctBalance(acc);

  calculateTotalDeposit(acc);
}

//Event handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin == inputLoginPin.value) {
    console.log('Login with Sucessed');

    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();
    displayUI(currentAccount);

    btnTransfer.addEventListener('click', function (e) {
      e.preventDefault();

      const amount = Number(inputTransferAmount.value);
      currentAccountTransf = accounts.find(
        acc => acc.username === inputTransferTo.value
      );

      if (
        currentAccount.balance > amount &&
        amount > 0 &&
        currentAccountTransf?.username !== currentAccount.username
      ) {
        currentAccountTransf.movements.push(amount);
        currentAccount.movements.push(-amount);
        console.log(currentAccountTransf);

        displayUI(currentAccountTransf);
      }
    });
    btnLoan.addEventListener('click', function (e) {
      e.preventDefault();
      const loan = Number(inputLoanAmount.value);

      if (loan > 0 && currentAccount.movements.some(mov => mov > loan * 0.1)) {
        console.log('loan');
        currentAccount.movements.push(loan);
        console.log(currentAccount.movements);
        displayUI(currentAccount);
      }
    });
    let sorted = false;
    btnSort.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('here');
      displayMovements(currentAccount, !sorted);
      sorted = !sorted;
    });

    btnClose.addEventListener('click', function (e) {
      e.preventDefault();

      if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
      ) {
        const index = accounts.findIndex(
          acc => acc.username === currentAccount.username
        );
        const users = accounts.splice(index, 1);
        containerApp.style.opacity = 0;
        inputTransferAmount.value = inputTransferTo.value = '';
        console.log(users, accounts);
      } else {
        console.log('wrong');
      }
    });
  }
});

// totalDepositIn(account1.movements)
// totalDepositOut(account1.movements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const user = 'Steven Thomas Williams';
// createUserNames(accounts)
// console.log(accounts)
//Teacher solutions;

// const username = user.toLocaleLowerCase().split(' ').map(function(name){
//   return name[0]
// }).join('');
// console.log(username);

// My result
// const codice = username.map(function(username){
//  let str = username[0]
//   return (str)
// });
// console.log('here');

// console.log(codice.join(''));

//let abre ='';
// for (const names of username){
//   if(names[0]){

//     abre += names[0]
//   }
// }
// console.log(abre);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300, [4, 2, 5, 6]];
// const sum = movements.reduce((acc, currentValue) => {
//   return acc + currentValue;
// }, 0);

//console.log(movements.flat());

// //Flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // FlatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// Sort
//crescent
// movements.sort((a, b) => a - b).flat();
//console.log(movements);

//Decrent
// const sortedArray = accounts
//   .flatMap(acc => acc.movements)
//   .sort((a, b) => b - a);
//console.log(sortedArray);

// const sortedArray1 = movements.flatMap(acc => acc).sort((a, b) => b - a);

// console.log(sortedArray1);

// const deposits  = movements.filter(function(mov){
//   return  mov > 0;
// })

// console.log(deposits);
// console.log(movements);

// const withdrawal = movements.filter(function(mov){
//   return mov < 0;
//   })
// console.log(withdrawal);
//  const balance = movements.reduce(function(cur, arr){
//   return cur + arr;
//  })

// console.log(balance);
// const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance2);

// let  balance3 = 0;
// for (const mov of movements) balance3 += mov;

// const max  = movements.reduce((acc, cur) =>{
//   return cur > acc ? cur : acc
// }, movements[0])
// console.log(max);
//3 exempls a with map and another with push and arrow function the result is the de same!
//const euroToUsd = 1.1;

// clean code and new form to do function
// const convert = movements.map(function(mov){
//   return mov * euroToUsd;
// })
// console.log(movements);
// console.log(convert);
// // create a new array and loop over it old process

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd)
// console.log(movementsUSDfor);

// // arrow function
// console.log('arrow function');
// const functionName = movements.map(mov => mov * euroToUsd);

// const movementDescription = movements.map((mov, i) =>`Movement ${i + 1}: You
//                             ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//                             );

//console.log(movementDescription);

// for (const [index, movement]  of movements.entries()){
//   if(movement > 0){
//   console.log(`${index + 1} Your deposited $ ${movement}`);
// }else{
//   console.log(`${index + 1} Your  withdrew $ ${movement}`);

//   }
// }
// for (const movement  of movements)
// if(movement < 0)
//   console.log(movement);

//ForEach
//console.log('------ForEach------');
// movements.forEach(function(movement){
//   if(movement > 0){
//     console.log(` You deposited ${movement}`);
// } else{
//     console.log(` You withdrew ${Math.abs(movement)}`);
// }
// });
// movements.forEach(function(mov, i, arr){
//   if(mov > 0){
//     console.log(`Movement ${i + 1} Your  deposited $ ${mov}`);
// } else{
//   console.log(`Movement ${i + 1} Your  withdrew $ ${Math.abs(mov)}`);
// }
// });

/////////////////////////////////////////////////
//Slice
// let arr = ['a','b','c','d','e',]
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(...arr);
// //spread operator
// console.log([...arr]);

// //Splice delete a element or more of  an array first is index, second is quantity
// //console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);

// //reverse
// arr = ['a','b','c','d','e',]
// const arr2 = ['j','i','h','g','f']
// const arr3 = ['jqwerty']
// console.log(arr2.reverse());
// console.log(arr2);

//concat
// const letter = arr.concat(arr2)
// console.log(letter);
// console.log([...arr, ...arr2]);

// //Join
// console.log(letter.join(' - '));
// const numbers = [1,2,3,4,5];
// console.log(numbers.at(2));
// console.log(numbers[2]);
// console.log([numbers.length - 1]);
// console.log([numbers.slice(-1)[0]]);
// //At method
// console.log(numbers.at(-1));
// console.log(numbers.at(-1));
// const name = 'adilson'
// console.log(name.at(0));

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //Map it it possible reptition
// currencies.forEach(function(value, key, map){
// console.log(`${key} ${value}`);

// })

// //Set doesnt have repetition
// const currenciesUnique = new Set(['USD','GBP','USD','EUR','REAL','REAL',]);
// // console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map){
//   console.log(`Currency: ${value}`);
// })

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//  const dogsKate  = [5 ,3, 6, 1, 10];
//  const dogsJulia  = [9, 16, 6, 8, 3];
//  const  checkDogs = function(dogsJulia, dogsKate){
//  const dogJulia = dogsJulia.slice(-4, 2);
//   console.log(dogJulia);
// const dogs = dogJulia.concat(dogsKate)
//   dogs.forEach(function(dogAge, i){
//     if (dogAge > 3){
//       console.log(`Dog age ${i +1} ${dogAge} is old  `);
//     }else{
//       console.log(`This dog ${i + 1} is a puppy ${dogAge} `);
//     }

//   });
// }

//  checkDogs(dogsJulia, dogsKate);

//ForEach
//console.log('------ForEach------');
// movements.forEach(function(movement){
//   if(movement > 0){
//     console.log(` You deposited ${movement}`);
// } else{
//     console.log(` You withdrew ${Math.abs(movement)}`);
// }
// });
// movements.forEach(function(mov, i, arr){
//   if(mov > 0){
//     console.log(`Movement ${i + 1} Your  deposited $ ${mov}`);
// } else{
//   console.log(`Movement ${i + 1} Your  withdrew $ ${Math.abs(mov)}`);
// }
// });
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages
and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old,
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
//chain functio
// const calcAverageHumanAge = function(ages){
//   const humanAges = ages.map(age =>  (age <= 2 ? 2 * age : 16 + age * 4));
// console.log(humanAges);
// const oldDogs = humanAges.filter(humanAges => humanAges > 18)
// console.log(oldDogs);
// const averageDogs = oldDogs.reduce((age, cur)=> age + cur) / oldDogs.length;
// console.log(averageDogs);

// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

// const euroToUsd = 1.1;
// const  totaldepositUsd = movements.
// filter(mov => mov > 0)
// //.map(mov => mov * euroToUsd)
// .map((mov, i, arr) =>{
//   console.log(arr);
//   return mov * euroToUsd})
// .reduce((acc, mov) => acc + mov, 0)
// console.log(totaldepositUsd);

//Arrow Function
// const calcAverageHumanAge = ages =>
// ages.map(age =>  (age <= 2 ? 2 * age : 16 + age * 4))
// .filter(humanAges => humanAges > 18)
// .reduce((age, cur, i, arr) => age + cur / arr.length,0);

// const calcAverageHumanAge1 = (ages) => {
//   const humanAges = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((humanAge) => humanAge > 18)
//     .reduce((age, cur,i, arr) => age + cur / arr.length, 0); // Fixed parentheses

//   return humanAges;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]));
// const firstWithdrawal = movements.find(mov => mov <0);
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// const accou = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account, accou);
// test
// const numbers = [1,2,6,4,9,3, 10]
// const sum = numbers.reduce((acc, cur ) => acc  + cur, 0)
// console.log(sum);

// const names = ['adilson', 'claudia', 'cissa', 'marcos']
// const newNames = names.map(nameUp => nameUp.charAt(0).toUpperCase() + nameUp.slice(1))
// console.log(newNames);

// const pair = numbers.filter(number => number % 2 ===0)
// console.log(pair);

// const people = [
//   { nome: 'João', idade: 16 },
//   { nome: 'Maria', idade: 17 },
//   { nome: 'Pedro', idade: 13 },
//   { nome: 'Ana', idade: 25 }
// ];

// const ageUp = people.find(age => age.idade > 18)
// const ageUp2 = numbers.find(age => age > 6)
// console.log(ageUp);
// console.log(ageUp2);
// /*
// Dado um array de palavras,
// use o método forEach com uma arrow function
// para imprimir cada palavra seguida pelo seu comprimento.
// */

// const wordSize = names.forEach((word) =>{ console.log(word + ' ' + word.length); })
// const x = new Array(9);
// x.fill(1, 2, 8);
// // value 1, start position: 3, end position 8 //output:[x,x,x,1,1,1,1,1,x]
// console.log(x);
// const z = Array.from({ length: 9 }, (cur, i) => i + 1);
// console.log(z);
// const d = Array.from({ length: 9 }, () => 1);
// console.log(d);

// const movementUi = arr.from(document.querySelectorAll('.movements_value'));
// Array Methods Practice
// const sumArray = accounts.movements
//   .filter(value => value > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(sumArray);

// const deposit = accounts
//   .map(acc => acc.movements)
//   .filter(acc => acc > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(deposit);

// const sumArray = accounts
//   .flatMap(account => account.movements)
//   .filter(value => value > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(sumArray);

// const depositMore = accounts
//   .flatMap(acc => acc.movements)
//   .filter(acc => acc > 8000)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(depositMore);

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 1000 ? (sums.deposit += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposit: 0, withdrawals: 0 }
//   );
// console.log(sums);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'and', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const caseTitle = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return caseTitle;
// };
// console.log(convertTitleCase('this title a nice title'));
// console.log(convertTitleCase('this is a Long title but not too long'));

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

const formula = weight => weight ** 0.75 * 28;

dogs.forEach(dog => {
  const recommededFood = Math.trunc(formula(dog.weight));
  dog.recommededFood = recommededFood;
});

// const dogsonWer = dogs.find(dog => dog.owners[0] === 'Sarah');
// console.log(dogsonWer.owners[0], dogsonWer.recommededFood);
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  dogSarah.curFood > dogSarah.recommededFood
    ? `Dog's Sarah eat too much ${dogSarah.curFood}`
    : `Dog's Sarah eat too little ${dogSarah.curFood}`
);

//3.
const ownerEatooMuch = dogs
  .filter(dog => dog.curFood > dog.recommededFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatooMuch);

const ownerEatoolittle = dogs
  .filter(dog => dog.curFood < dog.recommededFood)
  .flatMap(dog => dog.owners);
console.log(ownerEatoolittle);

//4
console.log(`${ownerEatooMuch.join(' and ')}  dogs eat too much!`);
console.log(`${ownerEatoolittle.join(' and ')}  dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommededFood));

//6. current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEat = dog =>
  dog.curFood > dog.recommededFood * 0.9 &&
  dog.curFood < dog.recommededFood * 1.1;

console.log(dogs.some(checkEat));

// 7.
console.log(dogs.filter(checkEat));

//8.
const newdogsSort = dogs.sort((a, b) => a.recommededFood - b.recommededFood);
console.log(newdogsSort);
