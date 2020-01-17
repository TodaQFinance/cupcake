import React, { Component } from 'react';
import './shared/styles/App.css';

import { cupcakeBase } from './shared/constants/constants';

import Bakery from './components/Bakery';
import CupcakeTransfer from './components/CupcakeTransfer';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cupcake: cupcakeBase,
      left: {
        account: 'fixme', // FIXME
        cupcakes: [{
          ...cupcakeBase,
          id: 1,
          flavour: "Vanilla"
        }, {
          ...cupcakeBase,
          id: 2,
          icing: "Chocolate"
        }, {
          ...cupcakeBase,
          id: 3
        }],
      },
      right: {
        account: '', // FIXME
        cupcakes: [],
      },
    };
  }

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
