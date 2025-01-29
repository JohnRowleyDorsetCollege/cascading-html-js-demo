function init() {
    console.log('hello world')
    SetupCascadingList();
}

function SetupCascadingList() {
    console.log('SetupCascadingList')


    const selectMf = document.querySelector("#selectMf");
    const selectModel = document.querySelector("#selectModel");
    const selectVersion = document.querySelector("#selectVersion");


    for (const currentManufacturer in fleetSalesObject) {
        selectMf.options.add(new Option(currentManufacturer, currentManufacturer));
    }

    selectMf.onchange = function () {

        selectModel.length = 0;
        selectModel.options.add(new Option('Choose a model', '0'))
        for (const model in fleetSalesObject[this.value]) {

            selectModel.options.add(new Option(model, model));

        }

    }
    // alternative way of creating the function / event handler
    selectModel.onchange = () => {

        const selectedValueOfModel = selectModel.value

        selectVersion.length = 0;
      
        selectVersion.options.add(new Option('Choose a Version','0'))

       
        let versions = fleetSalesObject[selectMf.value][selectedValueOfModel];



        for (const version of versions) {
          
            selectVersion.options.add(new Option(version, version));

        }

    }


}