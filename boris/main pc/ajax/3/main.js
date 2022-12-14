const url = "https://reqres.in/api/users/4"

async function showuser(){
    const test = await fetch(url);
    const test2 = await test.json();
    console.log(test2);
}