// // methods - מתודות


///// חלק 1
// function last2(str){
//     str=prompt("תכניס משפט ואני ימחק את 2 האותיות האחרונות").slice(-2);
//     console.log(str);
// }

// last2();

///// חלק 2
// function randomStr(){
//     let str2=prompt("enter a string and i shall randomly choose somthing")
//     for(let i =0; i < str2.length;i++){
//         console.log(str2[i])
//     }
// }

// randomStr();

///// חלק 3
// function char_count(str3, letter) 
// {
//  let lettercount = 0;
//  for (let i = 0; i < str3.length; i++) 
//  {
//     if (str3.charAt(i) == letter) 
//       {
//         lettercount += 1;
//       }
//   }
//   return lettercount;
// }

// console.log(char_count('Mermaid Man', 'M'));

//// חלק 4
// function concatTheSameLength(str4,str5){
//     if(str4.length <= str5.length){
//         for(let i = 0; i < str4.length; i++){
//             console.log(str4[i].concat(str5[i]))
//     }
// }else{
//     for(let j =0; j < str5.length;j++){
//         console.log(str5[j].concat(str4[j]))
//     }

// }
// }

// concatTheSameLength("abc","def");
// concatTheSameLength("avcsdfs","dedadfdsfsdff");


//// חלק 5
// function unique(str6){
//     let uniq = "";

//     for(let i = 0; i < str6.length; i++){
//       if(uniq.includes(str6[i]) === false){
//         uniq += str6[i]
//       }
//     }
//     return uniq;
//   }

//   console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

//   function uniquechar(s){
 
//     for(let i = 0; i < s.length; i++)
//     {

//         if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1);
//         {
//             console.log(s[i]);

//             break;
//         }
//     }
//     return
//  }

//  let s = 'abacddbecg';
//  uniquechar(s);

//חלק 6
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

/// חלק 7
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