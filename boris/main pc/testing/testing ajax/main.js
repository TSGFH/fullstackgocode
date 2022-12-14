const url = "https://randomuser.me/api/"

async function userprofile(){
    const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2.results[0]);

    const profilepic = test2.results[0].picture.large;

    const pic = document.getElementById("pp").src = profilepic

    const firstname = test2.results[0].name.first;
    const lastname = test2.results[0].name.last;
    const middlename = test2.results[0].name.title;

    const fullname = middlename + " " + firstname + " " + lastname;

    const name = document.getElementById("fname");
    name.innerHTML = "full name: " + fullname;

    const gender = document.getElementById("gender")
    gender.innerHTML = "gender: " + test2.results[0].gender

    const number = document.getElementById("phonenumber");
    number.innerHTML = "phone number: " +test2.results[0].cell
}