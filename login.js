const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input:first-child")
const loginButton = document.querySelector("#login-form input:last-child")
const CLASS_NAME = "hidden"
const USERNAME_KEY = "이름"

function onSubmit (event){
    event.preventDefault()
    const name = loginInput.value
    loginInput.classList.add(CLASS_NAME)
    loginButton.classList.add(CLASS_NAME)
    localStorage.setItem(USERNAME_KEY, name)
    helloText(name)
}

function helloText (name) {
    loginForm.classList.add("show")
    loginInput.classList.add(CLASS_NAME)
    loginButton.classList.add(CLASS_NAME)
    const h2 = document.createElement("h2")
    loginForm.appendChild(h2)
    h2.innerText = `Hello, ${name}.`
    
}
const userName = localStorage.getItem(USERNAME_KEY)

if (userName === null) {
    loginInput.classList.remove(CLASS_NAME)
    loginButton.classList.remove(CLASS_NAME)
    loginForm.addEventListener("submit", onSubmit)
} else {
    helloText(userName)
}
