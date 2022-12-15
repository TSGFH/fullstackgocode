const url = " https://reqres.in/api/users"

async function peoples(){
    const test = await fetch(url)
    const test2 = await test.json()
    for(let i = 0; i < test2.data.length; i++){
    console.log(test2.data[i])

    const profilepic = document.createElement("img")
    profilepic.setAttribute("src",test2.data[i].avatar)
    document.body.append(profilepic)

    const fullname = test2.data[i].first_name+ " " + test2.data[i].last_name
    const users = document.createElement("h1")
    users.innerText = fullname
    document.body.append(users)

    const gmail = test2.data[i].email
    const emails = document.createElement("h1")
    emails.innerText = gmail
    document.body.append(emails)
     
    }
 
}
