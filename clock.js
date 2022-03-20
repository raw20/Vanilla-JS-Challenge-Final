const h2 = document.querySelector("h2#clock")

function getClock() {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    h2.innerText = `${hour}:${minutes}:${seconds}`
}
setInterval(getClock, 1000)
