let movieListing = [];

//Load everything after Jquery as loaded
$(function () {

    init();
})

//Do you setups here 
function init() {

    SetupMovieLoader();

}

// Load the movie data when button is clicked - note spelling of $.getJSON
function SetupMovieLoader() {


    $('#btnLoadMovies').on('click', function () {

        const url = './data/movies.json';
        $.getJSON(url, function (jsondata) {


            RenderMovieDataAsTable(jsondata)

        })


    })
}

//REnder the movie data (assumes no errors in format) as a table
function RenderMovieDataAsTable(jsondata) {

    movieListing = jsondata;

    htmlString = [];

    for (const movie of movieListing) {
        const { title, year, director, id, cast, ...rest } = movie;

        const btnDetails = `<button class='btn btn-success'>Details</button>`
        
        htmlString.push(`<tr>`)
        htmlString.push(`<td>${title}</td><td>${year}</td><td>${btnDetails}</td>`)
        htmlString.push(`</tr>`)

    }

    $('tbody#movieBody').append(htmlString.join(''));


}