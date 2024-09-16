document.addEventListener("DOMContentLoaded", () => {
    let pic = document.getElementById("web");
    let temp = document.getElementById("temp-value");
    let des = document.getElementById("weather-des");
    let city = document.getElementById("weather-city");
    let wea_humidity = document.getElementById("hum-text");
    let wea_speed = document.getElementById("speed-text");


    const checkbox = document.getElementById("checkbox");
    let wed = document.getElementById("weather-box-box");
    checkbox.addEventListener("change", () => {
        wed.classList.toggle("dark");
    });
    
    const apikey = 'ee4f86fd1905da558bb429658680f912';

    function dis() {
        let weatherdata = document.getElementById("city");
        let loc = weatherdata.value;
        console.log(loc);
        if( loc == ""){
            alert("enter")
        }
        else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data);
            const { name } = data;
            const { feels_like } = data.main;
            const { description } = data.weather[0];
            const { humidity } = data.main;
            const { speed } = data.wind;

            temp.innerText = Math.floor(feels_like - 273); // Convert Kelvin to Celsius
            des.innerText = description;
            city.innerText = name;
            wea_humidity.innerText = humidity;
            wea_speed.innerText = speed;
            if(description == "smoke" || description == "overcast clouds"){
                pic.src = "Gif/clouds.gif" 
            }
            if(description == "scattered clouds"||description == "broken clouds"||description == "few clouds"||description == "clear sky"){
                pic.src = "Gif/cloudy.gif" 
            }
            if(description == "haze"){
                pic.src = "Gif/wind.gif"
            }
            if(description == "mist"){
                pic.src = "Gif/drop.gif"
            }
            if(description == "light rain"){
                pic.src = "Gif/rain.gif"
            }



        })
        .catch( () => {
            alert("Error fetching weather data Enter valid location ");
        });
        weatherdata.value = ""
    }   
    }
    // Assuming there's a button to trigger the `dis` function
    document.getElementById("fetch-weather-btn").addEventListener("click", dis);
});