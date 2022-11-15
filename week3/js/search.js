let dwarves = ["Sleepy", "Dopey", "Sneezy"] 


function DoesDwarfExistInList(listOfDwarves, dwarfToSearchFor) {
    let found = false;
    console.log(`Searching....for ${dwarfToSearchFor}`)

    for(i = 0; i < listOfDwarves.length; i++) {

        const currentDwarf = listOfDwarves[i];

        if (currentDwarf.toLowerCase() == dwarfToSearchFor.toLowerCase()) {
            found=true;
            break; // stop processing the loop and come out of it 

        } // end if


    } // end for

    return found;
}

let foundDwarf = false;
foundDwarf = DoesDwarfExistInList(dwarves,"Sneezy");
console.log(`Sneezy was found ? ${foundDwarf}`)

foundDwarf = DoesDwarfExistInList(dwarves,"Dopey");
console.log(`Dopey was found ? ${foundDwarf}`)

foundDwarf = DoesDwarfExistInList(dwarves,"Happy");
console.log(`Happy was found ? ${foundDwarf}`)

//Write a function that will search for  a car in the fleet by manufacturer
//shiould look like this


function findCarByMf(list, item) {
    let found = false;
    console.log(`Searching....for ${item}`)

    for(i = 0; i < list.length; i++) {

        const currentItem = list[i];

        if (currentItem.mf.toLowerCase() == item.toLowerCase()) {
            found=true;
            break; // stop processing the loop and come out of it 

        } // end if


    } // end for

    return found;
}


let foundManufacturer = findCarByMf(fleet, "FoRd")
console.log(`Car search is ${foundManufacturer}`)

foundManufacturer = findCarByMf(fleet, "Kia")
console.log(`Car search for Kia is ${foundManufacturer}`)

function GetAllCarsByMf(fleet, searchMf ) {

    //let carsByManufacturer = filter the list to show only the matching items
    let carsByManufacturerList = fleet.filter(currentCar => currentCar.mf.toLowerCase() == searchMf.toLowerCase())

    return carsByManufacturerList;
}

let findCars = GetAllCarsByMf(fleet, "Ford");

for(const currentCar of findCars) {

        const message = `GetAllCarsByMf()->Found ${currentCar.mf} : ${currentCar.model} : ${currentCar.engine} : ${currentCar.colour} `;
        ShowMessage(message);

}