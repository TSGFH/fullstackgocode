const alerter = document.querySelector("input");
function showMessage() {
    alert(alerter.value);
  }

   // mouse 
  // let cords = document.addEventListener("mousemove", function(event){
  //   let x = event.clientX;
  //   let y = event.clientY;
  //   console.log("your x is: " + x + " your Y is: " + y)
  // });
  // console.log(cords);

  const imger = document.querySelector("input");
  function showImg(){

    document.getElementById('image').style.display = "block";

    document.getElementById('btnShowMsg').style.display = "none";
  }
  let nums = [1,2,3,4,5,6,7,8,9,10];

  const remover = document.querySelector("input")
  
function theremover(){
  nums.pop();
  console.log(nums);
}
function theblack(){
  document.body.style.background = "black";
}
function thered(){
  document.body.style.background = "red";
}
function thegreen(){
  document.body.style.background = "green";
}
function theblue(){
  document.body.style.background = "blue";
}

setInterval(function changethebackground(){
  let backgroundchanger = parseInt(Math.random()*4+1)
  if(backgroundchanger === 1){
    document.body.style.background = "yellow";
  }else if(backgroundchanger === 2){
    document.body.style.background = "pink";
  }else if(backgroundchanger === 3){
    document.body.style.background = "orange";
  }else{
    document.body.style.background = "brown";
  }
},200)