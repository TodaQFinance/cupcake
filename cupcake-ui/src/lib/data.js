// Cupcake sample data

const sampleAccount = {
  'account-type': 'individual',
  'admin-email': 'cupcake_maniac_99@hotmail.com',
  contact: {
    email: 'cupcake_maniac_99@hotmail.com',
    phone: '555-555-5323',
    'last-name': 'Scriabin',
    'first-name': 'Alexei',
    address: {
      city: 'Toronto',
      country: 'CA',
      'postal-code': 'N4N2L1',
      'province-region': 'Ontario',
      'street-address-1': '39 Madison Avenue',
      'street-address-2': '',
    },
  },
};

const sampleCupcake = {
  flavour: 'chocolate',
  icing: 'chocolate',
  sprinkles: {
    quantity: 41,
    type: 'rainbow',
  },
  candle: {
    colour: 'blue',
    ignited: false,
  },
};

module.exports = {
  sampleCupcake,
  sampleAccount,
};
