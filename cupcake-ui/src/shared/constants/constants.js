const cfg = require('../../config');
export const cupcakeBase = {
  id: null,
  flavour: 'Chocolate',
  icing: 'Chocolate',
  sprinkles: {
    colour: 'Chocolate',
    quantity: 20,
  },
  candle: {
    colour: 'Blue',
    ignited: true,
  },
  address: cfg.accounts.left,
};

export const flavourColours = { Chocolate: '#FF0000', Vanilla: '#FFFFBB' };

export const icingColours = { Chocolate: '#FF0000', Vanilla: '#FFFFBB' };

export const sprinklesColours = { Chocolate: '#FF0000', Green: '#00FF00', Rainbow: '#00FF00' };

export const candleColours = { Blue: '#0000FF', Red: '#FF0000' };
