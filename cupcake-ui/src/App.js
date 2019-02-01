import React, { Component } from 'react';
import './App.css';

import Bakery from './Bakery';
import CupcakeTransfer from './CupcakeTransfer';

// Base Cupcake
const cupcake = {
  id: null,
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
    this.state = {
      left: {
        account: "1234",
        cupcakes: [{...cupcake, id: 1}, {...cupcake, id: 2}, {...cupcake, id: 3}]
      },
      right: {
        account: "789",
        cupcakes: [{...cupcake, id: 4}, {...cupcake, id: 5}]
      }
    };
  }

  onBake = cupcake => {
    console.log("Baking Cupcake", cupcake);
  }

  render() {
    const {left, right} = this.state;

    return (
      <div className="container">
        <h1>TodaQ Cupcakerator</h1>

        <CupcakeTransfer left={left} right={right} />

        <Bakery cupcake={cupcake} onBake={this.onBake} />

      </div>
    );
  }
}

export default App;
