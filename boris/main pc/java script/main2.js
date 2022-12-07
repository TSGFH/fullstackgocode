function fullName(firstName, lastName){
    fullNameAnswer = (firstName + " " + lastName);
    return fullNameAnswer;
}

fullName(prompt("enter your first name"), prompt("enter your last name"));

console.log(fullNameAnswer);

function whoIsTheBigNum(Num1, Num2, Num3){
    numberAnswer = (+Num1 + +Num2 + +Num3);
    if(+Num1 > +Num2 && +Num1 > +Num3){
        console.log(+Num1 + " that number is the biggest")
    }else if(+Num2 > +Num1 && +Num2 > +Num3){
        console.log(+Num2 + " is the biggest number")
    }else{
        console.log(+Num3 + " is the biggest number")
    }
    return numberAnswer;
}

whoIsTheBigNum(prompt("enter a number"), prompt("enter another number"), prompt("enter the last number"));

function whatIsThisNum(theNumber){
    number = theNumber;
    if(theNumber > 0){
        console.log("the number is greater the 0 aka its positive");
    }else if(theNumber < 0){
        console.log("the number is negetrive aka less then 0");
    }else{
        console.log("the number is 0");
    }
    return number;
}

whatIsThisNum(prompt("enter a number"));
whatIsThisNum(prompt("another one"));
whatIsThisNum(prompt("and another one"));
whatIsThisNum(prompt("one more time"));

function theBar(name, age){
    ID = (name + age);
    if(age >= 18)
    {
        console.log(name +" you can enter");
    }else{
        console.log(name + " you are to young and thus can not enter");
    }
    return ID
}

theBar(prompt("your name"), prompt("your age"));

function areYouDivisable(superNum){
    superReasult = (superNum);

    if(superNum % 2 === 0){
        console.log(superNum + " yes this number is divisable");
    }else{
        console.log(superNum + " no it is not divisavle");
    }
    return superReasult;
}

areYouDivisable(prompt("enter a number"));
areYouDivisable(prompt("enter another one"));
areYouDivisable(prompt("once more"));