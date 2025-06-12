// // // 1.
//  let i = 11;
//  i  = i++ + ++i;    // 11 + 13 = 24
//  console.log(i);

// // // 2.
// let a = 11 , b =22 , c;
// c = a + b + a++ + b++ + ++a + ++b ;   // 11 + 22 + 11 + 22 +13 + 24 
// console.log("a=" + a);  // 13 
// console.log("b=" + b);  // 24 
// console.log("c=" + c);  //103

// // // 3.
// i=0;
// i = i++ - --i + ++i - i--; // 0 - 0 + 1 - 1 
// console.log(i);  // 0

// // // 4.
// b =true // true == 1 in boolean 
// b++;
// console.log(b); // 2

// // // 5.
// let I = 1, j = 2, k = 3; 
// let m = I-- - j-- - k--; // 1 - 2 - 3 = -4 -> (I=0 , j=1 ,k=2)
// console.log("I=" + I); // "I=0"
// console.log("j=" + j); // "j=1"
// console.log("k=" + k); // "k=2"
// console.log("m=" + m);// "m=-4"

// // //6.
// // let A = 1, B = 2; 
// // console.log(--B - ++A + ++B - --A); // 1 - 2 + 2 - 1 = 0

// // 7.
// let i = 19, j = 29, k;
// k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;  //19 - 18 + 28 - 29 + 18 - 29 + 19 - 28 = -20
// console.log("i=" + i);  //19
// console.log("j=" + j);  //29 
// console.log("k=" + k);  // -20

// Q8:
// let I = 11;
// let J1 = --(I++);  // syntax error not allowded

// Q9:
// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;  // (-1 * -1 * -1 * -1)  =>( 1 * -1 * -1) => (-1 * -1) => 1 
// console.log(p);  // 1

// // Q10:
// let a = 1;
// a = a++ + ++a * --a - a--;  // 1 + (3 * 2 )- 2 =. 1 + 6 - 2 => 5
// console.log(a);  // 5

// // Q11:
// let A = 11++;  // can not apply logical operators in constant 
// console.log(A);

// // Q12:
// let s = 0, J = 0;
// console.log(--s * s++ * ++J * J++); // -1 * -1 * 1 * 1 =>1 


