const apikey = "6c5c7101fde15f93b8fd748b939e748c";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const btnclick = document.querySelector(".click");
const place = document.querySelector(".place");
const weathericon = document.querySelector(".weather-icon"); 

async function checkWeather(place){
    const response = await fetch(url+`&q=${place}&appid=${apikey}`)
    var data = await response.json();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".h-humid").innerHTML = data.main.humidity+"% <br> Humidity";
    document.querySelector(".h-wind").innerHTML = data.wind.speed+"Km/hr <br> Speedf";
    document.querySelector(".place").value="";

    if(data.weather[0].main == "clouds"){
        weathericon.src ="clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src ="clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src ="rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src ="drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src ="mist.png";
    }
}

btnclick.addEventListener("click", ()=>{
    checkWeather(place.value);
})