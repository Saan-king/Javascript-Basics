// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a)
{
return a.substring(3); 
}


//Test cases
// myFunction('abcdefg') Expected 'defg'
// myFunction('1234') Expected '4'
// myFunction('fgedcba') Expected 'dcba'

// function myFunction(a) {
//     return a.slice(3);
//  }