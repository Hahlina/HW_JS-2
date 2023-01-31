`use strict`;

//! Task 2
let number = +prompt("Enter nuber from 0 to 9");
switch (number) {
  case 0:
    alert(")");
    break;
  case 1:
    alert("!");
    break;
  case 2:
    alert("@");
    break;
  case 3:
    alert("#");
    break;
  case 4:
    alert("$");
    break;
  case 5:
    alert("%");
    break;
  case 6:
    alert("^");
    break;
  case 7:
    alert("&");
    break;
  case 8:
    alert("*");
    break;
  case 9:
    alert("*");
    break;
  default:
    alert("Enter the correct number");
}

//! Task 3
// let number = +prompt("Enter a three-digit number");
// if (number >= 100 && number < 1000) {
//   let number3 = number % 10;
//   console.log("number3: ", number3);
//   number = Math.floor(number / 10);
//   let number2 = number % 10;
//   console.log("number2: ", number2);
//   number = Math.floor(number / 10);
//   let number1 = number % 10;
//   console.log("number1: ", number1);
//   let result =
//     number1 === number2 ||
//     number1 === number3 ||
//     number2 === number1 ||
//     number2 === number3 ||
//     number3 === number1 ||
//     number3 === number2
//       ? "The number has the same values"
//       : "The number does not have the same meaning";
//   alert(result);
// } else {
//   alert("Enter the correct data");
// }

//! Task 4
// let year = +prompt("Enter year");
// let leapYear = year % 400;
// let leapYear2 = year % 4;
// let leapYear3 = year % 100;
// console.log("leapYear2: ", leapYear3);
// if (leapYear === 0 || (leapYear2 === 0 && leapYear3 !== 0)) {
//   alert("This year is a leap year");
// } else {
//   alert("This year is not a leap year");
// }

//! Task 6
// const eur = 1.085;
// const uah = 0.027;
// const azn = 0.59;
// let dollar = +prompt("How many dollars do you have? ");
// if (dollar > 0) {
//   let currency = +prompt(
//     "What currency do you want to exchange? Enter the number 1 for EUR, number 2 for UAH and number 3 for AZN"
//   );
//   switch (currency) {
//     case 1:
//       let exchange = (dollar / eur).toFixed(2);
//       alert(`You will receive ${exchange} EUR`);
//       break;
//     case 2:
//       let exchange1 = (dollar / uah).toFixed(2);
//       alert(`You will receive ${exchange1} UAH`);
//       break;
//     case 3:
//       let exchange2 = (dollar / azn).toFixed(2);
//       alert(`You will receive ${exchange2} AZN`);
//       break;
//     default:
//       alert("Enter the correct data");
//   }
// } else {
//   alert("Enter the correct data");
// }

//! Task 7
// let sum = +prompt("Enter the sum buy");
// if (sum >= 200 && sum < 300) {
//   let result = sum - (sum * 3) / 100;
//   alert(`The sum to buy with discount is ${result}`);
// } else if (sum >= 300 && sum < 500) {
//   result = sum - (sum * 5) / 100;
//   alert(`The sum to buy with discount is ${result}`);
// } else if (sum >= 500) {
//   result = sum - (sum * 7) / 100;
//   alert(`The sum to buy with discount is ${result}`);
// } else {
//   alert("Enter the correct data");
// }

//! Task 8
// let circle = +prompt("Enter the length of the circle");
// let square = +prompt("Enter the perimeters of the square");
// if (circle > 0 && square > 0) {
//   let lenghtSide = square / 4;
//   let result = lenghtSide >= circle ? true : false;
//   alert(
//     result
//       ? "a square can contain a circle"
//       : "a square can not contain a circle"
//   );
// } else {
//   alert("Enter the correct data");
// }

//! Task 9
// let question1 = +prompt(
//   "HTML and CSS are programming languages? Enter the number 1 if 'YES', number 2 if 'NO' and number 3 if 'I dont know'"
// );
// let question2 = +prompt(
//   "Do you know Mr. Roman? Enter the number 1 if 'YES', number 2 if 'NO' and number 3 if 'Who is this?'"
// );
// let question3 = +prompt(
//   "Do you like my code?? Enter the number 1 if 'YES', number 2 if 'Very much' and number 3 if ' I lile your code'"
// );
// if (
//   question1 > 0 &&
//   question1 < 4 &&
//   question2 > 0 &&
//   question2 < 4 &&
//   question3 > 0 &&
//   question3 < 4
// ) {
//   let result1 = question1 === 1 ? 2 : 0;
//   let result2 = question2 === 1 ? 2 : 0;
//   let result3 = question3 > 0 && question3 <= 3 ? 2 : 0;
//   let result = result1 + result2 + result3;
//   alert(`You scored ${result} out of 6`);
// } else {
//   alert("Enter number from 1 to 3!!!");
// }

//! Task 10
// let day = +prompt("Enter this day");
// let month = +prompt("Enter this month");
// let year = +prompt("Enter this year");
// let leapYear = year % 400;
// let leapYear2 = year % 4;
// let leapYear3 = year % 100;
// if (leapYear === 0 || (leapYear2 === 0 && leapYear3 !== 0)) {
//   leapYear = 1;
// }
// if (day > 0 && day <= 32 && month > 0 && month < 13) {
//   if (day > 0 && day <= 30) {
//     day = ++day;
//     if (
//       month === 4 ||
//       month === 6 ||
//       month === 9 ||
//       month === 11 ||
//       (month === 1 && day === 30)
//     ) {
//       day = 1;
//       month = ++month;
//     }
//     if (month === 2 && day >= 28 && leapYear !== 1) {
//       day = 1;
//       month = 3;
//       if (leapYear === 1) {
//         day = 29;
//         month = 2;
//       }
//     }
//   } else if (day === 31 && month === 12) {
//     month = 1;
//     year = ++year;
//     day = 1;
//   } else if (day === 31) {
//     day = 1;
//     month = ++month;
//   }
//   alert(`Tomorrow ${day}/${month}/${year}year`);
// } else {
//   alert("Enter the correct data");
// }
