import React, { Component } from 'react';
import './App.css';

import Cupcake from './Cupcake';
import CupcakeEditor from './CupcakeEditor';

const cupcake = {
  flavour: "chocolate",
  icing: "chocolate",
  sprinkles: {
    colour: "chocolate",
    quantity: 20,
  },
  candle: {
    colour: "blue",
    remaining: 20,
    ignited: true,
  },
  temperature: 50,
}

class App extends Component {
  render() {
    return (
      <div className="container">
        {/*
          Due to ID's being used in the SVG you can only include one cupcake at a time or they will overwrite eachothers
          styles.
          */}
        <Cupcake icingColor="red" fillingColor="blue" paperColor="red" candleColor="red" numSprinkles={40} sprinklesColor="blue" />
        <CupcakeEditor cupcake={cupcake} />
      </div>
    );
  }
}

export default App;
