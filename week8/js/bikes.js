$(function () {

    LoadBikes();

})

// Load the bike data from the api using Jquery and ajax
function LoadBikes() {

    console.log('LoadBikes')

    const apiKey = '013c96fda1ac6937698c8402e42b0c31f2cc081e';
    const url = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;

    $.getJSON(url, function(jsondata) {

        RenderStationData(jsondata)

    });

}

// Render the station data on the web page
function RenderStationData(stationsAsJson) {

    console.log(stationsAsJson);
}

// Get detail of a specific station via the api
function GetStationDetail(stationNumber) {

    console.log('')
}

function RenderStationDetail(stationAsJson) {
    console.log('')
}