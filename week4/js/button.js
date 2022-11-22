function btnAddCity() {

    const cityToAddObject = document.querySelector('#tbAddCity');
    const cityToAddText = cityToAddObject.value;
    listOfCities.push(cityToAddText);

    cityToAddObject.value="";//clear out the text box, reset

    RenderCitySelectList(listOfCities);

}