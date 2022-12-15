const superurl = "https://api.thecatapi.com/v1/breeds"

async function catselect(){
    const test = await fetch(superurl)
    const test2 = await test.json()
    console.log(test2)
    for(let i = 0; i< test2.length; i++){
        console.log(test2[i]);
        
        const hader = document.createElement("p")
        hader.innerText = test2[i].id
        document.body.append(hader)
    }
    setTimeout(async function changethebackground(){
        const picone = "https://api.thecatapi.com/v1/images/search?breed_ids="
        const breed = prompt("תכתוב את סוג החתול שלך")

        const newurl = picone + breed

        const test3 = await fetch(newurl)
        const test4 = await test3.json()
        
        const apic = document.createElement("img")
        apic.setAttribute("src",test4[0].url)
        document.body.append(apic)
    },200);
    

}