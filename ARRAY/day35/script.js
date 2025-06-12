let prompt = require('prompt-sync')();
// // 1.accept the value from the user and assign in the array 
// let size = Number(prompt("enter the size of an array:"))
// let arr = Array(size);
// for(let i=0 ; i<size; i++)
// {
//     arr[i] = Number(prompt("enter element: "))
// }
// console.log(arr);

// // 2. input array and find the sum of all elewments of array 
// let size1 = Number(prompt("enter the size of an array:"))
// let arr1 = Array(size1);
// let sum = 0;
// for(let i=0 ; i<size1; i++)
// {
//     arr1[i] = Number(prompt("enter element: "))
//     sum += arr1[i];
// }
// console.log(arr1 , " sum ->"+ sum);

// // 3.find maximum element 
// let size2 = Number(prompt("enter size of an array : "))
// let 3  = Array(size2);

// for(let i=0 ; i<size2; i++)
// {
//     arr2[i] = Number(prompt("enter element: "))
// }
// let large = arr2[0];
// for(let i=1 ; i<size2; i++)
// {
//    if(arr2[i]>large)
//    {
//        large =  arr2[i];
//    }
// }
// console.log(large);

// // 4.find minimum element 
// let size3 = Number(prompt("enter size of an array : "))
// let arr3  = Array(size3);

// for(let i=0 ; i<size3; i++)
// {
//     arr3[i] = Number(prompt("enter element: "))
// }
// let min = arr2[0];
// for(let i=1 ; i<size3; i++)
// {
//    if(arr3[i]<min)
//    {
//        min =  arr3[i];
//    }
// }
// console.log(min);

// // 5.find second largest element 
// let size2 = Number(prompt("enter size of an array : "))
// let arr2  = Array(size2);

// for(let i=0 ; i<size2; i++)
// {
//     arr2[i] = Number(prompt("enter element: "))
// }
// let large = Math.max(arr2[0] , arr2[1]);
// let slarge = Math.min(arr2[0] , arr2[1]);

// for(let i=1 ; i<size2; i++)
// {
//    if(arr2[i]>large)
//    {
//         slarge = large;
//         large =  arr2[i];
//    }
//    else if(arr2[i] > slarge && arr2[i] != large)
//    {
//         slarge = arr2[i];
//    }
// }
// console.log(large , slarge);

// // 6.find second minimum element 
// let size3 = Number(prompt("enter size of an array : "))
// let arr3  = Array(size3);

// for(let i=0 ; i<size3; i++)
// {
//     arr3[i] = Number(prompt("enter element: "))
// }
// let min = Math.min(arr3[0] , arr3[1])
// let smin = Math.max(arr3[0] , arr3[1])
// for(let i=1 ; i<size3; i++)
// {
//    if(arr3[i]<min)
//    {
//         smin = min ;
//         min =  arr3[i];
//    }else if( arr3[i]<smin && arr3 != min)
//    {
//         smin = arr3[i];
//    }
// }
// console.log(min , smin);

// // 7.reverse the array 

// // method1
// let a = [10,20,30,40,50,60,70];
// let rev = new Array(a.length);
// let i = 0;
// for(let j= a.length-1 ; j>=0 ; j--)
// {
//     rev[i] = a[j];
//     i++;
// }
// console.log(a);

// console.log(rev);

// // method2
// let b = [1,2,3,4,5,6,7];
// let I= 0 , J=(b.length-1) , t1;
// while(I<J)
// {
//     t1 = b[J];
//     b[J] =b[I];
//     b[I] = t1;
//     I++; J--;
// }
// console.log(a);

// // 8.all 0 to the left and all 1 to the right 
// let array = [1,1,0,0,1,1,1,0,0,1,1,0];
// let index=0,j=0;
// console.log(array);

// while(index<array.length)
// {
//     if(array[index] === 0)
//     {
//         let temp = array[j];
//         array[j] = array[index];
//         array[index] = temp ;
//         j++;
//     }
//     index++;
// }
// console.log(array);

// // // 9.rotate the vslue from left by 1 
// let a = [1,2,3,4,5];
// let temp  = a[0];
// console.log(a);

// for(let i=0  ;i<a.length-1 ; i++)
// {
//     a[i] = a[i+1];
// }
// a[a.length-1] = temp;
// console.log(a);

// // 10.rotate the vslue from right by 1 
// let a1 = [1,2,3,4,5];
// let temp1  = a1[a1.length-1];
// console.log(a1);

// for(let i=a1.length-1 ;i>0 ; i--)
// {
//     a1[i] = a1[i-1];
// }
// a1[0] = temp1;
// console.log(a1);

