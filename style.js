// GIVEN a weather dashboard with form inputs
const apiKey = "cd8fe02296124516441d7f6b8a3f4d06";
let textCity = document.getElementById("textCity");
let textState = document.getElementById("textState");
let textResult = document.getElementById("result");
    

// WHEN I search for a city

// THEN I am presented with current and future conditions for that city and that city is added to the search history
var cityName = $(this).data("city");
var stateName =$(this).data("state");


//src url for weather icon http://openweathermap.org/img/wn/01d@2x.png
// API KEY
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}
$("#searchForm").on("submit", function(event){
    event.preventDefault();
   var city = $(".search-box").val().trim();
   var generalURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   var date = new Date();
    //do the general api call to get the lat and lon
    $.ajax({
        method: "GET",
        url: generalURL
    }).then(function(data){
        console.log(data)
       
        var oneCallURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`
        $.ajax({
            method: "GET",
            url:oneCallURL
        }).then(function(result){ 

        //appending data for current weather
        $(".Location").append(`<div class="city">${data.name}</div>
        <div class="date">${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
        $(".current").append(`<div class="temperature">Temp - ${((data.main.temp-273.15)*1.8+32).toFixed(1)} &#8457</div>
        <div class="Weather">Weather - ${data.weather[0].main}</div>
        <div class="Hi-Low">Temp Range - ${((data.main.temp_min-273.15)*1.8+32).toFixed(1)} - ${((data.main.temp_max-273.15)*1.8+32).toFixed(1)} </div>
        <div class="UVI">UV Index - ${result.current.uvi}</div>`)

        // appending images based on change of weather temperatures
        if (fTemp >= 100) {
            $(".container").css("background-image", "url('https://pblog.hertz.com/wp-content/uploads/2017/04/img-lrg-beaches.jpg')");
        } else if (fTemp <= 70) {
            $(".container").css("background-image", "url('https://wwmt.com/resources/assets/common/weather-images/News3/85.jpg')");
        } else if (fTemp <= 50) {
            $(".container").css("background-image", "url('https://wallpapercave.com/wp/wp4623559.jpg')");
        }

        $()
        
        })
    })
   


})


// WHEN I view current weather conditions for that city





// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index





// WHEN I view the UV index




// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe



// WHEN I view future weather conditions for that city


// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history



// THEN I am again presented with current and future conditions for that city




// WHEN I open the weather dashboard


// THEN I am presented with the last searched city forecast

