function last2(str){
    str=prompt("enter a sentence and i will give you the last 2 letters").slice(-2);
    console.log(str);
}

last2();

function randomStr(){
    let str2=prompt("enter a string and i shall randomly choose somthing")
    for(let i =0; i < str2.length;i++){
        console.log(str2[i])
    }
}

randomStr();

function char_count(str3, letter) 
{
 let lettercount = 0;
 for (let i = 0; i < str3.length; i++) 
 {
    if (str3.charAt(i) == letter) 
      {
        lettercount += 1;
      }
  }
  return lettercount;
}

console.log(char_count('Mermaid Man', 'M'));

function concatTheSameLength(str4,str5){
    if(str4.length <= str5.length){
        for(let i = 0; i < str4.length; i++){
            console.log(str4[i].concat(str5[i]))
    }
}else{
    for(let j =0; j < str5.length;j++){
        console.log(str5[j].concat(str4[j]))
    }
    
}
}

concatTheSameLength("abc","def");
concatTheSameLength("avcsdfs","dedadfdsfsdff");

function unique(str6){
    let uniq = "";
     
    for(let i = 0; i < str6.length; i++){
      if(uniq.includes(str6[i]) === false){
        uniq += str6[i]
      }
    }
    return uniq;
  }
   
  console.log(unique("thequickbrownfoxjumpsoverthelazydog"));

  function uniquechar(s){
 
    for(let i = 0; i < s.length; i++){
      if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1){
            console.log(s[i]);
            break;
          }
        }
        return;
 }
  
 let s = 'abacddbecg';
 uniquechar(s);