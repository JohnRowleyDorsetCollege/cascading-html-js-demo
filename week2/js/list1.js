console.log("List 1 javascript file is loaded")

let fruit1= "apple";
let fruit2 = "pear";
let fruit3 = "banana";

//Instead we use a list or ARRAY - denoted with [ ] (square) brackets

let fruit = [];

fruit[0]= "apple";
fruit[1]= "pear";
fruit[2]= "banana";

// length gives you number of items in the list or array
console.log(`There are ${fruit.length} pieces of fruit in the basket`);
console.log(`The first piece of fruit is ${fruit[0]}`);
console.log(`The second piece of fruit is ${fruit[1]}`);
console.log(`The third piece of fruit is ${fruit[2]}`);


let firstNames= ["Bruce","Peter","Clarke"];
console.log(`There are ${firstNames.length} firstNames`);
console.log(`The first firstName is ${firstNames[0]}`);
console.log(`The second firstName is ${firstNames[1]}`);
console.log(`The third firstName is ${firstNames[2]}`);

firstNames.push("David")
console.log(`The last firstName is ${firstNames[ firstNames.length-1 ]}`);

console.log(`There are ${firstNames.length} firstNames`);


for(let counter = 0; counter < firstNames.length; counter++) {

    console.log(`The firstName at position ${counter} is ${firstNames[counter]}`);
}

let lastPersonRemoved = firstNames.pop();
    console.log(`The lastPersonRemoved is ${lastPersonRemoved}`);
lastPersonRemoved = firstNames.pop();
    console.log(`The lastPersonRemoved is ${lastPersonRemoved}`);
lastPersonRemoved = firstNames.pop();
    console.log(`The lastPersonRemoved is ${lastPersonRemoved}`);
console.log(`There are ${firstNames.length} firstNames`);



