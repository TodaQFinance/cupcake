import React, { Component } from 'react';
import './App.css';

import Bakery from './Bakery';
import CupcakeTransfer from './CupcakeTransfer';

// Base Cupcake
const cupcakeBase = {
  id: null,
  flavour: "Chocolate",
  icing: "Chocolate",
  sprinkles: {
    colour: "Chocolate",
    quantity: 20,
  },
  candle: {
    colour: "Blue",
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
        cupcakes: [{...cupcakeBase, id: 1, flavour: "Vanilla"}, {...cupcakeBase, id: 2, icing: "Vanilla"}, {...cupcakeBase, id: 3}]
      },
      right: {
        account: "789",
        cupcakes: [{...cupcakeBase, id: 4, sprinkles: { colour: "Red", quantity: 40}}, {...cupcakeBase, id: 5}]
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
