const url = "https://randomuser.me/api/";

document.body.style.backgroundColor = "pink"

async function showUser(){
  const test = await fetch(url);
  const test2 = await test.json();
  console.log(test2.results[0]);
  
  const div = document.getElementById("div1");
  const profilepic = document.createElement("img");
  profilepic.setAttribute("src",test2.results[0].picture.large);
  div.append(profilepic);

  const fullname = test2.results[0].name.title + " " + test2.results[0].name.first + " " + test2.results[0].name.last;
  const p1 = document.createElement("p");
  p1.innerText = fullname;
  div.append(p1);

  const fulldob = "age: " + test2.results[0].dob.age + " date of birth: " + test2.results[0].dob.date
  const p2 = document.createElement("p");
  p2.innerText = fulldob;
  div.append(p2);

  const cellpnum = "cell number: " + test2.results[0].cell
  const p3 = document.createElement("p");
  p3.innerText = cellpnum;
  div.append(p3);

  const mail = "email: " + test2.results[0].email
  const p4 = document.createElement("p");
  p4.innerText = mail;
  div.append(p4);

  const gen = "gender: " + test2.results[0].gender
  const p5 = document.createElement("p");
  p5.innerText = gen;
  div.append(p5);
  
  const fullid = "id: " + test2.results[0].id.name + " value: "  + test2.results[0].id.value
  const p6 = document.createElement("p");
  p6.innerText = fullid;
  div.append(p6);
}