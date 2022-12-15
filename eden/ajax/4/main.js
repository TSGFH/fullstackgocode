const superurl = "https://api.thecatapi.com/v1/images/search?limit=10"

async function cats(){
    const test = await fetch(superurl)
    const test2 = await test.json()
    console.log(test2)
    for(let i = 0; i < test2.length; i++){
        console.log(test2[i])

        const photos = document.createElement("img")
        photos.setAttribute("src",test2[i].url)
        document.body.append(photos)

    
    }
    const draw = prompt("איך אתר אתה בוחר")
    const newurl = superurl + "&page=" + draw
    console.log(superurl)
    const supertest = await fetch(newurl)
    const supertest2 = await supertest.json()

    for(let i = 0; i < supertest2.length; i++){
        console.log(supertest2[i])
        const pic = document.createElement("img")
        pic.setAttribute("src",supertest2[i].url)
        document.body.append(pic)
    }
    console.log(newurl)
}