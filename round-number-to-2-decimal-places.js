// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
     return +(Math.round(a + "e+2")  + "e-2");
 }
// myFunction(2.12397) Expected 2.12
// myFunction(3.136) Expected 3.14


// function myFunction(a) {
//     return Number(a.toFixed(2));
//   }