function RenderCitySelectList(listOfCities) {

    const selectedHtmlObject = document.querySelector("#selectListOfCities");

    selectedHtmlObject.length = 0; // empties the list

    listOfCities.forEach((city, index) => {

        let option = document.createElement("option");
        option.value = index;
        option.text = city;

        selectedHtmlObject.add(option, null); // the null value can be the index where you want to add the item

    })

}

function OnCityChange(e) {

    const currentIndex = e.selectedIndex;
    const currentValue = e.value;
    const currentText = e.options[currentIndex].text;

    console.log(`City Select has changed index to:  ${currentIndex}`)
    console.log(`City Select has changed value to: ${currentValue}`)
    console.log(`City Select has changed text to  ${currentText}`)


}