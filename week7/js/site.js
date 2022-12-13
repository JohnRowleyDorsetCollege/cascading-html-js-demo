$(function () {

    console.log('jquery goodness is loaded');

    setup();
})

function setup() {

    SetupNumericInputs();
    WriteWelcomeMessage();
    SetupPizzaOptions();
    WriteSumCalculation();
}

function WriteSumCalculation() {

    $('#btnAdd').on('click', function () {

        const number1 = isNaN(parseInt($('#tbNum1').val())) ? 0 : parseInt($('#tbNum1').val());
        const number2 = isNaN(parseInt($('#tbNum2').val())) ? 0 : parseInt($('#tbNum2').val());
        const total = number1 + number2;
        WriteToMessagePanel(`The total is ${total}`);

    })

}

function SetupPizzaOptions() {

    $('#selectMeatOptions').on('click', function () {

        // Only select checkboxes of class meatOption and set their checked status to value of the box that was clicked
        $('input:checkbox.meatOption').not(this).prop('checked', this.checked);

        const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)
    })

    $('#selectVegOptions').on('click', function () {

        // Only select checkboxes of class meatOption and set their checked status to value of the box that was clicked
        $('input:checkbox').not('.meatOption').not('#selectMeatOptions').not(this).prop('checked', this.checked);

        const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;

        WriteToMessagePanel(`Total options selected: ${numberOfCheckedItems}`)
    })

}

function SetupNumericInputs() {

    $('#tbNum1, #tbNum2').on('focus', function () {

        $(this).val('');

    })

    $('.tb').on('blur', function () {

        //  $(this).val(0);

        isNaN($(this).val()) ? $(this).val(0) : $(this).val();

    })

}

function WriteWelcomeMessage() {

    $('#btnGreeting').on('click', function () {

        WriteToMessagePanel('hello world');
    })


}

function WriteToMessagePanel(msg) {

    $('#messagePanel').html(msg)
}