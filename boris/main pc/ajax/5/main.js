const superurl = "https://api.thecatapi.com/v1/breeds";

async function iwanttodie(){
    test1 = await fetch(superurl);
    test2 = await test1.json();
    for(let i = 0; i < test2.length; i++){
        const header = document.createElement("p");
        header.innerText = test2[i].id;
        document.body.append(header)    
    }
    setTimeout(async function changethebackground(){
        const picurl = "https://api.thecatapi.com/v1/images/search?breed_ids=";
        const breed = prompt("enter the breed type");
        const newurl = picurl+breed;
        test3 = await fetch(newurl)
        test4 = await test3.json();
        const apicture = document.createElement("img")
        apicture.setAttribute("src",test4[0].url)
        document.body.append(apicture)
      },200)
}