$(document).ready(function () {

    var calc = $('.calculator');
    var calcDisplay = calc.find('.calculator__display');
    var calcKeys = calc.find('.calculator__key');
    var calcBtn = calc.find('.calculator__button');
    var calcClear = calc.find('.calculator__clear');
    var calcEqual =  calc.find('.calculator__key--equal');

    //init values
    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);

    });

    // add ti input
    calcBtn.on('click', function () {
        calcDisplay.val(calcDisplay.val() + $(this).attr('value') )
    });

    // clear input
    calcClear.on('click', function () {
        calcDisplay.val(' ');
    });

    // show result
    calcEqual.on('click', function () {
        calcDisplay.val(eval (calcDisplay.val() ) )
    });


})