function init() { console.log(`init()`) }
function clearField(e) { 
    
    console.log(`clearField()`)

    e.value="";

}

function validate(e) { 
    
    console.log(`validate()`)

    if (isNaN(e.value)) {
        e.value = 0;
    }

    add();

}
function add() {

    console.log(`add()`)

    const num1 = isNaN(document.getElementById("tbNum1").value) ? 0 : document.getElementById("tbNum1").value

    const num2 = isNaN(document.getElementById("tbNum2").value) ? 0 : document.getElementById("tbNum2").value

    const num3 = isNaN(document.getElementById("tbNum3").value) ? 0 : document.getElementById("tbNum3").value

    const total = parseInt(num1) + parseInt(num2) + parseInt(num3);

    document.getElementById("messagePanel").innerHTML = total;


}