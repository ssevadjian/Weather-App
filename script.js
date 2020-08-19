$(document).ready(function() {
    const $currentCity = $(".currentCity");
    const $date = $(".date");
    const $icon = $(".icon");
    const $temperature = $(".temperature");
    const $humidity = $(".humidity");
    const $date1 = $(".date1");
    const $icon1 = $(".icon1");
    const $temperature1 = $(".temperature1");
    const $humidity1 = $(".humidity1");
    const $date2 = $(".date2");
    const $icon2 = $(".icon2");
    const $temperature2 = $(".temperature2");
    const $humidity2 = $(".humidity2");
    const $date3 = $(".date3");
    const $icon3 = $(".icon3");
    const $temperature3 = $(".temperature3");
    const $humidity3 = $(".humidity3");
    const $date4 = $(".date4");
    const $icon4 = $(".icon4");
    const $temperature4 = $(".temperature4");
    const $humidity4 = $(".humidity4");

    $("#searchButton").click(function() {
        let cityName = $("#city-name").val();
        if (cityName != ''){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=aba0dc3fe422be621a8162117dd5640b", 
                method: "GET",
            }).then(function(response) {
                console.log(response);
                $currentCity.text(response.city.name);
                $date.text(response.list[0].dt_txt);
                $temperature.text(response.list[0].main.temp);
                $humidity.text(response.list[0].main.humidity);
                $date1.text(response.list[8].dt_txt);
                $temperature1.text(response.list[8].main.temp);
                $humidity1.text(response.list[8].main.humidity);
                $date2.text(response.list[16].dt_txt);
                $temperature2.text(response.list[16].main.temp);
                $humidity2.text(response.list[16].main.humidity);
                $date3.text(response.list[24].dt_txt);
                $temperature3.text(response.list[24].main.temp);
                $humidity3.text(response.list[24].main.humidity);
                $date4.text(response.list[32].dt_txt);
                $temperature4.text(response.list[32].main.temp);
                $humidity4.text(response.list[32].main.humidity);
                $date5.text(response.list[40].dt_txt);
                $temperature5.text(response.list[40].main.temp);
                $humidity5.text(response.list[40].main.humidity);
            });
        } else {
            $("#error").html("Field cannot be empty");
        }
    });
});