// // Q31.  Matrix Diagonal Sum
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(matrix);
// let sum =0;
// for(let i=0 ; i<matrix.length;i++)
// {
//     for(let j=0 ;j<matrix[i].length;j++)
//     {
//         if(i == j)
//         {
//             sum += matrix[i][j];
//         }
//     }
// }
// console.log(sum);


// // Q32. Transpose Matrix -> 3x3 matrix
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];

// let arr = new Array(matrix.length);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = new Array(matrix.length);
//     for(let j =0; j< arr[i].length ;j++)
//     {
//         arr[i][j] = matrix[j][i];
//     }
// }
// console.log(arr);

// //Q32. Transpose Matrix ->  3x2 matrix
// let matrix = [[1,2,3],[4,5,6]];

// let arr = new Array(matrix[0].length);
// for(let i=0;i<arr.length;i++)
// {
//     arr[i] = new Array(matrix.length);
//     for(let j =0; j< arr[i].length ;j++)
//     {
//         arr[i][j] = matrix[j][i];
//     }
// }
// console.log(arr);

// //Q33. Rotate Image  = transpose -> reverse 
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
//     console.log(matrix);

//     // 1. transpose
//     for(let i= 0;i<matrix.length;i++)
//     {
//         for(let j=i ;j<matrix[i].length;j++)
//         {
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp ; 
//         }
//     }

//     // 2. reverse 
//     for(let i= 0 ; i<matrix.length ; i++)
//     {
//         let j = 0 , k = matrix.length-1;
//         while(j<k)
//         {
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[i][k];
//             matrix[i][k] = temp ; 
//             j++;
//             k--;
//         }
//     }
//     console.log(matrix); 
    

// // Q34. Spiral Matrix
// let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// let arr = new Array();
// let left = 0 , right =matrix.length -1 ;
// let top = 0 , bottom =matrix.length -1 ;
// while(arr.length < ((matrix.length)*(matrix.length)))
// {
//     for(let i=left ; i<=right ; i++)
//     {
//         arr.push(matrix[top][i]);
//     }
//     top++;
    
//     for(let i=top ; i<=bottom ; i++)
//     {
//         arr.push(matrix[i][right]);
//     }
//     right--;
//     if(top<=bottom)
//     {
//         for(let i=right ; i>=left ; i--)
//         {
//             arr.push(matrix[bottom][i]);
//         }
//         bottom--;
//     }
//     if(left<=right)
//     {
//         for(let i= bottom ; i>=top ; i--)
//         {
//             arr.push(matrix[i][left]);
//         }
//         left++;
//     }
// }
// console.log(arr);
  