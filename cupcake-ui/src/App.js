import React, { Component } from 'react';
import './App.css';

import Bakery from './Bakery';
import CupcakeTransfer from './CupcakeTransfer';

// Base Cupcake
const cupcakeBase = {
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
      cupcake: cupcakeBase,
      left: {
        account: "1234",
        cupcakes: [{...cupcakeBase, id: 1}, {...cupcakeBase, id: 2}, {...cupcakeBase, id: 3}]
      },
      right: {
        account: "789",
        cupcakes: [{...cupcakeBase, id: 4}, {...cupcakeBase, id: 5}]
      }
    };
  }

  onBake = cupcake => {
    console.log("Baking Cupcake", cupcake);
  }

  onTransfer = (fromAccount, toAccount, cupcake) => {
    console.log("Transfer Cupcake", fromAccount, toAccount, cupcake);
  }

  onSelected = cupcake => {
    console.log("Selected", cupcake);

    this.setState({
      cupcake: cupcake
    });
  }

  render() {
    const {left, right, cupcake} = this.state;

    return (
      <div className="container">
        <h1>TodaQ Cupcakerator</h1>

        <CupcakeTransfer left={left} right={right} onTransfer={this.onTransfer} onCupcakeSelect={this.onSelected} />
        <Bakery cupcake={cupcake} onBake={this.onBake} onChange={this.onSelected} />
      </div>
    );
  }
}

export default App;
