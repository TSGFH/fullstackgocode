const superurl = "https://api.thecatapi.com/v1/breeds";

async function iwanttodie(){
    test1 = await fetch(superurl);
    test2 = await test1.json();
    const selector = document.createElement("select")
    const diver = document.getElementById("mydiv")
    diver.append(selector)
    for(let i = 0; i < test2.length; i++){
        const header = document.createElement("option");
        header.innerText = test2[i].id;
        selector.append(header)    
    }
}
async function changethebackground(){
    const picurl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
    const breed = prompt("enter the breed type");
    const newurl = picurl+breed;
    test3 = await fetch(newurl)
    test4 = await test3.json();
    const apicture = document.createElement("img")
    apicture.setAttribute("src",test4[0].url)
    document.body.append(apicture)

    const everything = document.querySelectorAll('*');
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
  }