// // 1.
// let n = 6;
// for (let i = 1; i <=n; i++) {
//    for(let j=1;j<=n;j++)
//    {
//         process.stdout.write("* ");
//    }
//    console.log();
// }

// // 2.
// let n1 = 6;
// for(let i =1 ; i<=n1 ; i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         process.stdout.write("* ")
//     }
//     console.log(); 
// }

// // 3.
// let n2 = 6;
// for(let i =0 ; i<=n2 ; i++)
// {
//     for(let j=0;j<=i;j++)
//     {
//        process.stdout.write(String.fromCharCode(65+j) + " ")
//     }
//     console.log(); 
// }

// // 4.
// let n3=5;
// for(let i=0;i<=n3;i++)
// {
//     for(let j=0 ; j<=n3-i ; j++)
//     {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// 5.
let n=5;
for(let i = 1; i<=n ; i++)
{
    for(let j=1;j<=n-i;j++)
    {
        process.stdout.write("  ")
    }
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(" *")
    }
    console.log();
}

// 6.
let n1=5;
for(let i = 1; i<=n1 ; i++)
{
    for(let j=1;j<=n1-i;j++)
    {
        process.stdout.write(" ")
    }
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(" *")
    }
    console.log();
}

// 7.
let n2 = 9;
for(let i=1;i<=n2;i++)
{
    for(let j=1;j<=n2;j++)
    {
       if(i===j || i+j == n2+1)
       {
        process.stdout.write("* ")
       }
       else{
        process.stdout.write("  ")
       }
    }
    console.log();
}

// 8.
let prompt = require('prompt-sync')();
let n3 = prompt("enter number: ")
for(let i=1;i<=n3;i++)
{
    for(let j=1;j<=(n3+(n3-1));j++)
    {
       if(i===j || i+j == 2*n3)
       {
        process.stdout.write("*")
       }
       else{
        process.stdout.write(" ")
       }
    }
    console.log();
}    
