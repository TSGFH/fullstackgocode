const url = "https://reqres.in/api/users"

async function showuser(){
    const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2);
    for(let i = 0; i < test2.data.length; i++){
        const pic1 = document.getElementById("1")
        const pic2 = document.getElementById("2")
        const pic3 = document.getElementById("3")
        const pic4 = document.getElementById("4")
        const pic5 = document.getElementById("5")
        const pic6 = document.getElementById("6")
        pic1.setAttribute("src",test2.data[0].avatar);
        pic2.setAttribute("src",test2.data[1].avatar);
        pic3.setAttribute("src",test2.data[2].avatar);
        pic4.setAttribute("src",test2.data[3].avatar);
        pic5.setAttribute("src",test2.data[4].avatar);
        pic6.setAttribute("src",test2.data[5].avatar);
    }
}

async function guy1(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[0].first_name + " " +test2.data[0].last_name;
    g1e.innerText = test2.data[0].email;
}

async function guy2(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[1].first_name + " " +test2.data[1].last_name;
    g1e.innerText = test2.data[1].email;
}

async function guy3(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[2].first_name + " " +test2.data[2].last_name;
    g1e.innerText = test2.data[2].email;
}
async function guy4(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[3].first_name + " " +test2.data[3].last_name;
    g1e.innerText = test2.data[3].email;
}
async function guy5(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[4].first_name + " " +test2.data[4].last_name;
    g1e.innerText = test2.data[4].email;
}
async function guy6(){
    const test = await fetch(url);
    const test2 = await test.json();

    const g1n = document.getElementById("1stname")
    const g1e = document.getElementById("1stmail")
    g1n.innerText= test2.data[5].first_name + " " +test2.data[5].last_name;
    g1e.innerText = test2.data[5].email;
}
// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
