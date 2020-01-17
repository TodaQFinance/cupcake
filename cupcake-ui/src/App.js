import React, { Component } from 'react';
import './shared/styles/App.css';

import { cupcakeBase } from './shared/constants/constants';

import Bakery from './components/Bakery';
import CupcakeTransfer from './components/CupcakeTransfer';

class App extends Component {
  state = {
    cupcake: cupcakeBase,
    left: {
      account: 'e912536a-133d-43cd-b0d3-3a7e12cf44d5', // FIXME
      cupcakes: [],
    },
    right: {
      account: 'e912536a-133d-43cd-b0d3-3a7e12cf44d5', // FIXME
      cupcakes: [],
    },
  };

  onBake = (cupcake) => {
    console.log('Baking Cupcake', cupcake);
  };

  onTransfer = (fromAccount, toAccount, cupcake) => {
    // console.log("Transfer Cupcake", fromAccount, toAccount, cupcake);
  };

  onSelected = (cupcake) => {
    console.log('Selected', cupcake);

    this.setState({
      cupcake,
    });
  };

  render() {
    const { left, right, cupcake } = this.state;

    return (
      <div className="container">
        <h1>Cupcakes.OT</h1>

        <CupcakeTransfer
          left={left}
          right={right}
          onTransfer={this.onTransfer}
          onCupcakeSelect={this.onSelected}
        />

        <Bakery cupcake={cupcake} onBake={this.onBake} onChange={this.onSelected} />
      </div>
    );
  }
}

export default App;
