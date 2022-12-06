$(function () {

    setup();

});

function setup() {

    applyStriped();


    $('#btnStyle').on('click', function () {

        $('p:last').css('font-style', 'italic');
    })

}

function applyStriped() {

    // $(target).action(arguments)

    $('p.second').addClass('striped');

}