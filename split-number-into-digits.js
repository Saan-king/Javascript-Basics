// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
   
    return [...a+''].map(n=>+n)
 }

//  function myFunction( a ) {
//     const string = a + '';
//     const strings = string.split('');
//     return strings.map(digit => Number(digit))
//   }

// myFunction(931) Expected  [9,3,1]