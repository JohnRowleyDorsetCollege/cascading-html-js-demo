function canDrink(person) {

    if (person?.age != null) {
        if (person.age < 18) {
            console.log('Nope')
        } else if (person.age < 21) {
            console.log('not in us')
        } else {
            console.log('Yes')
        }

    }


}


function canDrinkBetter(person) {

    if (person?.age == null) return; // guard clause - stops the function going further

    const result = canDrinkResponse(person.age)

    console.log(result)


}

function canDrinkResponse(age) {
    if (age < 18) return 'Nope';

    if (age < 21) return 'Not in the US';

    return 'Yes';

}

const p = {
    age: 22
}
canDrinkBetter();
canDrinkBetter(p)