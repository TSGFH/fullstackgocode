let cat = {
    name:"marusa",
    age:"16",
    color:"pink",
    breed:"devon-rex",
}

let cat2 = {
    name2:"sdfdf",
    age2:"12",
    color2:"fsfs",
    breed2:"asd-rex",
}
let test = prompt("enter a somthing to a cat")
cat[test] = prompt("enter somtihing apropriate")
console.log(cat);

function CatName(){
    let input=prompt("guess the cats name").toLocaleLowerCase();
    if(input === cat.name){
        console.log("true");
    }else{
        console.log("false");
    }
}

CatName();

function merger(obj1,obj2){
    let merged = Object.assign(obj1, obj2);
    console.log(merged);
}

merger(cat, cat2)

let cats = {};

for (let i = 0; i < 5; i++) {
    let currentcat = "cat" +i;
    cats[currentcat] = {color: prompt("enter a color")};
}

console.log(cats);

let cat6 = {
    name:"marusa",
}
let cat7 = {
    name:"elsa",
}
let cat8 = {
    name:"jean",
}

function catname(){
    let input=prompt("guess the cats name").toLocaleLowerCase();

    if(input === cat6.name ||input === cat7.name|| input === cat8.name){
        console.log("true");
    }else{
        console.log("false");
    }
}

catname();