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
select.setAttribute("name","gender")

const option = document.createElement("option")
option.setAttribute("value","1")
option.innerText = ""

const option2 = document.createElement("option")
option2.setAttribute("value","male")
option2.setAttribute("name","gendermale")
option2.innerText = "male"

const option3 = document.createElement("option")
option3.setAttribute("value","female")
option3.setAttribute("name","genderfemale")
option3.innerText = "female"

document.body.append(select)
select.append(option,option2,option3)

// missions 2 radio
const radio = document.createElement("fieldset")
document.body.append(radio)

const legend = document.createElement("legend")
legend.innerText = "Citizen Of israel:"
radio.append(legend)

const div = document.createElement("div")
legend.append(div)

const input7 = document.createElement("input")
input7.setAttribute("type","radio")
input7.setAttribute("name","Citizen Of israel")
div.append(input7)

const label = document.createElement("label")
label.innerText = "yes"
div.append(label)
// no
const div2 = document.createElement("div")
legend.append(div2)

const input8 = document.createElement("input")
input8.setAttribute("type","radio")
input8.setAttribute("name","Citizen Of israel")
div2.append(input8)

const label2 = document.createElement("label")
label2.innerText = "no"
div2.append(label2)

// mission 3 submit
const btn = document.createElement("button")
btn.setAttribute("id","sender")
btn.innerText = "Submit"
document.body.append(btn)

const selectors = document.querySelectorAll("*")

const opbject = {}

const send = document.querySelector("#sender")

selectors.forEach(function(inp){
    inp.addEventListener("keypress",function(e){
        opbject[e.target.name] = e.target.value
        if(e.charCode === 13){
            send.click()

        }
    })
})
send.addEventListener("click",function(){
    console.log(opbject)
})

