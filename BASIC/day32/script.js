let prompt = require('prompt-sync')();
// 1. ISBN Number
// Description: An ISBN (International Standard Book Number) is a unique 10-digit 
// number assigned to books. The ISBN is valid if the sum of its digits, each 
// multiplied by its position (1 to 10), is divisible by 11. \
// let num = Number(prompt("enter number of 10 digit"))
// let count=0 ,digit,pos , sum = 0;
// while(num>0)
// {
//     digit = num%10;
//     ++count;
//     pos = digit*count;
//     sum = sum + pos ; 
//     num = Math.floor(num/10);
// }
// if(sum % 11 === 0)
// {
//     console.log("valid ISBN...");
// }
// else{
//     console.log("Invalid ISBN....");
// }

// 2. HCF/GCD
//  Description: The Highest Common Factor (HCF) or Greatest Common Divisor 
// (GCD) of two numbers is the largest number that divides both numbers 
// without leaving a remainder\
// let a = Number(prompt("enter first number:"))
// let b = Number(prompt("enter second number:"))
// let r;
// (a>b)? r=a%b : r=b%a;
// while(r != 0)
//     {
//     a = b ; 
//     b = r;
//     (a>b)? r=a%b : r=b%a;
// }
// console.log(b);

// 3. Harshad Number
// Description: A number is a Harshad number if it is divisible by the sum of its 
// digits.
// let n = Number(prompt("enter number "))
// let copy = n; 
// let digit , sum = 0;
// while(n>0)
// {
//     digit = n%10 ;
//     sum = sum + digit;
//     n = Math.floor(n/10);
// }
// if(copy%sum === 0)
// {
//     console.log("it is HARSHAD NUMBER..");
// }
// else console.log("not a harshad number");

// 4. Perfect Square
// Description: A number is a perfect square if it is the square of an integer
// let n = Number(prompt("enter number: "));
// let s = Math.sqrt(n);
// console.log(s);

// if(s === Math.floor(s))
// {
//     console.log('is perfact squaRE');
// }
// else{
//     console.log('is not perfact square '); 
// }

