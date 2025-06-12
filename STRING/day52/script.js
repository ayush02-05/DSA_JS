let prompt = require('prompt-sync')()
// // Q61.Frequency of Each Character (Using Bitmap / Integer Array)
// let s = "malayalam"
// let freq = Array(123).fill(0);
// console.log(s);
// for(let i=0;i<s.length ;i++)
// {
//     let ascii = s.charCodeAt(i);
//     freq[ascii] = freq[ascii] + 1;
// }

// for (let i = 0; i < freq.length; i++) {
//     if(freq[i] > 0)
//     {
//         console.log(String.fromCharCode(i)+" -> "+ freq[i]);
        
//     }
// }

// // Q62. Check Two Strings Are Anagram Or Not (Using Frequency Array)-> when two string having same length and same frequncy of character called anagram 
// // example -> 1.state and taste , 2.race and care ,etc.
// let s1 = "race";
// let s2 = "care";
// if(s1.length != s2.length)
// {
//     console.log("given strings are not anagrams");
// }
// else{
//     let freq = new Array(123).fill(0);
//     let isanagram =true;
//     for(let i=0 ;i<s1.length;i++)
//     {
//         let ascii = s1.charCodeAt(i);
//         freq[ascii] = freq[ascii] + 1;
//     }
//     for(let i=0 ;i<s2.length;i++)
//     {
//         let ascii = s2.charCodeAt(i);
//         freq[ascii] = freq[ascii] - 1;
//     }
//     for(let i=0;i<freq.length;i++)
//     {
//         if(freq[i]!=0)
//         {
//            isanagram =false;
//            break;
//         }
//     }
//     if(isanagram)
//     {
//         console.log("given strings are anagrams");
//     }else {
//         console.log("given strings are not anagrams");
//     }
// }

