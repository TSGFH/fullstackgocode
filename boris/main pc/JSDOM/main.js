const alerter = document.querySelector("input");
function showMessage() {
    alert(alerter.value);
  }

//   let cords = document.addEventListener("mousemove", function(event){
//     let x = event.clientX;
//     let y = event.clientY;
//     console.log("your x is: " + x + " your Y is: " + y)
//   });
//   console.log(cords);

  const imger = document.querySelector("input");
  function showImg(){

    document.getElementById('image').style.display = "block";

    document.getElementById('btnShowMsg').style.display = "none";
  }
  let nums = [1,2,3,4,5,6,7,8,9,10];

  const remover = document.addEventListener("",  function theremover(event){
    
    console.log(nums.pop())
})
