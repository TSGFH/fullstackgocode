// const test = document.createElement("div");
// document.body.append(test);
// const test2 = document.createElement("p");
// test.append(test2)

document.body.style.backgroundColor = "pink"

const in1 = document.createElement("input");
in1.setAttribute('type', 'text');
in1.setAttribute('placeholder', 'first name');
in1.setAttribute('name', 'first name');
const in2 = document.createElement("input");
in2.setAttribute('type', 'text');
in2.setAttribute('placeholder', 'last name');
in2.setAttribute('name', 'last name');
const in3 = document.createElement("input");
in3.setAttribute('type', 'text');
in3.setAttribute('placeholder', 'city');
in3.setAttribute('name', 'city');
const in4 = document.createElement("input");
in4.setAttribute('type', 'text');
in4.setAttribute('placeholder', 'country');
in4.setAttribute('name', 'country');
const in5 = document.createElement("input");
in5.setAttribute('type', 'text');
in5.setAttribute('placeholder', 'date of birth');
in5.setAttribute('name', 'date of birth');
const in6 = document.createElement("input");
in6.setAttribute('type', 'text');
in6.setAttribute('placeholder', 'phone number');
in6.setAttribute('name', 'phone number');
document.body.append(in1,in2,in3,in4,in5,in6);

const select1 = document.createElement("select");
select1.setAttribute("name","gender")
const option1 = document.createElement("option");
const option2 = document.createElement("option");
const option3 = document.createElement("option");
option1.setAttribute("value","0");
option1.setAttribute("value","male");
option1.setAttribute("name","gendermale");
option1.innerText = "male";
option2.setAttribute("value","female");
option2.setAttribute("name","genderfemale");
option2.innerText = "female";
document.body.append(select1);
select1.append(option3,option1,option2);

const field = document.createElement("fieldset");
field.setAttribute("name","field1")
document.body.append(field);
const legend = document.createElement("legend");
legend.setAttribute("name","legend1")
legend.innerText = "citizen of israel:";
field.append(legend);
const div1 = document.createElement("div");
div1.setAttribute("name","div1")
legend.append(div1);
const in7 = document.createElement("input");
in7.setAttribute("type","radio");
in7.setAttribute("name","citizen of israel");
in7.setAttribute("id","radio1");
in7.setAttribute("value","yes")
div1.append(in7);
const label1 = document.createElement("label");
label1.setAttribute("name","test1")
label1.innerText = "yes";
div1.append(label1);

const div2 = document.createElement("div");
div2.setAttribute("name","div2")
legend.append(div2);
const in8 = document.createElement("input");
in8.setAttribute("type","radio");
in8.setAttribute("name","citizen of israel");
in8.setAttribute("id","radio2");
in8.setAttribute("value","no")
div2.append(in8);
const label2 = document.createElement("label");
label2.setAttribute("name","test2")
label2.innerText = "no";
div2.append(label2);

const btn = document.createElement("button");
btn.setAttribute("class","sender");
btn.innerText = "submit";
document.body.append(btn);


const everything = document.querySelectorAll("*");
const fullobj = {};
const send = document.querySelector(".sender");

everything.forEach(function(inp){
    inp.addEventListener('keypress',function(e){
        fullobj[e.target.name] = e.target.value;
        if(e.charCode === 13){
            send.click();
        }
    })
});

send.addEventListener('click',function(){
    console.log(fullobj);
});