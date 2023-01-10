$(function () {

    LoadBikes();

})

// Load the bike data from the api using Jquery and ajax
function LoadBikes() {

    console.log('LoadBikes')

    const apiKey = '013c96fda1ac6937698c8402e42b0c31f2cc081e';
    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;

    $.getJSON(url, function (jsondata) {

        RenderStationData(jsondata)

    });

}

// Render the station data on the web page
function RenderStationData(stationsAsJson) {

    console.log(stationsAsJson);

    let htmlString = [];

    for (const station of stationsAsJson) {
        const button = `<button onclick='GetStationDetail(${station.number})')>Details</button>`
        htmlString.push(`<p>${station.number} : ${station.name} ${button}</p>`);
    }

    $('#messagePanel_1').html(htmlString.join(''));

}

// Get detail of a specific station via the api
function GetStationDetail(stationNumber) {

    const apiKey = '013c96fda1ac6937698c8402e42b0c31f2cc081e';
    const url = `https://api.jcdecaux.com/vls/v1/stations/${stationNumber}?contract=dublin&apiKey=${apiKey}`;

    $.getJSON(url, function (jsondata) {

        RenderStationDetail(jsondata)

    });
}

function RenderStationDetail(station) {
    console.log(station)

    let htmlString = [];

    htmlString.push("<table class='table'>")
  
    htmlString.push(`<tr><td>Number</td><td>${station.number}</td></tr>`);
    htmlString.push(`<tr><td>Name</td><td>${station.name}</td></tr>`);
    htmlString.push(`<tr><td>Available Stands</td><td>${station.available_bike_stands}</td></tr>`);
    htmlString.push(`<tr><td>Position</td><td>${station.position.lat} : ${station.position.lng}</td></tr>`);
  
    const weatherButton = `<button onclick='GetWeatherData(${station.position.lat},${station.position.lng})')>Details</button>`;
    htmlString.push(`<tr><td>Weather</td><td>${weatherButton}</td></tr>`);
  
    htmlString.push("</table>")

    $('#messagePanel_2').html(htmlString.join(''));




}

function GetWeatherData(lat, lng) {

    const apiKey = '6b8ff90c67fe6387d7ab6ef729f5be50';
   // const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    $.getJSON(url, function (jsondata) {

        RenderWeatherData(jsondata)

    });
}


function RenderWeatherData(weather) {

    let htmlString = [];

    htmlString.push("<table class='table'>")
  
    htmlString.push(`<tr><td>Temperature</td><td>${weather.main.temp}</td></tr>`);
    htmlString.push(`<tr><td>Pressure</td><td>${weather.main.pressure}</td></tr>`);
    htmlString.push(`<tr><td>Humidity</td><td>${weather.main.humidity}</td></tr>`);
   

    htmlString.push("</table>")

    $('#messagePanel_3').html(htmlString.join(''));



}