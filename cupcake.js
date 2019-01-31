var renderCupcakeProperties = function(cupcake) {

};

$(function() {

});

var setIcing = function(cupcake, color) {
    $("#Icing linearGradient stop[offset=0]", cupcake).css({"stop-color":color});
};
var setFilling = function(cupcake, color) {
    $("#Base > linearGradient stop[offset=0]", cupcake).css({"stop-color":color});
    $("#Base > linearGradient stop[offset=1]", cupcake).css({"stop-color":color});
    // also stop=0.3464, but lighter
};
var setPaper = function(cupcake, color) {
    $("#Base g linearGradient stop[offset=0]", cupcake).css({"stop-color":color});
    $("#Base g linearGradient stop[offset=1]", cupcake).css({"stop-color":color});
};
var setCandle = function(cupcake, color) {
    $("#Candle > linearGradient stop[offset=0]", cupcake).css({"stop-color":color});
    //also have stops at 1, 0.1056 (light), 0.367, 0.8522
    $("#Candle > linearGradient stop[offset='0.367']", cupcake).css({"stop-color":color});
    $("#Candle > linearGradient stop[offset='0.8522']", cupcake).css({"stop-color":color});
};
var toggleSprinkles = function(cupcake) {
    $("#Sprinkles", cupcake).toggle();
};

var numSprinkles = function(cupcake, num) {
    $("#Sprinkles", cupcake).children().hide();
    $("#Sprinkles :nth-child(1)", cupcake).show();
    for(var i = 0; i < num; i++) {
	$("#Sprinkles :nth-child(" + i + 4 + ")", cupcake).show();
    }
};

var setSprinkles = function(cupcake, color) {
    $(".st50, .st51, .st52, .s53, .st54", cupcake).css({"fill":color});
};
