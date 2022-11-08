// "Sleepy"
// "Dopey"
// "Sneezy"
// "Grumpy"
// "Happy"
// "Bashful"
// "Doc"


// Create a FUNCTION which outputs the LIST of dwarves
// and shows how many dwarves there are
// it should set up some dwarves at the beginning
// then ADD more
// REMOVE some, put them back and show the count
// call it DisneyDwarves()

function initDwarves() {

    let dwarves = [
        "Sleepy",
        "Dopey",
        "Sneezy"
    ]

    return dwarves;
}

function listDwarves(dwarves) {

    for(let counter = 0; counter < dwarves.length; counter++) {

        console.log(`The dwarf at position ${counter} is ${dwarves[counter]}`)
    }

}

function DisneyDwarves() {

    console.log("DisneyDwarves() function is called");

    let dwarves = initDwarves();

    listDwarves(dwarves)

    dwarves.push("Grumpy");
    dwarves.push("Happy");
    dwarves.push("Bashful");
    dwarves.push("Doc");

    listDwarves(dwarves)

    let poppedDwarf = dwarves.pop();

    console.log(`The poppedDwarf  is ${poppedDwarf}`)

    listDwarves(dwarves)


}

DisneyDwarves()

//Imagine you have full list of dwarves
//And you have an a bus for EACH dwarf [GetBus(dwarf)]
//and you have to call the bus for each dwarf to get them home
// until there are no dwarves left to go home
// show how many dwarves are left as each one leaves

// Or to put it another way: while there dwarves left top pop off home, get them a bus
