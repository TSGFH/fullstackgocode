function last2(str){
    str = prompt("enter a string and i will give you the 2 last letters").slice(-2)
    console.log(str);
}

last2();

function randomShower(str2){
    str2 = prompt("enter somthing that will return in the 3rd spot").charAt(3);
    console.log(str2);
}

randomShower();

function char_count(str3, letter) 
{
 let lettercount = 0;
 for (let position = 0; position < str3.length; position++) 
 {
    if (str3.charAt(position) == letter) 
      {
        lettercount += 1;
      }
  }
  return lettercount;
}

console.log(char_count('Mermaid Man', 'M'));

function merge (str4, str5) {

    let a = str4.split("").filter(Boolean);
  
    let b = str5.split("");
  
    let mergedString = '';
  
  
    for(let i = 0; i < a.length || i < b.length; i++) { 
     if(i < a.length)  
       mergedString +=  a[i];
     if(i < b.length)  
       mergedString +=  b[i];
    }
  return mergedString;
  
  }
  console.log(merge('abc','def'));
  console.log(merge('ab','def'));
  



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
 
    for(let i = 0; i < s.length; i++)
    {
  
        if (s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1);
        {
            console.log(s[i]);
  
            break;
        }
    }
    return
 }
  
 let s = 'abacddbecg';
 uniquechar(s);