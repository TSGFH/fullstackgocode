const url = "https://jsonplaceholder.typicode.com/todos"

async function todos(){
    const test = await fetch(url)
    const test2 = await test.json()
    console.log(test2)

    for(let i = 0; i < test2.length; i++){
        const smallhead = document.createElement("h1")
        smallhead.innerText = test2[i].title
        document.body.append(smallhead)
        smallhead.innerText = test2[i].title
        if(test2[i].completed === false){
            smallhead.style.textDecoration = "line_through"
        }
    }
    
}










