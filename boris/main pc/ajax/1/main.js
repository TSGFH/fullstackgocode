const url = 'https://jsonplaceholder.typicode.com/todos'

async function showtodo(){
  const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2);
    for(let i = 0; i < test2.length; i++){
      const printer = document.createElement("h1")
      printer.innerText = test2[i].title
      document.body.append(printer)
      printer.innerText = test2[i].title
      if(test2[i].completed === false){
        printer.style.textDecoration = "line-through"
      }
    }
}