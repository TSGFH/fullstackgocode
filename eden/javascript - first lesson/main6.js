// //////////Objects
// // חלק 1
// let cat = {
//     name:"marusa",
//     age:"16",
//     color:"pink",
//     breed:"devon-rex",
// }

// // חלק2
// let cat2 = {
//     name2:"sdfdf",
//     age2:"12",
//     color2:"fsfs",
//     breed2:"asd-rex",
// }
// let test = prompt("enter a somthing to a cat")
// cat[test] = prompt("enter somtihing apropriate")
// console.log(cat);

// // חלק 3
// function CatName(){
//     let input=prompt("guess the cats name").toLocaleLowerCase();
//     if(input === cat.name){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// CatName();


// /// חלק 4
// function merger(obj1,obj2){
//     let merged = {obj1, obj2};
//     console.log(merged);
// }

// merger(cat, cat2)


// // חלק 5
// let cats = {};
// for (let i = 0; i < 5; i++) {
//     cats[i] = {color: prompt("enter a color")};
//     console.log(cats[i]);

// }


// // חלק 6
// let cat6 = {
//     name:"marusa",
// }
// let cat7 = {
//     name:"elsa",
// }
// let cat8 = {
//     name:"jean",
// }

// function catname(){
//     let input=prompt("guess the cats name").toLocaleLowerCase();

//     if(input === cat6.name ||input === cat7.name|| input === cat8.name){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }

// catname();





// // ////////////Arrays

// // /// חלק 1
// let pc = [];
// pc.length = prompt("enter the array size")
// console.log(pc)


// //חלק 2
// let dob = function (array) {
//     let test = [];
//    for(let i = 0; i<array.length; i++) {
//     let sum = array[i];
//        test.push(sum);test.push(sum);
//   }
//    console.log(test);
//   };

// dob([1,2,3])

// // חלק 3
// function reverse(array) {
//     let output = [];
//     while (array.length) {
//       output.push(array.pop());
//     }
  
//     return output;
//   }
  
//   console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


/// חלק 4
// function nextnumber(){ ////////////// קוד לא תקין
//     let somearray = [];
//     somearray.push((parseInt(prompt("enter the first unmber in the array"))))
//     for(let i = 1; i < 10; i++){
//       somearray.push(i);
      

//     }
//     console.log(somearray)
//   }
    
//   nextnumber();


// חלק 5
// function objectArray(){
//     let dog = {
//       name: prompt("enter name"),
//       Age: prompt("enter age"),
//       eyeColor:prompt("enter eye color"),
//       weight: prompt("enter wieght"),
//     }
//     console.log(dog)
//     let propertyNames = Object.values(dog);
//     console.log(propertyNames)
//   }
  
//   objectArray()