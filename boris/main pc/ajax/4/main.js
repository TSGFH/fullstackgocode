const superurl = "https://api.thecatapi.com/v1/images/search?limit=10"

async function meow(){
    const test = await fetch(superurl);
    const test2 = await test.json();
    console.log(test2);
    for(let i = 0; i < test2.length; i++){
        const pic = document.createElement("img")
        pic.setAttribute("src",test2[i].url)
        document.body.append(pic)
    }
    console.log(superurl);

    const somthing = prompt("what page to go to ?")
    const newurl = superurl+"&page="+somthing;
    
    const supertest = await fetch(newurl);
    const supertest2 = await supertest.json();
    console.log(supertest2);
    for(let i = 0; i < supertest2.length; i++){
        const pic = document.createElement("img")
        pic.setAttribute("src",supertest2[i].url)
        document.body.append(pic)
    }
    console.log(newurl);
}