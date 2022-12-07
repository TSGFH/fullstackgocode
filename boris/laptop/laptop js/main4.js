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

function biggestNumStopper(stopNum){
    let marker = 0;
    for(let i=0; i !== "-1";){
        stopNum = prompt("write -1 to stop")
        if(marker < stopNum){
            marker = stopNum;
        }
        if(stopNum === "-1"){
            break;
        }
    }
    console.log(+marker);
}

biggestNumStopper();

let the7thname = 0;

function the7thnamefun(aString){
    aString = prompt("enter somthing so i can print it 10 times")
    the7thvalue = aString;
    return the7thvalue;
}

the7thnamefun();

while(the7thname < 10) {
    console.log(the7thvalue);
    the7thname++;
  }

let the7thgreeting=0;

function the7thgreetingfun(y){
    y = prompt("how many times do you want to say hello?");
    while(the7thgreeting < y){
        console.log("hello");
        the7thgreeting++;
    }
  }

  the7thgreetingfun();

let the7thgrade = 0

  function avrageGrade(howmany){
    howmany = prompt("how many grades to avrage out");
    let answer = 0;
    while(the7thgrade < howmany){
        grade = prompt("enter the grade");
        answer += Number(grade);
        the7thgrade++;
    }
    console.log(answer / howmany);
  }

  avrageGrade();

function the8thstopsign(z){
    z = prompt("tell me when to STOP").toLocaleLowerCase();
    superMarker=z;
    console.log(z)
    return superMarker;
}

  do{
    the8thstopsign();
  }while(superMarker !== "stop")

let thmarker = 0;
let superssuper =0;

function the8thnmber(annumber){
    annumber = prompt("enter -1 to stop");
    superssuper = annumber;
    if(+annumber > +thmarker){
        thmarker = annumber;
    }
    if(+annumber === -1){
      console.log(+thmarker);
    }
    return superssuper;
}

do{
    the8thnmber();
}while(superssuper !== "-1");