
document.addEventListener("DOMContentLoaded", (e)=>{

    RenderCarData();

})



function RenderCarData() {


    let htmlContent = [];

    htmlContent.push(`<table class="table">`)


    for(const car of fleet) {

        htmlContent.push(`<tr>`)
        htmlContent.push(`<td>${car.mf}</td>`)
        htmlContent.push(`<td>${car.model}</td>`)
        htmlContent.push(`<td>${car.colour}</td>`)
        htmlContent.push(`<td>${car.engine}</td>`)
        htmlContent.push(`<td>${car.type}</td>`)
       
        htmlContent.push(`</tr>`)

    }

    htmlContent.push(`</table>`)

    const container = document.getElementById("tableContainer");

    container.innerHTML =htmlContent.join(" ")

    



}