const API_KEY ="f2d497aedb81a2ce74c8cb46047886af"

function LoadSuccess(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}7&appid=${API_KEY}&units=metric`

    fetch(url).then(resonse => resonse.json()).then((data) => {
        const img = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-child(2)")
        const ciry = document.querySelector("#weather span:last-child")
        ciry.innerText = data.name
        const bgimg = document.createElement("img")
        bgimg.classList.add("weather-img")
        bgimg.src = `img/${data.weather[0].main}.png`
        img.appendChild(bgimg)
        weather.innerText = ` / ${(data.main.temp).toFixed()} ℃`
    })
}

function LoadError () {
    alert("위치를 불러오는데 실패하였습니다.")
}
navigator.geolocation.getCurrentPosition(LoadSuccess,LoadError)