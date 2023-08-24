"use strict";
console.log(/-------------------------------------/);
console.log('Problem No. 1')
// 1.Write a JavaScript function to generate a random integer.

function getRand(min, max) {
    if(min == null && max == null)
    return 0;
        if(max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(getRand(20,1));
console.log(getRand(1, 10));
console.log(getRand(6));
console.log(getRand());
console.log(/-----------------------------------/);


console.log('Problem No.2');
// 2.Write a JavaScript program to display the current day and time in the following format.  

let today = new Date();
let day = today.getDay();
let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log("Today is : " + dayList[day] + ".");
let hours = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
console.log(`Current time is : ${hours} : ${min} : ${sec}.`);
console.log(/-------------------------------------/);


console.log("Problem No.3");
// 3.Write a JavaScript program to get the current date.  

function currentDay(cd){
    let dd = today.getDate();
    let mm = today.getMonth();
    let yyyy = today.getFullYear();
    if(dd<10){
        dd = '0' + dd;
    }
    if(mm<10){
        mm = '0' + mm;
    }
    return (mm+cd+dd+cd+yyyy);
};
console.log(currentDay('-'));
console.log(currentDay('/'));
console.log(/-------------------------------------/);


console.log("Problem No.4");
// // 4.Write a JavaScript program to check whether a given matrix is an identity matrix. 
// // Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// // [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// // [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false


function identityMatrix(number_data) {
  for (let i = 0; i < number_data.length; i++) {
    for (let j = 0; j < number_data.length; j++) {
      if (
        (number_data[i][j] !== 1 && i === j) ||
        (number_data[i][j] && i !== j)
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  identityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  identityMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(/-------------------------------------/);


// console.log("Problem No.5");
// 5. Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]


console.log("Problem No.6");
// 6. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function blank(data){
    if(data.length === 0)
    {
        return true;
    }else
    {
        return false;
    } 
}
console.log(blank(''));
console.log(blank('abc'));
console.log(/-------------------------------------/);

console.log("Problem No.7");
// 7.Write a JavaScript function to round a number to decimal place.
// Test Data :
// console.log(precise_round(12.375,2));
// console.log(precise_round(-10.3079499, 3));
// console.log(precise_round(10.49999,0));
// console.log(precise_round(10.49999,2));
// Output :
// 12.38
// -10.308
// 10
// 10.50

function roundNumber(num, res) {
  let int = Math.floor(num).toString();
  if (typeof num !== "number" || typeof res !== "number") return "Not a Number";
  if (int[0] == "-" || int[0] == "+") int = int.slice(int[1], int.length);
  return num.toPrecision(int.length + res);
}
console.log(roundNumber(12.375,2));
console.log(roundNumber(-10.3079499, 3));
console.log(roundNumber(10.49999,0));
console.log(roundNumber(10.49999,2));
console.log(/-------------------------------------/);





console.log("Problem No.10");
// 10.Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

function repeat(str,count){
    if(typeof(count) == "undefined"){
        count = 1;

    }
    return count < 1 ? '' : Array(count + 1).join(str);
}
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
console.log(/-------------------------------------/);







