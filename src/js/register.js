import { getUrlUsers } from "./urlData"

const name = document.querySelector("#input-name")
const email = document.querySelector("#input-email")
const password = document.querySelector("#input-password")
const confirmPassword = document.querySelector("#input-confirm-password")
const form = document.querySelector("form")
const URL = getUrlUsers()

form.addEventListener("submit",  async(e) => {
    e.preventDefault()
    if (confirmPassword.value === password.value) {
        const data = userDataFormat(name,email,password)
        await createUser(data)
        form.reset()
        window.location.href = "./login.html"
    }
})

function userDataFormat(name,email,password) {
    const dates = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    return dates
}

async function createUser(data) {
    await fetch(`${URL}`,{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'content-Type': 'application/json'
        }
    })
}