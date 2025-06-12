// strings ke methods :-
// *  string is an sequence of character 
// * in JS string is no an array of character 
// * string is immutable -> can not change the value 

// // 1. to uppercase and tolowercase 
// let s = "keSe Ho bHauU";
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// // 2. length 
// let s = "hello cohort";
// console.log(s.length);

// // 3.substring and slice 
// let s = "hello cohort";
// console.log(s.substring(4,9));
// console.log(s.slice(-4,-1));

// // 4. concat
// let s = "hello cohort";
// console.log(s.concat(" is"," my"," best friend"));

// // 5. trim 
// let s = "         hello bhai kes ho         "
// console.log(s);
// console.log(s.trim());

// QUESTIONS -----

// // — Q35. Accept a string from user and print each character on a new line
// let s = "sheryians cohort"
// for(let i=0;i<s.length;i++)
// {
//     console.log(s[i]);   
// }

// // — Q36. Accept a string and print it in reverse order
// let s = "sheryians";
// let rev = "";
// for(let i = s.length-1; i>= 0 ; i--)
// {
//     rev += s.charAt(i);
// }
// console.log(rev);

// //— Q37. PALLINDROME USING TWO POINTER
// let s = "malayalam";
// if(pallindrome(s))
// {
//     console.log("string is pallindrome");
// }
// else{
//     console.log("string is not pallindrome");
// }

// function pallindrome(string)
// {
//     let i=0,j =s.length-1;
//     while(i<j)
//         {
//             if(string[i] != string[j])
//             {
//                 return 0;
//             }
//             i++;
//             j--;
//         }
//         return 1 ;
// }
