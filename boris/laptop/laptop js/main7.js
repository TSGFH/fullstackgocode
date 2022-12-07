function printer(){
    let str= prompt("enter a string to print 10 times");
    for(let i = 0; i<10;i++){
        console.log(str);
    }
}

printer();

function greeting(){
    let amount = prompt("how many times should i say hello");
    for(let i = 0; i<amount; i++){
        console.log("hello")
    }
}

greeting();

function avrage(){
    let howmany = prompt("how many grades do you got");
    let fullamount =0;
    for(let i = 0; i< howmany; i++){
        let grades = prompt("what is the grade?")
        fullamount +=Number(grades);
    }
    console.log(fullamount/howmany);
}

avrage();

function stopsign(userIN){
    for(let i =0; userIN !== "stop"; i++){
        userIN= prompt("say stop to stop").toLocaleLowerCase();
        console.log(userIN);
    }
}

stopsign();

function stopnum(usernum){
    let marker=0;
    for(let i =0; usernum !== "-1"; i++){
        usernum= prompt("say -1 to stop").toLocaleLowerCase();
        if(+marker<usernum){
            marker=usernum;
        }
    }
    console.log(+marker);
}

stopnum();