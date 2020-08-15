// GIVEN a weather dashboard with form inputs
const apiKey = "24c95342b3798b68ce455f1f35100d22";
const apiKey2 ="9152f63ce6071ae43103697c66505eec";
let textCity = document.getElementById("textCity");
let textState = document.getElementById("textState");
let textResult = document.getElementById("result");
    

// WHEN I search for a city

// THEN I am presented with current and future conditions for that city and that city is added to the search history
var cityName = $(this).data("city");
var stateName =$(this).data("state");
var cities = JSON.parse(localStorage.getItem("history")) || [];

//src url for weather icon http://openweathermap.org/img/wn/01d@2x.png
// API KEY
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}
function appendBtns(){
    $("#cityHistory").empty();
    cities.forEach(function(city){
        $("#cityHistory").append(`<button class="btn btn-primary">${city}</button>`)
    })
};
appendBtns()

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
        //check to see if cities array includes city already, if not , push to it
        if(!cities.includes(city)){
            cities.push(city);
            localStorage.setItem('history', JSON.stringify(cities));
        }
        appendBtns()
       
        var oneCallURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`
        $.ajax({
            method: "GET",
            url:oneCallURL
        }).then(function(result){ 
            console.log(result)
        //appending data for current weather

        $(".Location").html(`<div class="city">${data.name}</div>
        <div class="date">${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);

        $(".current").html(`<div class="temperature">Temp - ${((data.main.temp-273.15)*1.8+32).toFixed(1)} &#8457</div>
        <div class="Weather">Weather - ${data.weather[0].main}</div>
        <div class="Hi-Low">Temp Range - ${((data.main.temp_min-273.15)*1.8+32).toFixed(1)} - ${((data.main.temp_max-273.15)*1.8+32).toFixed(1)} </div>
        <div class="UVI">UV Index - ${result.current.uvi}</div>`)
        $("#forecast").empty()
        //append the forecast data on page
        for (let i = 0; i < 5; i++) {
            let element = result.daily[i];
            $("#forecast").append(`<div class="card col-2" >
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <div class="temperature">Temp - ${((element.temp.day-273.15)*1.8+32).toFixed(1)} &#8457</div>
                <div class="Weather">Weather - ${element.weather[0].main}</div>
            <div class="Hi-Low">Temp Range - ${((element.temp.min-273.15)*1.8+32).toFixed(1)} - ${((element.temp.max-273.15)*1.8+32).toFixed(1)} </div>
            <div class="UVI">UV Index - ${element.uvi}</div>
            </div>
          </div>`)
            
        }
        
    })
})
//         conditions based on change of temperature
//         if (fTemp >= 100) {
//             $(".container").css("background-image", "url('https://pblog.hertz.com/wp-content/uploads/2017/04/img-lrg-beaches.jpg')");
//         } else if (fTemp <= 70) {
//             $(".container").css("background-image", "url('https://wwmt.com/resources/assets/common/weather-images/News3/85.jpg')");
//         } else if (fTemp <= 50) {
//             $(".container").css("background-image", "url('https://wallpapercave.com/wp/wp4623559.jpg')");
//         }
  
// //    Second API used to pull 7 day forecast
//     $("#searchForm").on("submit", function(event){
//         event.preventDefault();
//        var city = $(".search-box").val().trim();
//        var secondURL = `http://api.weatherstack.com/${apiKey2}`;
//        var date = new Date();
})  

