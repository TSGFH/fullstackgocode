function thTenPrinter(name){
    name = prompt("enter somthing so i can print it 10 times")
    value = name;
    return value;
}

thTenPrinter();

for(let i = 1; i <= 10; i++) {
    console.log(value + " " +i);
  }

  function hello(x){
    x = prompt("how many times do you want to say hello?");
    for(let i = 1; i<=x; i++){
        console.log("hello");
    }
  }

  hello();

  function avrageGrade(howmany){
    howmany = prompt("how many grades to avrage out");
    let answer = 0;
    for(let i = 1; i<=howmany; i++){
        grade = prompt(i + " enter the grade");
        answer += Number(grade);
    }
    console.log(answer / howmany);
  }

  avrageGrade();


for( let i = 1; i < 100; i = i+=10){
    let line = '';

    for(let j = 1; j <= 10; j++){
        line += i*j + ' ';
    }
    console.log(line)
}

const z = parseInt(prompt("enter the number to make its multi table"));

for(let i = 1; i <= 10; i++) {
    const result = i * z;
    console.log(`${z} * ${i} = ${result}`);
}

function tellMeWhereToStop(stopSign){
    for(let i=0; i !=="stop";){
        stopSign = prompt("just tell me when to stop ok ?")
        console.log(stopSign);
        if(stopSign === "stop"){
            break;
        }
    }
}

tellMeWhereToStop();

function bignumberstopper(){
    let choosennumber = parseInt(prompt("enter numbers or -1 to stop"));
    let maxnum = choosennumber
    for(let i =0;choosennumber !== -1; i++){
        choosennumber = parsent(prompt("enter numbers or -1 to stop"));
        if(maxnum <choosennumber){
            maxnum =choosennumber;
        }
    }
    console.log(maxnum);
}

bignumberstopper();
