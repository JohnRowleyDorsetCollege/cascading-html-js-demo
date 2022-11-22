
let listOfCities = getListOfCities()

function getListOfCities() {
    return ['Dublin', 'Cork', 'Limerick', 'Killarney']
}

function init() {

    let htmlFragment = renderCitiesAsHTML(listOfCities);

    // console.log(htmlFragment);
    RenderHtmlContent(htmlFragment, "listGroup")
    RenderCitiesAsParagraphs(listOfCities)
    
    htmlFragment = renderCitiesAsHTMLWithIndex(listOfCities)
    RenderHtmlContent(htmlFragment, "listGroup2")

    RenderCitySelectList(listOfCities);
}

function RenderCitiesAsParagraphs(listOfCities) {
   
    document.getElementById("p1").innerHTML = listOfCities[0];
    document.getElementById("p2").innerHTML = listOfCities[2];
    document.getElementById("p3").innerHTML = listOfCities[2];
    document.getElementById("p4").innerHTML = listOfCities[3];
}

function RenderHtmlContent(htmlFragment, elementId) {
    const selectedHtmlObject = document.getElementById(elementId);

    selectedHtmlObject.innerHTML = htmlFragment;
}


function renderCitiesAsHTML(listOfCities) {
    // console.log(listOfCities.join('-'))

    let htmlContent = [];

    htmlContent.push('<ul class="list-group">')

    for (const city of listOfCities) {
        htmlContent.push(`<li>${city}</li>`)
    }

    htmlContent.push('</ul>')

    return htmlContent.join('');
}

// This version is useful when you weant to know the index position of the item as you iterate through the array
function renderCitiesAsHTMLWithIndex(listOfCities) {
    // console.log(listOfCities.join('-'))

    let htmlContent = [];

    htmlContent.push('<ul class="list-group">')

    listOfCities.forEach((city, index) => {
 
        htmlContent.push(`<li>${city}:${index}</li>`)
    })

    htmlContent.push('</ul>')

    return htmlContent.join('');
}