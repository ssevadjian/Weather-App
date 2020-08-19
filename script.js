$(document).ready(functio() {// This is our API key. Add your own API key between the ""
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  // Create CODE HERE to Log the queryURL
  console.log(queryURL);
  // Create CODE HERE to log the resulting object
  console.log(response);
  // Create CODE HERE to calculate the temperature (converted from Kelvin)
  const K = response.main.temp;
  console.log(K);
  //const K = temp.temp;
  const F = (K - 273.15) * 1.80 + 32;
  console.log(F);
  // Create CODE HERE to transfer content to HTML
  $('.city').text("City: " + response.name);
  $('.wind').text("Wind: " + response.wind.deg);
  $('.humidity').text("Humidity: " + response.main.humidity);
  $('.temp').text("Temperature (F): " + F);
  
  // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
  // Create CODE HERE to dump the temperature content into HTML

})
});