$(function () {

    setup();

});

function setup() {

    applyStriped();


    $('#btnStyle').on('click', function () {

        $('p:last').css('font-style', 'italic');
    })

    $('#btnHideFirst').on('click', function () {

        $('p:first').hide();
    })

    $('#btnShowFirst').on('click', function () {

        $('p:first').show();
    })

    $('#btnToggle').on('click', toggle);

}

function applyStriped() {

    // $(target).action(arguments)

    $('p.second').addClass('striped');

}

function toggle() {

    $('body div p').toggleClass('striped')

}