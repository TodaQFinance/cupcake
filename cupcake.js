
// Rendering concerns
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

var flavourColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
var icingColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
var sprinklesColours = {"chocolate": "#FF0000"};
var candleColours = {"blue":"#0000FF"};

var renderCupcake = function(cupcake) {
    var el = $("#cupcake").clone();
    if (cupcake.flavour && cupcake.flavour in flavourColours) {
	setFilling(el, flavourColours[cupcake.flavour]);
    }
    if (cupcake.icing && cupcake.icing in icingColours) {
	setIcing(el, icingColours[cupcake.icing]);
    }
    if (cupcake.sprinkles && cupcake.sprinkles.quantity) {
	numSprinkles(el, cupcake.sprinkles.quantity);
    }
    if (cupcake.sprinkles && cupcake.sprinkles.type in sprinklesColours) {
	setSprinkles = setSprinkles(el, sprinklesColours[cupcake.sprinkles.type]);
    }
    if (cupcake.candle && cupcake.candle.colour in candleColours) {
	setCandle(el, candleColours[cupcake.candle.colour]);
    }
    el.css({'width':300}); // for now
    el.show();
    return el;
};


// EXAMPLE:
$(function() {
    $("body").append(renderCupcake({}));
});


/*
 * Returns the specification for a candle.
 * colour : a string describing the colour of the cupcake
 * isIgnited : a boolean specifying whether the candle has been lit or not
 */ 
function createCandle(colour, isIgnited) {
	return { 
		"colour" : colour,
		"ignited" : isIgnited
	}
}

/*
 * Returns the specification for a layer of sprinkles.
 * type : a string describing the type of sprinkles in this layer
 * quantity : a number specifying the number of sprinkles (it's all about precision)
 */ 
function createSprinkleLayer(type, quantity) {
	return { 
		"type" : type,
		"quantity" : quantity
	}
}
