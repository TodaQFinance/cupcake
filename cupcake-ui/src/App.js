import React, { Component } from 'react';
import './App.css';

import Bakery from './Bakery';
import CupcakeTransfer from './CupcakeTransfer';

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
    ignited: true,
  },
	address: '4e0ed006-4fe0-46e3-9a05-c928640a4e05'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupcake: cupcakeBase,
      left: {
        account: '4e0ed006-4fe0-46e3-9a05-c928640a4e05',
        cupcakes: [] // no cupcakes to start
      },
      right: {
        account: "18ebfbe7-1416-4a1a-bdcc-9728076b5b99",
        cupcakes: []
      }
    };
  }

  onBake = cupcake => {
    console.log("Baking Cupcake", cupcake);
  }

  onTransfer = (fromAccount, toAccount, cupcake) => {
    //console.log("Transfer Cupcake", fromAccount, toAccount, cupcake);
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

			<h1>Cupcakes.OT</h1>

			<CupcakeTransfer 
				left={left} 
				right={right} 
				onTransfer={this.onTransfer} 
				onCupcakeSelect={this.onSelected}
			/>

			<Bakery 
				cupcake={cupcake} 
				onBake={this.onBake} 
				onChange={this.onSelected}
			/>
      </div>
    );
  }
}

export default App;
