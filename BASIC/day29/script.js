// // 1.   Problem Statement: Indian Currency Notes Breakdown
// //      You need to write a program where the user inputs an amount in Indian 
// //      Rupees, and the program should output the number of currency notes 
// //      required to make up that amount using the largest denominations first.
// //      Denominations Available (Indian Rupees): ₹2000, ₹500, ₹200, ₹100, ₹50, 
// //      ₹20, ₹10, ₹5, ₹2, ₹1
// function min(amount)
// {
//     let currency = [2000,500,200,100,50,20,10,5,2,1];
//     let result = {}

//     for(let notes of currency)
//     {
//         let count = Math.floor(amount/notes);
//         result[notes] = count;
//         amount %= notes;
//     }
//     return result;
// }
// let amount = Number(prompt("Enter Amount:"));       
// let i = min(amount)
// for(let note in i)
// {
//     console.log(note+":"+ i[note]);
// }

// //  2.Write a program to accept rating of the movie as double and Movie 
// // name as String. 
// // Check and print the category of movie based on rating. 
// // Example -
// // INPUT 
// // 4.9 
// // RRR 
// let rating = Number(prompt("Enter the rating of the movie"));
// let movie  = prompt("Enter movie name");

// console.log(rating);
// console.log(movie);
// if(rating>=0.0 && rating<=2.0)
// {
//     console.log("FLOP");
// }else if(rating>2.0 && rating<=3.4)
// {
//     console.log("SEMI-HIT");
// }else if(rating>3.4 && rating<=4.5)
// {
//     console.log("HIT");
// }else if(rating>4.5 && rating<=5.0)
// {
//     console.log("SUPER-HIT");
// }

// // 3. Write a program to calculate the salary as per the following table

// let gender = prompt("enter your gender :")
// let qualification =  prompt("QUALIFICATION : 1.graduate / 2.postgraduate");
// let year = Number(prompt("enter year of service"))

// if(gender === "male")
// {
//     if(year >= 10)
//     {
//         if(qualification === 'graduate')
//         {
//             console.log("your salary is 10,000/-");
//         }else{
//             console.log("your salary is 15,000/-");
//         }
//     }
//     else{
//         if(qualification === 'graduate')
//             {
//                 console.log("your salary is 7,000/-");
//             }else{
//                 console.log("your salary is 10,000/-");
//             }
//     }
// }
// else{
//     if(year >= 10)
//     {
//         if(qualification === 'graduate')
//         {
//             console.log("your salary is 9,000/-");
//         }else{
//             console.log("your salary is 12,000/-");
//         }
//     }
//     else{
//         if(qualification === 'graduate')
//             {
//                 console.log("your salary is 6,000/-");
//             }else{
//                 console.log("your salary is 10,000/-");
//             }
//     }
// }