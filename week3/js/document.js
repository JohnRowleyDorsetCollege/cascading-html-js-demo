function init() {
    console.log(`page has loaded`);

    WriteParagraph();
    WriteDate();
    WriteFleet();

}

function WriteParagraph() {
    let element = document.getElementById("ExampleParagraph");

    element.innerHTML = "Hello World from Javascript";

}


function WriteDate() {
    let element = document.getElementById("CurrentDate");

    let currentDate = Date();
    const longDate = currentDate.toString();
   
    let message = `${longDate}`;

    element.innerHTML = message;

}

function WriteFleet() {
    let element = document.getElementById("fleet");

    let htmlString = "";
    for (const currentCar of fleet) {

        let message = `<p>The (forof) current car is called ${currentCar.mf} and the engine is ${currentCar.engine}</p>`
        // concatenatination
        htmlString += message;
       
    }
    element.innerHTML = htmlString;


}