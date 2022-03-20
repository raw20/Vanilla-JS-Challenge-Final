const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
const randImg = images[Math.floor(Math.random()*images.length)]

document.body.style.backgroundImage = `url(img/${randImg})`