
//     let js  = 'AmazingJavaScript';
//     console.log(40+41+84);
    
// let javascript = false;
// console.log(javascript);
// if (javascript) {
//     javascript = false;
// }else{
//     javascript = true;


// }
// console.log(typeof javascript);
// console.log(typeof 23)
// console.log(typeof "carlas")
// let year;
// year = 1991
// console.log(typeof year);

// let age = 30;
// age = 56;
// const birthYear = 1992;
// const now = 2023;
// const ageDuka = now - 1981;
// const ageCissa = now - 1987;

// console.log(ageCissa * 2, ageDuka / 10, 2**3);
// // concatanios of string
// const firstName = "Adilson";
// const lastName = "Simiao";
// console.log(firstName +' '+ lastName);
// // Assignment operators
// let x = 10;
// x += 10;
// x *= 5;
// x++;
// x--;
// x--;
// console.log(x);
// // comparison operators
// console.log(ageCissa <= ageDuka);

/* BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/


// let weight = 78, height = 1.69;

// BMI = (weight) / (height * height)
// console.log(BMI.toFixed(1))

// if (BMI <= 18.5){
//     console.log("Underweight")
// }
//     if (BMI > 18.5 && BMI <=24.9) {
//     console.log("Normal weight")
// } 
//     if( BMI >= 24.9 && BMI <=29.9) {
//     console.log("Overseweight")
// }   if (BMI >=30.0){
//     console.log('Obesity')
// }
//  const massMark = 95;
//  const heightMark = 1.88;
//  const massJohn = 58
//  const heightJohn = 1.76
//  const BMIMark = massMark / heightMark ** 2;
//  const BMIJohn = massJohn / (heightJohn * heightMark);
//  const markHeigherBMI = BMIMark > BMIJohn;
//  console.log(BMIMark, BMIJohn, markHeigherBMI);

// const firstName = 'Adilson';
// const job = 'teacher';
// const birthYear = 1981;
// const year = 2023;
// const Jonas = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(Jonas);
// const newName = `I'm ${firstName}, a ${year -  birthYear} years old ${job}!`;
// console.log(newName)
// console.log(`Just a regular person`);

// type conversions
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18 );

// console.log(Number('Jonas'));
// console.log(typeof NaN)

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old' );
// //converting from string for number with operator ( - )
// console.log('23' - '10' - 5);
// //converting all for string and concate with operator( + )
// console.log('23' + '10' + 5);
// //converting all for numbers with operators ( * /
// console.log('23' / '2');


// let n = '1'+ 1;
// n= n - 1;
// console.log(n)

//falsy values (undefined,'', 0, null, NaN) 
//Trufy values ({}, 'Strings',)

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean({}))
// console.log(Boolean(''))
// console.log(Boolean('Jonas'))
// console.log(Boolean(null))
// console.log(Boolean(NaN))

// const money = 1;
// if (money) { 
//     console.log('Do not spend it all');
// }else {
//     console.log(' You should get a job');
// }
// let height;

// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)');
// if (age === "18") console.log('You just became an adult (loose)');

// const favorite = prompt("What is your favorite colour?");
// if (favorite == 'green'){ 
//     alert(`nice Bro your favorite colour is ` + favorite);
// }


// convert from string to number;
// const favoriteNumber = Number(prompt("What is your favorite number?"));
// if (favoriteNumber === 23){
//     console.log('Your favorite number is nice');
//  }else if (favoriteNumber=== 13){
//     console.log('nice number em dude');
//  }else{
// console.log(' Is not a Number')
//  }

// const day ='thursday';
// switch (day) {
//     case 'monday':  
//         console.log('Plan course structure');
//         console.log('For to coding meetup');
//         break;  
//     case 'tuesday': 
//         console.log('Prepare Theory videos');
//         break;
//     case 'wednesday': 
//     case 'thursday': 
//         console.log('write code examples');
//         break;
//     case 'friday': 
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a  valid day');
// }    
// const me ='adilson';
// console.log(` I'm ${2023-1991} years old ${me}`);
//const age = 18
//age >= 19 ? console.log('I like to drink wine') : console.log("You can't drink wine");
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);
// console.log(` I like to drink ${age >= 18 ? 'wine' : 'water'}`);
const bill = 250;

/* Write your code below. Good luck! 🙂 */

let percent =   100;
// const tip = bill >= 50 && 300 ? bill / percent * 15: bill / percent * 20;    

// console.log(` Your tip is ${tip}`);

if (bill >= 50 &&  bill <= 300){
    const tip = bill / percent * 15;
    console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
} else{
     const tip =  bill/percent*20;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
}