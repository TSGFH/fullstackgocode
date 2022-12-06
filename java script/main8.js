let testarray = [];
testarray.length = prompt("enter the array size")

console.log(testarray)

let dob = function (array) {
    let test = [];
   for(let i = 0; i<array.length; i++) {
       test.push(array[i]);
       test.push(array[i]);
  }
   console.log(test);
  };

dob([1,2,3])

function reverse(array) {
    let output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

function nextnumber(){
  let somearray = [];
  somearray.push((parseInt(prompt("enter the first unmber in the array"))))
  let test = somearray;
  for(let i = 0; i<9;i++){
    somearray.push(test++);

  }
  console.log(somearray)
}
  
nextnumber();

function objectArray(){
  let dog = {
    name: prompt("enter name"),
    Age: prompt("enter age"),
    eyeColor:prompt("enter eye color"),
    weight: prompt("enter wieght"),
  }
  console.log(dog)
  let propertyNames = Object.values(dog);
  console.log(propertyNames)
}

objectArray()
  
// let inputArray = [];
// let size = 5; 

// for(let i=0; i<size; i++) {
	
// 	inputArray[i] = prompt('Enter Element ' + (i+1));
// }

// console.log(inputArray);