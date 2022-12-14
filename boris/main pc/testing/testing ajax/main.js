const url = "https://randomuser.me/api/"

async function userprofile(){
    const test = await fetch(url);
    const test2 = await test.json();

    const gender = document.getElementById("gender")
    gender.innerHTML = "gender: " + test2.results[0].gender
}