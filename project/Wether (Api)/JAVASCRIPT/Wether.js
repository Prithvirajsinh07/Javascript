const input = document.querySelector(".textInput")
const wetherShow = document.querySelector(".weather")


async function checkWeather() {
    let city = ""
    city = input.value;
   
    const apikey = "71e635c715acf42d7d3a5ba43cab2eaf"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city} ` 
        const res = await fetch(apiUrl + `&appid=${apikey}`)
        console.log(res);
        
        let data = await res.json()
        console.log(data);
        console.log();
        
        if(res.ok === true){
            wetherShow.style.display = "block"
        }
        htmlData(data , city)
        
}



function htmlData (data , city) {
    wetherShow.innerHTML = ` 
            <img src="https://i.postimg.cc/ZnFndXXc/rain.png" class="weather-icon">
            <h1 class="temp">31°C</h1>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div class="col">
                    <img src="https://i.postimg.cc/X7jdggxJ/humidity.png">
                    <div>
                        <p class="humidity">${data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="https://i.postimg.cc/jjhQj3B7/wind.png">
                    <div>
                        <p class="wind">${data.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        `
}

