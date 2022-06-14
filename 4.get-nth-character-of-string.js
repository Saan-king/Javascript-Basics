// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n)
{
return a[n-1];
}

//string index starts  from 0 , so n-1

// myFunction('abcd',1) Expected 'a'
// myFunction('zyxbwpl',5) Expected 'w'
// myFunction('gfedcba',3) Expected 'e'