// loops - לולאות

// //// / אחרי המבחן משימה 4 חלק 1
// function pc(mypcs){
//     mypcs = prompt("תעשה את זה כמה פעמים")
//     for(let i = 0; i < 10; i++){
//         console.log(mypcs);
        
//     }
// }
// pc();


//////////// חלק 2
// function hello(num){
// num = prompt("תרשום כמה פעמים להגיד היי")
// for(let i = 0; i < num; i++){
//     console.log("hello");
// }
// }
// hello();


//////////// חלק 3
// part 3
// function Scholl(){
//  let y = prompt("כמות ציונים")
//  let full = 0; // ממוצא
//  for(let i = 0; i < y; i++){
//  let z = prompt("ציונים")
//  full += Number(z);

//  }
//   console.log(full/y)
// }

// Scholl();


///////////// חלק 4
// let result = 'x ';
// for (let i = 0; i < 11; i++) {

//     for (let j = 0; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result += '[' + j + ']';
//         } 
//         else if(j == 0 && i>0){
//           result += '[' + i + '] ';
//         } 
//         else if(i>0 && j>0){
//         result += (i*j) + ' ';
//         }
//     }
//     result += '\n'
// }

// console.log(result);

// const number = parseInt(prompt('Enter an integer: '));

// const range = parseInt(prompt('Enter a range: '));

// for(let i = 1; i <= range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }


//////////// חלק 5
// function superstop(dontstop){
//     for(let i = 0; dontstop !== "stop"; i++){
//     dontstop = prompt("תכתבו מלא עד stop").toLocaleLowerCase();
//     console.log(dontstop) 
//     }
      
// }

// superstop();


///////// חלק 6
// function stopnum(usernum){
//     let marker=0;
//     for(let i =0; usernum !== "-1"; i++){
//         usernum= prompt("say -1 to stop").toLocaleLowerCase();
//         if(+marker<+usernum){
//             marker=usernum;
//         }
//     }
//     console.log(+marker);
// }

// stopnum();



//7.1
// let whilename = 0;

// function thprint(thname){
//     thname = prompt("what to print 10 times")
//     thanswer = thname;
//     return thanswer;
// }

// thprint();

// while(whilename < 10){
//     console.log(thanswer);
//     whilename++;
// }

//7.2

// let thgreeting = 0;

// function greetings(){
//     console.log("hello")
// }
// let x = prompt("how many times to say hello");

// while(thgreeting < x){
//     greetings();
//     thgreeting++;
// }

//7.3

// let gradestop =0;

// function thgrade(x){
//     x=prompt("HOW MANY GRADES TO AVRAGE");
//     let z =0;
//     while(gradestop < x){
//         let y = prompt("enter the grade")
//         z+=Number(y);
//         gradestop++;
//     }
//     console.log(z/x);
// }

// thgrade();

//8.5
// let y="";

// function thwords(x){
//     x = prompt("type somthing in or type stop to stop").toLocaleLowerCase();
//     y = x;
//     console.log(x)
//     return y;
// }
// do{
//     thwords();
// }while(y !== "stop")

// 8.6

// let y = 0;
// let marker=0;
// function thnumbers(x){
//     x = prompt("enter numbers or -1 to stop");
//     y=x;
//     if(+marker<x){
//         marker=x;
//     }
//     if(+x === -1){
//         console.log(+marker);
//     }
//     return y;
// }

// do{
//     thnumbers();
// }while(y !== "-1");