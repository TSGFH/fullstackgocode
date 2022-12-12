// const test = document.createElement("div");
// document.body.append(test);
// const test2 = document.createElement("p");
// test.append(test2)

// mission 1 inputns
const inputns = document.createElement("input")

inputns.setAttribute("type","text")
inputns.setAttribute("placeholder","first name")
inputns.setAttribute("name","fname")

const inputns2 = document.createElement("input")
inputns2.setAttribute("type","text")
inputns2.setAttribute("placeholder","last name")
inputns2.setAttribute("name","lname")

const inputns3 = document.createElement("input")
inputns3.setAttribute("type","text")
inputns3.setAttribute("placeholder","Contry")
inputns3.setAttribute("name","contry")

const inputns4 = document.createElement("input")
inputns4.setAttribute("type","text")
inputns4.setAttribute("placeholder","city")
inputns4.setAttribute("name","city")

const inputns5 = document.createElement("input")
inputns5.setAttribute("type","text")
inputns5.setAttribute("placeholder","phone Number")
inputns5.setAttribute("name","phone Number")

const inputns6 = document.createElement("input")
inputns6.setAttribute("type","text")
inputns6.setAttribute("placeholder","date of birtch")
inputns6.setAttribute("name","dob")

document.body.append(inputns,inputns2,inputns3,inputns4,inputns5,inputns6)

// missions 2 select
const select = document.createElement("select")