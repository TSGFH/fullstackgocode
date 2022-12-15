const url = "https://reqres.in/api/users"

async function showuser(){
    const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2);
    for(let i = 0; i < test2.data.length; i++){
        const pic1 = document.getElementById("1")
        const pic2 = document.getElementById("2")
        const pic3 = document.getElementById("3")
        const pic4 = document.getElementById("4")
        const pic5 = document.getElementById("5")
        const pic6 = document.getElementById("6")
        pic1.setAttribute("src",test2.data[0].avatar);
        pic2.setAttribute("src",test2.data[1].avatar);
        pic3.setAttribute("src",test2.data[2].avatar);
        pic4.setAttribute("src",test2.data[3].avatar);
        pic5.setAttribute("src",test2.data[4].avatar);
        pic6.setAttribute("src",test2.data[5].avatar);
    }
}