////////////// אחרי מבחן
////////// משימה 1
// function pc(name){
//     name = prompt("enter somthing so i can print it 10 times")
//     Numbers = name;
//     return value;
// }

// pc();

// for(let i = 1; i <= 10; i++) {
//     console.log(Numbers + " " +i);
//   }

///////////// משיעמה 2
// function hello(x){
//     x = prompt("how many times do you want to say hello?");
//     for(let i = 1; i<=x; i++){
//         console.log("hello");
//     }
//   }

//   hello();

/// משימה 3
// function avrageGrade(howmany){
//     howmany = prompt("כמה ציונים יהיו");
//     let answer = 0;
//     for(let i = 1; i<=howmany; i++){
//         grade = prompt(i + "תרשום את הציון");
//         answer += Number(grade);
//     }
//     console.log(answer / howmany);
//   }

//   avrageGrade();


// // מ שימה 4
// for( let i = 0; i <= 100; i = i+=10){
//     let line = '';

//     for(let j = 1; j <= 20; j++){
//         line += i*j + ' ' + "t"
//     }
//     console.log(line)
// }



// // משימה 5 
// function worlds(stopSign){
//     for(let i=0; i !=="stop";){
//         stopSign = prompt("just tell me when to stop ok ?")
//         console.log(stopSign);
//         if(stopSign === "stop"){
//             break;
//         }
//     }
// }

// worlds();


// משימה 6
// tellMeWhereToStop();

// function biggestNumStopper(stopNum){
//     let marker = 0;
//     for(let i=0; i !== "-1";){
//         stopNum = prompt("write -1 to stop")
//         if(marker < stopNum){
//             marker = stopNum;
//         }
//         if(stopNum === "-1"){
//             break;
//         }
//     }
//     console.log(+marker);
// }


/// משימה 1 עם לולאה
// biggestNumStopper();

// let the7thname = 0;

// function the7thnamefun(aString){
//     aString = prompt("enter somthing so i can print it 10 times")
//     the7thvalue = aString;
//     return the7thvalue;
// }

// the7thnamefun();

// while(the7thname < 10) {
//     console.log(the7thvalue);
//     the7thname++;
//   }

/// משימה 2 עם לולאה
// let the7thgreeting=0;

// function the7thgreetingfun(y){
//     y = prompt("how many times do you want to say hello?");
//     while(the7thgreeting < y){
//         console.log("hello");
//         the7thgreeting++;
//     }
//   }

//   the7thgreetingfun();

/// משימה 3 עם לולאה
// let the7thgrade = 0

//   function avrageGrade(howmany){
//     howmany = prompt("how many grades to avrage out");
//     let answer = 0;
//     while(the7thgrade < howmany){
//         grade = prompt("enter the grade");
//         answer += Number(grade);
//         the7thgrade++;
//     }
//     console.log(answer / howmany);
//   }

//   avrageGrade();

// function the8thstopsign(z){
//     the8thSelector = prompt("tell me when to STOP").toLocaleLowerCase();
//     superMarker=the8thSelector;
//     console.log(the8thSelector)
//     return superMarker;
// }

//   do{
//     the8thstopsign();
//   }while(superMarker !== "stop")

// let thmarker = 0;
// let superssuper =0;
// function the8thnmber(annumber){
//     annumber = prompt("enter -1 to stop");
//     superssuper = annumber;
//     if(+annumber > +thmarker){
//         thmarker = annumber;
//     }
//     if(+annumber === -1){
//       console.log(+thmarker);
//     }
//     return superssuper;
// }

// do{
//     the8thnmber();
// }while(superssuper !== "-1");



// slice // לחתוך



// function last2(str){
//     str = prompt("תכתוב משהו ואני יחזיר לך 2 אותיות אחרונות").slice(-2)
//     console.log(str)
// }

// last2();


// function random(str2){
//     str2 = prompt("כתוב משהו ותקבלו את המספר חאחרון")
// }













// function text(){
// text2 = prompt("תקליד טקסט והיא תביא לך 10 פעמים אותו")
// for(let i = 0; i < 10; i++ )
// console.log(text2)
// }

// text();


// prt2:
// function hello(){
//     y = prompt("כמה פעמים להגיד שלום")
//     for(let i = 0; i < y; i++){
//         console.log("hello")
//     }
    
// }

// hello();

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

// part5
// function superstop(dontstop){
//     for(let i = 0; dontstop !== "stop"; i++){
//     dontstop = prompt("תכתבו מלא עד stop").toLocaleLowerCase();
//     console.log(dontstop) 
//     }
      
// }

// superstop();




















////////////////////////////////////////////////////// חזרות 
// function last2(str){
//     str = prompt("תרשום משהו וזה יחתוך את אותיות האחרונות").slice(-2);
//     console.log(str)
// }
// last2();


//חלק2
// function hello(){
//     hi = prompt("תרשום מילה ותחזיר לך בשורות")
//     for(let i = 0; i - hi.length; i++){
//       console.log(hi[i])  
//     }

// }
// hello();

//חלק 3
// function superman(str, f){
//  let harleyquinn = 0 
//  for(let i = 0; i < str.length; i++){
//     if(str.charAt(i) == f){
//         harleyquinn += 1
//     }

//  }
//  return harleyquinn;
// }
// console.log(superman("סופרמן", "ס"));

// //חלק 6
// function unique(str){
//     let pc = ""
//  for(let i  = 0; i < str.length; i++){
//     if(pc.includes(str[i]) === false ){
//         pc += str[i]
//     }
//  }
//  return pc;
// }
// console.log(unique("thequickbrownfoxjumpsoverthelazydog"))


// חלק 7
// function abcd(monkey){
//     for(let i =0; i < monkey.length; i++){
//         if(monkey.indexOf(monkey.charAt(i),monkey.indexOf(monkey.charAt(i))+1) == -1){
//             console.log(monkey[i])
//     }
    
//     }
//     return;
// }
// let monkey = "Snake"
// abcd(monkey)


///////////// חלק 1
// function zombie(){
//     let x = prompt("תכתוב משהו והוא ידפיס לך 10 פםעמים")
//     for(let i = 0; i < 10; i++){
//     console.log(x)
//     }
// }
// zombie();

// חלק2
// function hello(){
//     let bye = prompt("כתבו משהו והוא ידפיס שוב")
//     for(let i = 0; i < bye; i++){
//         console.log("hello")
//     }
    
// }

// hello();

//חלק 3
// function scholl(){
//  let x = prompt("כמה ציונים לתת")
//  let xall = 0 
//  for(let i = 0; i < x; i++){
//  let y = prompt("מה הציון")
//  xall += Number(y)

//  }
// console.log(xall/x)
// }
// scholl()

// חלק5
//  function superstop(dontstop){
//     for(let i = 0; dontstop !== "stop"; i++){
//         dontstop = prompt("כתוב משהו ואז תכתוב stop").toLocaleLowerCase();
//         console.log(dontstop)
//     }
//  }
//  superstop()

//  function superstop(dontstop){
//     let marker = 0
//     for(let i = 0; dontstop !== "-1"; i++){
//         dontstop = prompt("כתוב מספרים ואז לעצור -1").toLocaleLowerCase();
//         if(+marker < +dontstop){
//             marker = dontstop
//         }
//     }
//     console.log(+marker)
//  }
//  superstop()




//////////////

