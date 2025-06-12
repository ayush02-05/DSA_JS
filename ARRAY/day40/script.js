let prompt = require('prompt-sync')();

// 11.rotate the element by k steps

// method1
// let a = [1,2,3,4,5];
// let k =7;
// k = k%a.length;
// console.log(a);
// for(let j=1;j<=k ; j++)
//     {
//     let temp  = a[0];
//     for(let i=0  ;i<a.length-1 ; i++)
//         {
//             a[i] = a[i+1];
//         }
//         a[a.length-1] = temp;
// }
// console.log(a,k);

// method2
// let a = [1,2,3,4,5];
// let temp = new Array(a.length);
// let k =7;
// k = k%a.length;
// console.log(a);
// for(let i=0 ;i<a.length;i++)
// {
//     temp[i] = a[(i+k)%a.length];
// }
// console.log(temp);

// method3
// let a = [1,2,3,4,5];
// let k =prompt('enter number :');
// k = k%a.length;
// console.log(a);
// reverse(a,0,k-1)
// reverse(a,k,a.length-1)
// reverse(a,0,a.length-1)
// console.log(a);
// function reverse(a , i , j)
// {
//     while(i<j)
//     {
//         let temp = a[i]   
//         a[i] = a[j]
//         a[j] = temp 
//         j--;
//         i++;
//     }
// }

// // 12.linear search an element in array if found ->print index else not found 
// let array = [21,34,45,65,38,56,12,7]
// let element = prompt("enter number : ")
// let index = -1 ;
// for(let i=0 ; i<array.length ; i++)
// {
//     if(array[i] ==element)
//     {
//         index = i;
//         break;
//     }
// }
// if(index == -1)
//     {console.log("element not found");}
// else
//    { console.log("element found at index :"+ index);}

// //13. binary search in an sorted array 
// let arr = [ 5,6,7,8,9,10,11,12];
// let target = prompt("enter number :")

// if(binarysearch(arr , target) === -1) console.log("not found");
// else console.log("found");

// function binarysearch(arr,key)
// {
//     let s = 0;
//     let e = arr.length-1;

//     while(s<=e)
//     {
//         let mid = Math.floor((s+e)/2);

//         if(arr[mid] == key)
//             return mid ; 
//         else if( arr[mid] > key)
//             e = mid -1 ; 
//         else 
//             s= mid + 1 ; 
//     }
//     return -1 ; 
// }