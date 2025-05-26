// // Math. function

// //1. Math.ceil()
// //round of the number to upper valuee of that number 
//     console.log( Math.ceil(10.454));    //11

// //2. Math.floor()
// //round of the number to lower valuee of that number 
//     console.log(Math.floor(10.3456));   // 10
//     console.log(Math.floor(-10.3456));  //-11

// //3. Math.trunc()
// // it removes the decimal part from the number 
//     console.log(Math.trunc(23.4567865432));     //23
//     console.log(Math.trunc(-23.4567865432));    //-23

//      // diffrence between Mth.floor and Math.trunc is how they both handles negative number 

// //4/ Math.round()
// // .decimal >= 0.5 -> ceil  //.decimal < 0.5 -> floor
//     console.log(Math.round(54.500));    //55
//     console.log(Math.round(54.499));    //54

// //5. Math.random() 
// //to generate random value detween 0 to 1 default
//     console.log(Math.random()); //0 to <1

// // Math.sqrt
// //used to generate square root of the number
//     console.log(Math.sqrt(25)); //5
    
// // Math.cbrt
// //used to generate cube root of the number
//     console.log(Math.cbrt(27)); //3

// // Math.pow
// //used to generate power //Math.pow(x,y) -> x^y
//     console.log(Math.pow(4,6)); //4^6->4096
    
// // Math.max
// //to find maximum between given values 
//     console.log(Math.max(10,30,50,40,20));  //50
    
// // Math.min
// //to find minimum between given values 
//     console.log(Math.min(10,30,50,40,20));  //10

// // Math.abs
// //convert negative number into positive 
// //positive will be ass it is 
//     console.log(Math.abs(10.45));
//     console.log(Math.abs(-10.45));

// // tofixed
// //reduce or increace the decimal postion 
//     let a = 122.3456734
//     console.log(a.toFixed(3));
    

//MATH PROBLEMS 

// // // 1. COMPOUND INTEREST     //using pow function
// let p = Number(prompt("enter the principle:"));
// let r = Number(prompt("enter the rate:"));
// let t = Number(prompt("enter thetime duration: "));
// let amnt = p *(Math.pow((1 + (r/100)) , t));   //amount
// let CI = amnt - p ; //amount - principle 
// console.log(CI); //compound interest

// // 2. to generate OTP   using random function 
// //OTP is generally 4 digit number between 1000 to 9999
//     console.log(Math.trunc((Math.random()*9000) + 1000)); 

// // 3.calcualate area of triangle using heron formula 
//     // Heron's ->  sqrt ( s*(s-a)*(s-b)*(s-c) )
// //     let a = Number(prompt("enter the first side of triangle:")) 
// //     let b = Number(prompt("enter the second side of triangle:")) 
// //     let c = Number(prompt("enter the third side of triangle:")) 
// //     if( a+b<=c || a+c<=b || b+c<=a)
// //     {
// //         console.log("not possible");
// //     }
// //     else{
// //         let s = (a+b+c)/2       //s -> semi-perameter f triangle
// //         console.log("area of triangle:",Math.sqrt((s*(s-a)*(s-b)*(s-c))));
// //     }

// // // 4.circumference of circle  -> 2*pi*r
// // let rad = Number(prompt("enter radius of circle:"));
// // console.log("circumference:" , (2*Math.PI*rad));


// // IF ELSE

// // 1.Accept the two number and print the greatest number between them 
// // let a = Number(prompt("enter first number: "));
// // let b = Number(prompt("enter second number: "));
// // if(a>b)
// // {
// //     console.log(a + " is greater");
// // }
// // else{
// //     console.log(b + " is greater");
// // }

// // // 2.Accept an integer and check weather it is even or odd.
// // let n = Number(prompt("enter any number :"));
// // if(n%2 == 0){
// //     console.log(n +" is even");
// // }
// // else{
// //     console.log(n +" is odd");
// // }

// // // 3. Accept the name and age from the user , and check weather user is valid for vote or note 
// // let user = prompt("enter your name:")
// // let age = Number(prompt("enter your age :"))
// // if(age>=18)
// // {
// //     console.log(user+" valid for vote");
// // }
// // else {
// //     console.log(user+" invalid for vote");
// // }

// // 4.Accept three Number and print the greatest among them 
// let a = Number(prompt("enter first number:"))
// let b = Number(prompt("enter second number:"))
// let c = Number(prompt("enter tihrd number:"))

// if(a>b)
// {
//     if(a>c)
//     {
//         console.log(a+" is greatest");
//     }else{
//         console.log(c+" is greatest");
//     }
// }
// else{
//     if(b>c)
//     {
//         console.log(b+" is greatest");
//     }else{
//         console.log(c+" is greatest");
//     }
// }


// // 5. Accept the year and check weather thw year is leap year or not 
// let year = Number(prompt("enter year;"))
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
// {
//     console.log(year+" is leap year");
    
// } else {
//     console.log(year+" is not leap year");
// }


// 6.Accept the amount of product and give discount accounding to the cost 
// let amnt = Number(prompt("enter the cost of product :"))
// let cost,dis;
// if(amnt >= 0 && amnt <= 5000)
// {
//     dis= 0;
// }else if(amnt > 5000 && amnt <= 7000){
//     dis= 5;
// }else if(amnt > 7000 && amnt <= 9000){
//     dis= 10;
// }else if(amnt > 9000)
// {
//     dis= 20;
// }else{
//     console.log("invalid");
// }
//  cost = amnt - ((dis*amnt)/100);
// console.log(cost);

// // 7.Accept the unit of bijli bill and give the bill price accordin to the unit consumption 
// let unit = Number(prompt("enter the amount of unit consumed:"))
// let price ;
// if(unit > 400){
//     price = (unit-400)*13;
//     unit = 400;
// }
// if(unit>200 && unit<=400)
// {
//     price = price + (unit - 200)*8;
//     unit = 200;
// }
// if(unit >100 && unit<=200){
//     price = price + (unit-100)*6;
//     unit = 100 ; 
// }
//     price = price + unit*4.2;

// console.log(price);
