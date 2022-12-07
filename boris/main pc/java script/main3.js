function theBiggestNum(num1, num2){
    theBiggestNumAnswer = (+num1, num2);
    if(+num1 > +num2){
        console.log(num1 + " is the biggest num");
    }else{
        console.log(num2 + " is the biggest num");
    }
}

theBiggestNum(5,2);

function theBiggestNumPrompt(num3, num4){
    theBiggestNumPromptAnswer = (+num3, +num4);
    num3 = prompt("enter a number");
    num4 = prompt("enter another one")
    if(+num3 > +num4){
        console.log(num3 + " is the biggest num");
    }else{
        console.log(num4 + " is the biggest num");
    }
}

theBiggestNumPrompt();

function basicCalc(num5, num6, op){
    basicCalcAnswer = (+num5, +num6, op);
    regularanswer = 0;
    if(op === "+"){
        regularanswer = (+num5 + +num6);
        console.log(regularanswer)
    }else if(op === "/"){
        regularanswer = (+num5 / +num6);
        console.log(regularanswer)
    }else if(op === "*"){
        regularanswer = (+num5 * +num6);
        console.log(regularanswer)
    }else{
        console.log("somthing is wrong here")
    }
}

basicCalc(2,5,"+");
basicCalc(7,7,"/");
basicCalc(5,5,"*");

function superSelectorCombiner(num7, num8){
    supercombineranswer = (+num7 + +num8);
    console.log(supercombineranswer)
}

function superselectorMulti(num9, num10){
    supercombineranswer = (+num9 * +num10);
    console.log(supercombineranswer)
}

const theSelector = prompt("which function would you like to run ? if its the combiner plz enter + if its the multiplyer enter *");

if(theSelector === "+"){
    console.log("you have selected plus todays numbers are  9 + 9")
    superSelectorCombiner(9,9);
}else if(theSelector === "*"){
    console.log("you have selected multiply todays numbers is 6 * 8")
    superselectorMulti(6,8);
}else{
    console.log("somthing is wrong here")
}