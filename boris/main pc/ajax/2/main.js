const url = "https://reqres.in/api/users"

async function showusers(){
    const test = await fetch(url);
    const test2 = await test.json();
    for(let i = 0; i < test2.data.length; i++){
        console.log(test2.data[i]);
        const profilepic = document.createElement("img")
        profilepic.setAttribute("src",test2.data[i].avatar)
        document.body.append(profilepic)
        const sort = document.getElementById("cards")
        sort.append(profilepic)

        const fname = test2.data[i].first_name;
        const lname = test2.data[i].last_name;
        const fullname = fname + " " + lname;
        const names = document.createElement("h1")
        names.innerText = fullname
        sort.append(names)

        const mails = test2.data[i].email;
        const emails = document.createElement("h1");
        emails.innerText = mails
        sort.append(emails)

    }
}