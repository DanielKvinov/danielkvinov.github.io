(function($) {
    $(window).on('load', function() {
        $('.popup-token__list').mCustomScrollbar({
            scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
            setHeight: '100%',      // высота блока (переписывает CSS) 
            mouseWheel: {
                deltaFactor: 40    // кол-во пикселей на одну прокрутку колёсика мыши 
            }
        });
    });
})(jQuery);

// POPUPS
$(".token-select").click(function(){
    $(".popup-token").addClass("popup-active");
});
$(".trade-settings__button").click(function(){
    $(".popup-settings").addClass("popup-active");
});
$(".trade-transactions__button").click(function(){
    $(".popup-transactions").addClass("popup-active");
});
$(".popup-close").click(function(){
    $(".popup").removeClass("popup-active");
});
$(".popup-background").click(function(){
    $(".popup").removeClass("popup-active");
});


$("#trade-select__swap").click(function(){
    $(".trade-swap").addClass("flex-active");
    $(".trade-liquidity").removeClass("flex-active");
    $(".trade-liquidity-add").removeClass("flex-active");

    $("#trade-select__swap").addClass("trade-select__active");
    $("#trade-select__liquidity").removeClass("trade-select__active");
});


$("#trade-select__liquidity").click(function(){
    $(".trade-liquidity").addClass("flex-active");
    $(".trade-swap").removeClass("flex-active");
    $(".trade-liquidity-add").removeClass("flex-active");

    $("#trade-select__liquidity").addClass("trade-select__active");
    $("#trade-select__swap").removeClass("trade-select__active");
});


$("#add-liquidity__button").click(function(){
    $(".trade-liquidity-add").addClass("flex-active");
    $(".trade-swap").removeClass("flex-active");
    $(".trade-liquidity").removeClass("flex-active");
});

$(".close-button").click(function(){
    $(".popup").removeClass("popup-active");
});


// POPUPS END