// GIVEN a weather dashboard with form inputs
const apiKey = "cd8fe02296124516441d7f6b8a3f4d06";
let textCity = document.getElementById("textCity");
let textState = document.getElementById("textState");
let textResult = document.getElementById("result");
    





// WHEN I search for a city




// THEN I am presented with current and future conditions for that city and that city is added to the search history
var cityName = $(this).data("city");
var stateName =$(this).data("state");

// API KEY
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
exclude={part}&appid={YOUR API KEY}



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

