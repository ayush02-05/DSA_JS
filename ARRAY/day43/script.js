let prompt = require('prompt-sync')();
// // 1.two dimensional array 
// let prompt = require('prompt-sync')();
// let arr = new Array(3);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = new Array(3);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         arr[j] = new Array(3);
//         arr[i][j] = Number(prompt('enter number: '))  
//     }
// }

// console.log(arr);


// // 2.three dimensional array 
// let prompt = require('prompt-sync')();
// let arr = new Array(3);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = new Array(3);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         arr[i][j] = new Array(3);
//         for(let k=0;k<arr[i][j].length;k++)
//         {
//             arr[i][j][k] = Number(prompt('enter number: '))  
//         }
//     }
// }
//     console.log(arr);

// // 3.sum of diagonal in 2D array 
// let arr = new Array(3);
// let lsum = 0,rsum =0 ;
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = new Array(3);
//     for(let j=0;j<arr[i].length;j++)
//     {
//         arr[i][j] = Number(prompt('enter number: '))  
//     }
// }
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=0;j<arr[i].length;j++)
//     {
//        if(i==j) lsum+=arr[i][j];
//        if(i+j == arr.length-1) rsum+=arr[i][j];
//     }
// }
// console.log(lsum,rsum);
