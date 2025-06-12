// // 1. sum upto n term
let n1 = Number(prompt("enter number:"));
let add =0 ;
let reminder;
while(n1>0)
{
    reminder = n1 % 10 ; 
    add = add + reminder ;
    n1  = Math.floor(n1/10); 
}
console.log(sum);

// // 2. reverse the number 
let m = Number(prompt("enter number:"));
console.log(m);

let reverse = 0 , rem = 0;
while(m>0)
{
    rem = m % 10 ;
    reverse = (reverse*10) + rem ; 
    m = Math.floor(m/10);
}
console.log(reverse);

// // 3.Automorphic number -> a number whose square ends with the same digit ex: 5 ->25 ,76 -> 5776 ,6->36
let num = Number(prompt("enter number :"))
let sq = num * num ; 
let copy = num , count = 0;
while(num>0)
{
    count++;
    num = Math.floor(num/10);
}
if( sq % Math.pow(10 , count) === copy)  console.log("automorphic number");
else console.log("not a automorphic number");


// 4. strong number ->if the sum of factorials of each digit of any number is equal to that number . 
// 145 -> 1! + 4! +5! = 1 + 24 +120 = 145 
let n = Number(prompt('Enter number'))
let copy2 = n ;
let digit,fact,sum =0;
while(n>0)
{
    digit = n % 10;
    fact =1 ;
    for(let i=1 ; i<=digit ; i++)
    {
        fact = fact * i ;
    }
    sum = sum + fact ; 
    n = Math.floor(n/10);
}

if(sum === copy2)
{
    console.log('strong number');
}
else{
    console.log('not a strong number ');
}