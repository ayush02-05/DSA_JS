// // 1. Accept an integer and print hello world n time 
// let n = Number(prompt("enter numbber of time to be print"))
// for(let i = 0 ; i<n ; i++)
// {
//     console.log("HELLO WORLD");
    
// }

// //2.print thenatural number upto n number 
// let n1 = Number(prompt("enter any number :"))
// for(let i= 1; i<=n1;i++)
// {
// console.log(i); 
// }

// //3.print the natural number upto n number in reverse 
// let n2 = Number(prompt("enter any number :"))
// for(let i= n2; i>=1;i--)
// {
// console.log(i); 
// }

// //4.take number as input and print its table 
// let t = Number(prompt("enter number of which you want table"))
// for(let i=1 ; i<=10;i++)
// {
//     console.log(t + "*" + i +"="+(t*i)); 
// }

// //5.sum of n number
// let p = Number(prompt("enter any number upto you want sum:")) 
// let sum = 0;
// for(let i=1; i<=p;i++)
// {
//     sum+=i;
// }
// console.log(sum);

// // 6.factorial of number 
// let m = Number(prompt("enter number upto where you want factorial:"))
// let factorial=1;
// for(let i=1;i<=m;i++)
// {
//     factorial*=i;
// }
// console.log(factorial);

// // 7.print the sum of all even and odd number saparatelity upto n number 
// let n = Number(prompt("enter number"))
// let even=0,odd=0;
// for(let i=1 ;i<=n ; i++)
// {
//     if(i%2===0)
//     {
//         even+=i;
//     }
//     else{
//         odd+=i;
//     }
// }
// console.log("even sum :"+even ,"| odd sum:"+odd);

// // 8.factor of number 
// let f = Number(prompt("enter any number :"))

// for(let i=1 ; i<f ;i++)
// {
//     if(f%i===0)
//     {
//         console.log(i);
//     }
// }
// console.log(f);


// // 10.take two input a ,b  find the value of a to the power b 
// let a = Number(prompt("enter base:"))
// let b = Number(prompt("enter power:"))
// console.log(Math.pow(a,b));

// // 9.prime or not
// let p = Number(prompt("enter number"));

// // method 1
// let isprime=true;
// for(let i =2;i<p/2;i++)
// {
//     if(p%i===0)
//     {
//         isprime=false;
//         break;
//     }else{
//         isprime=true;
//         break;
//     }
// }
// if(isprime)  console.log('prime');
// else console.log('not prime');

// // method2
// function isprimefun(n){
//     if(n==1) return 0;
//     if(n==2) return 1;
//     if(n%2==0) return 0;
//     for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2)
//     {
//         if(n%i == 0 ) return 0;
//     }
//     return 1;
// }
// let isprime1 = isprimefun(p);
// if(isprime1)  console.log('prime');
// else console.log('not prime');

