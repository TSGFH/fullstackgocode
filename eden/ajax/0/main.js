const url = "https://randomuser.me/api/"

async function showprofile(){
    const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2.results[0]);

    const pict = document.getElementById("pp")
    pict.setAttribute("src",test2.results[0].picture.large)
    
    const fullname = document.getElementById("fname")
    fullname.innerText = test2.results[0].name.title+ " " + test2.results[0].name.first+ " " + test2.results[0].name.last
   
    const gmail = document.getElementById("mail")
    gmail.innerText = test2.results[0].email

    const people = document.getElementById("gender")
    people.innerText = "gender: " + test2.results[0].gender
}


