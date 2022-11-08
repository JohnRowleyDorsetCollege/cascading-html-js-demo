console.log('site.js file has been loaded');

let step = 1;
console.log(`I am going up step ${step}`); step = step + 1;
console.log(`I am going up step ${step}`); step = step + 1;
console.log(`I am going up step ${step}`); step = step + 1;
console.log(`I am going up step ${step}`); step++;
console.log(`I am going up step ${step}`); step++;
console.log(`I am going up step ${step}`); step++;
console.log(`I am going up step ${step}`); step++;


// Initialising Statement
let currentStep = 1;
//Terminating Condition
let topStep = 315;

//  Conditional test (currentStep < topStep)

//Series of statements to execute 
//incrementor

while (currentStep < topStep) {

    console.log(`I am going up step ${currentStep}`);

    currentStep++; // very important, if you miss this you end up in infinite loop


}

console.log(`I am at the top`);


// Initialising Statement
// Terminating Condition
// incrementor
//Series of statements to execute 
let topStep2 = 315;
for (let currentStep = 1; currentStep < topStep2; currentStep++) {

    console.log(`For loop: I am going up step ${currentStep}`);

} // for


/*
Can you write function which takes a number of steps as a parameter and calls the appropriate number of statements
so I can call the function with 10, 20,30 etc. steps and it will output the correct number
*/



function GoUpSteps(totalSteps) {

    console.log(`============================`);

    let midpoint =  parseInt(totalSteps/ 2)
    for (let currentStep = 1; currentStep < totalSteps; currentStep++) {

        if (currentStep == midpoint) {
            console.log(`At the midpoint ${midpoint}`);
        }

        let stepType = "";

        if (currentStep % 2  == 1)  {
            stepType ='Odd'
        } else {
            stepType ='Even'
        }

        console.log(`Function For loop: I am going up step ${currentStep} and it is ${stepType}`);

    } // for

}



GoUpSteps(5);
GoUpSteps(15);
GoUpSteps(25);
GoUpSteps(35);