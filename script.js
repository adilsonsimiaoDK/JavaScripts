'use strict';
/*
let  hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('I can drive D:');

// function declaration

function  juicer(oranges, apples ) {
     const juice = (` Juice of oranges ${oranges} and apples ${apples}`)
     console.log(` quantity: oranges ${oranges} and apples: ${apples}`)
    return juice;
}

console.log(juicer(5,3));

// function expression
const calcAge1 = function(birthDate) {
    return 2023 - birthDate;
}
 
// const age = calcAge1(1981);
// console.log(age);

// Arrow function
 const calcAge2 =  birthDate => 2023 - birthDate;
 const age2 = calcAge2(1981);
 console.log(age2);

 const yearsUntilRetirement = birthDate =>{
    const age = 2023 - birthDate;
    const retirement = 65 - age;
    return retirement;
 }

 console.log(yearsUntilRetirement(1981));


 const yearsUntilRetirement2 = (birthDate, fistName) =>{
    const age = 2023 - birthDate;
    const retirement = 65 - age;
    return ` ${fistName} retires in ${retirement} years`;
 }

 console.log(yearsUntilRetirement2(1981, 'Adilson'));
 console.log(yearsUntilRetirement2(1987, 'Cissa'));
 */

//  const cutPieces = function (fruit) {
//     return fruit * 4;
//  }

//  const fruitProcessors = function(apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangesPieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and 
//     ${orangesPieces} pieces of orange.`;
//     return  juice;

//  };

//  console.log(fruitProcessors(2.5, 2));
// function calcaAverage(score1, score2, score3){
//    const averageScore = (score1+score2+score3) / 3;
//     return averageScore;
// // }
// const calcaAverage = (score1, score2, score3) => (score1+score2+score3) /3;
// console.log(calcaAverage(3,4,5))

// let scoreDolphins = calcaAverage(44, 23, 71) 
// let scoreKoalas = calcaAverage(65, 54, 49)  




// function checkWinner(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas){
//         console.log(` The winner is Dolphins with score  ${avgDolphins} and the looser is Koalas with score ${avgKoalas}`)
        
//     }else if(avgKoalas >=2 *avgDolphins){
        
//         console.log(` The winner is Koalas with score ${avgKoalas} and the looser is Dolphins with score ${avgDolphins}`)
//     }else{
//       console.log('No time wins...')
//     } 
    
// }
// checkWinner(500, scoreKoalas);
// const friends = ['Michele', 'John', 'Smith', ];
// const newLength = friends.push('Jay');
// console.log(newLength);
// console.log(friends);
// friends.unshift('Jonny');
// console.log(friends);
// friends.pop();
// console.log(friends);
// console.log(friends.indexOf('John'))
// console.log(friends.indexOf('Adilson'))
// console.log(friends.includes('Adilson'))
// console.log(friends.includes('Jonny'))

// const adilson = {
//    firstName: 'Adilson',
//    lastName: 'Simiao',
//    age: 2023 - 1981,
//    job: 'selfDevelopment',
//    friends:['Michele', 'John', 'Smith']
// };
// const nameKey = 'Name';
// //console.log(adilson.job, adilson['last' + nameKey ])
// const interestedIn = prompt('What you want to know about adilson? Choose between firstName, lastName, age, job, and friends');

// //console.log(adilson[interestedIn]);
// if (adilson[interestedIn]){
//    console.log(adilson[interestedIn]);
// }else{
//    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }
// adilson.location = 'Brazil'
// adilson['facebook'] = '@adilsonsimiao'
// console.log(adilson.friends[0]);

const adilson = {
   firstName: 'Adilson',
   lastName: 'Simiao',
   birthDate: 1981,
   job: 'selfDevelopment',
   friends:['Michele', 'John', 'Smith'],
   hasDriverLicense: true,
   calcAge:  function()
   {
      return 2023 - this.birthDate;
   }
};
console.log(adilson.calcAge());
