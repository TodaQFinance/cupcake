// Cupcake descriptors and constructor
/*
 * Returns the specification for a candle.
 * colour : a string describing the colour of the cupcake
 * isIgnited : a boolean specifying whether the candle has been lit or not
 */
function createCandle(colour, isIgnited) {
  return { colour, isIgnited };
}

/*
 * Returns the specification for a layer of sprinkles.
 * type : a string describing the type of sprinkles in this layer
 * quantity : a number specifying the number of sprinkles (it's all about precision)
 */
function createSprinkleLayer(type, quantity) {
  return { type, quantity };
}

module.exports = {
  createCandle,
  createSprinkleLayer,
};
