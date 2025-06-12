let prompt = require('prompt-sync')();
// // Q.38- toggle uppercase to lowercase and vice versa 
// let s = prompt("enter a string: ");
// let ans = "";
// for(let i=0 ; i<s.length ;i++)
// {xx
//     let ascii = s.charCodeAt(i);
//     if(ascii>=65 && ascii<=90)
//     {
//         ans = ans + String.fromCharCode(ascii+32);
//     }
//     else if(ascii>=97 && ascii<=122)
//     {
//         ans = ans + String.fromCharCode(ascii-32);
//     }
// }
// console.log(ans);

// // Q.39- take array of string and strring prefix and count the number of string which are starts from that prefix :
// let words = ["attire","string","attention","rahul","attributes"]
// let pref = prompt("enter prefix : ");
// let count = 0 ; 
// for(let i=0;i<words.length ;i++)
// {
//     if(words[i].startsWith(pref))
//         count++;
// }
// console.log(count);

// // Q40. Capitalize first & last character of each word let s = "hello bhai kya haal chaal";
// let s = "hello bhai kya haal chaal";
// let array = s.split(" ");
// console.log(array);
// let ans = "";
// for(let i=0 ; i<array.length;i++)
// {
//     let word = array[i];
    
//     if(word.length<=2)
//     { 
//         ans = ans + word.toUpperCase()+ " ";
//     }
//     else{
//         ans = ans + word.charAt(0).toUpperCase() + word.substring(1,word.length-1) + word.charAt(word.length-1).toUpperCase()+ " ";
//     }
// }
// console.log(s);
// console.log(ans);