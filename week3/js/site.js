// console.log('site is loading')

let carM1 = "Nissan";
let carModel1 = "Navara";
let carEngine1 = '1.2';
let carColour1 = 'Grey';
let carType1 = 'Pickup';


let carMF2 = "Ford";
let carModel2 = "Fiesta";
let carEngine2 = '1.1';
let carColour2 = 'Pink';
let carType2 = 'Sedan';

//console.log(`The car is called ${carM1} and the model is ${carModel2}`)

let car1 = ["Nissan","Navara",'1.2','Grey','Pickup']

//Javascript object made up of key-value pairs
const car2 = {"mf" :"Nissan", "model": "Navara", "Engine": 1.2, "colour": "Grey", "type": "pickup"};

console.log(`The car is called ${car2.mf} and the model is ${car2.model}`)

let fleet = [
    {"mf" :"Nissan", "model": "Navara", "Engine": 1.2, "colour": "Grey", "type": "pickup"},
    {"mf" :"Nissan", "model": "Navara", "Engine": 1.3, "colour": "Black", "type": "pickup"},
    {"mf" :"Nissan", "model": "Navara", "Engine": 1.4, "colour": "Blue", "type": "pickup"}

]

console.log(`The last car in the fleet is called ${fleet[2].mf} and the colour is ${fleet[2].colour}`)

function ShowMessage(msg) {
    
    console.log(msg);

}

// Print out a list of the cars in the fleet along with 2 or 3 properties (colour, type etc.)

//Basic loop
// for( let i =0; i < 10; i++) {

//     console.log(`The value of i is ${i}`);
// }

// Solution 1
for( let i =0; i < fleet.length; i++) {
    console.log(`The current car (${i}) is called ${fleet[i].mf} and the colour is ${fleet[i].colour}`)
}

// Solution 2 - setting limiting condition outside the loop to improve performance
const sizeOfFleet = fleet.length;
for( let i =0; i < sizeOfFleet; i++) {
    console.log(`The current car (${i}) is called ${fleet[i].mf} and the colour is ${fleet[i].colour}`)
}

for( let i =0; i < sizeOfFleet; i++) {
    const currentCar = fleet[i];
    const message = `The current car (${i}) is called ${currentCar.mf} and the engine is ${currentCar.Engine}`
    ShowMessage(message)
}
// for ..... of ....loop
for(const currentCar of fleet) {

    const message = `The (forof) current car is called ${currentCar.mf} and the engine is ${currentCar.Engine}`
    ShowMessage(message)
}

// OBject destructuring - the probelm  we are tyring to solve - assinging properties from the object
for( let i =0; i < sizeOfFleet; i++) {
    let mf = fleet[i].mf;
    let colour = fleet[i].colour;
    let model = fleet[i].model;
    console.log(`The current car (${i}) is called ${mf} and the colour is ${model}`)
}

for( let i =0; i < sizeOfFleet; i++) {
    ({mf, model, Engine} = fleet[i]);
   
    console.log(`The (obj) current car (${i}) is called ${mf} and the colour is ${model}`)
}

for(const currentCar of fleet) {

    ({mf, model, Engine} = currentCar);
    const message = `The (forof/currentcar) current car is called ${mf} and the engine is ${Engine}`
    ShowMessage(message)
}




