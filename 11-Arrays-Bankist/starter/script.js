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

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function(movements){
  containerMovements.innerHTML = '';
  movements.forEach(function(mov, i)  {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html  = `
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
displayMovements(account1.movements)

const calcPrinctBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`
 };
const createUserNames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLocaleLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
    
};
calcPrinctBalance(account1.movements);

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

const calculateTotalDeposit = function (movements) {
  const totalDepositUsd = movements
    .filter(mov => mov > 0) // Filtra os valores positivos (depósitos)
    // .map(mov => Math.abs(mov * account1.interestRate))
    .reduce((acc, mov) => acc + mov, 0);

  const totalWithdrawalUsd = movements
    .filter(mov => mov < 0) // Filtra os valores negativos (saídas)
    // .map(mov => Math.abs(mov * account1.interestRate))
    .reduce((acc, mov) => acc + mov, 0);
    
    const totalout= movements
    .filter(deposit => deposit > 0) // Filtra os valores negativos (saídas)
    .map(mov => Math.abs(mov * account1.interestRate)/ 100)
    .reduce((acc, mov) => acc + mov, 0);

  // const elementIn = document.querySelector(".summary__value--in");
  // const elementOut = document.querySelector(".summary__value--out");
  // const elementInterrestRat = document.querySelector(".summary__value--interest");
  labelSumIn.textContent = `${totalDepositUsd}€`;
  labelSumOut.textContent = `${Math.abs(totalWithdrawalUsd)}€`;
  labelSumInterest.textContent = `${totalout}€`


};

calculateTotalDeposit(account1.movements);
const createUsernames = function(accs){
  accs.forEach(function (acc){
    acc.username = acc.owner.toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};


//Event handler
btnLogin.addEventListener('click', function(e){
  e.preventDefault();
 accounts.find(acc => acc.owner === inputLoginUsername)
 const account = accounts.find(acc => acc.owner === 'Jessica Davis');
})

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



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

