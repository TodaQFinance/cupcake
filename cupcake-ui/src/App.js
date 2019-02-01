import React, { Component } from 'react';
import './App.css';

import Bakery from './Bakery';
import CupcakeTransfer from './CupcakeTransfer';

// Base Cupcake
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBake = cupcake => {
    console.log("Baking Cupcake", cupcake);
  }

  render() {
    return (
      <div className="container">
        <h1>TodaQ Cupcakerator</h1>

        <CupcakeTransfer />
        <Bakery cupcake={cupcake} onBake={this.onBake} />
      </div>
    );
  }
}

export default App;
