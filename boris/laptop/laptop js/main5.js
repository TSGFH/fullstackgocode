function namer(names){
    names = prompt("enter somthing to prit 10 times");
    for(let i =0; i < 10;i++){
        console.log(names);
    }
}

namer();

function greeting(num){
    num = prompt("enter how many times i say hello");
    for(let i = 0; i < num;i++){
        console.log("hello")
    }
}

greeting();

function avragegrade(x){
    x = prompt("how many grades do you got")
    let z=0
    for(let i=0;i<x;i++){
        y = prompt ("enter the grade");
        z += Number(y);
    }
    console.log(z/x);
}

avragegrade()

let result = 'x ';
for (let i = 0; i < 11; i++) {

    for (let j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);

const number = parseInt(prompt('Enter an integer: '));

const range = parseInt(prompt('Enter a range: '));

for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

function thestopper(superStop){
    for(let i = " ";i !== "stop";){
        superStop = prompt("say stop to stop").toLocaleLowerCase();
        console.log(superStop);
        if(superStop === "stop"){
            break;
        }
    }
}

thestopper();

function thenumberofstop(numstop){
    let numMark=0;
    for(let i = " ";i !== -1;){
        numstop = prompt("write -1 to stop");
        console.log(+numstop);
        if(+numMark < +numstop){
            numMark = numstop;
        }
        if(+numstop === -1){
            console.log(+numMark);
            break;
        }
    }
}

thenumberofstop();

