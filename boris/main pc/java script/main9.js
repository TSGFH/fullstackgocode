////1////

function power(arr){
    let powarr = arr.map(function(item){
        return item **2;
    })
    console.log(powarr)
}

power([2,3,4]);

////1////

////2////


function sorts(arr2, typeofsort){
    typeofsort = prompt("enter the sort type").toLocaleLowerCase();
    let answer = [];

    if(typeofsort === "abc"){
        answer = arr2.sort();
        console.log(answer)
    }else{
        answer = arr2.sort();
        let reverse = answer.reverse();
        console.log(reverse)
    }
}

sorts(["cheese", "milk","eggs"]);

////2////

////3////

function last(arr3,x){
    
    if(x === undefined){
        let sliced = arr3.reverse();
        console.log(sliced.shift());
    }else{
    let sliced = arr3.slice(-x);
    console.log(sliced)
    }
}

last([7, 9, 0, -2]);
last([7, 9, 0, -2],3);
last([7, 9, 0, -2],6);

////3////

////4////

function noCapital(arr4){
    for(let i = 0; i < arr4.length; i++){
        if(arr4[i] == arr4[i].toLocaleLowerCase()){
            console.log(arr4[i])
        }
    }
}

noCapital(["Avi", "Dani", "shuki", "mOshe", "arik"]);

////4////

////5////

function reverseStr(arr5){
    let reveresed = arr5.reverse();
    console.log(reveresed)
}

reverseStr([1,2,3])

////5////

////6////


function isPalindrome(s)
{
    let a = s;
    s = s.split('').reverse().join('');
 
    return s == a;
}
 
function PalindromicStrings(arr,N)
{
    let ans = [];
 
    for (let i = 0; i < N; i++) {
 
        if (isPalindrome(arr[i])) {
 
            ans.push(arr[i]);
        }
    }
    return ans;
}
 
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
 
let s = PalindromicStrings(arr, N);
if(s.length == 0)
console.log("-1");
for(let st of s)
console.log(st," ");

////6////


////7////


function delAnimals(arr,x){
    let newarr = arr.filter( function( el ) {
        return x.indexOf( el ) < 0;
      } );
      console.log(newarr);
}

console.log(delAnimals(["Horse", "Cow", "Sheep", "Donkey"], ["Cow", "Sheep"]));

////7////


////8////

function randomnum(){
    let ranNum = parseInt(Math.random()*6 +1)
    let counter = 0;
    let answer = -1;
    do{
        answer = prompt("guess a number from 1 to 6");
        if(+answer === +ranNum){
        counter++
        console.log("you guessed the number it took you " + counter + " guesses")
    }else{
        counter++
        console.log("try again")
    }
}while(+answer !== +ranNum);
}
randomnum()

////8////

////9////

function upAndDown(){
    let counter = 0;
    let arrr = [];
    do{
        let number = prompt("enter 5 numbers");
        arrr = arrr.concat(number);
        counter ++
    }while(counter !== 5);
    let answer = prompt("say up or down").toLocaleLowerCase();
    if(answer === "up"){
        console.log(arrr);
    }else{
        let newarr= arrr.reverse();
        console.log(newarr);
    }
}

upAndDown()

////9////

////10////

let neweestArr = [1,2,3,4,5,6,7,8,9,10];

let evenArr = neweestArr;

console.log(evenArr);

let somthing = []

let shmak = somthing.concat(neweestArr);

console.log(shmak);

numbers = [1,2,3,4,5,6,7,8,9,10];
numbersCopy = [];
i = -1;

while (++i < numbers.length) {
  numbersCopy[i] = numbers[i];
}

console.log(numbersCopy);

////10////