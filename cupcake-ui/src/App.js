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
        account: '1c8aee25-3716-4d88-ada5-d28a6dc90c41', // FIXME
        cupcakes : []
        // cupcakes: [{
        //   id: '64b85aaf895cbd5ff5a9fcdd9fa66d5e2a5593b46c65a4e29be750162c0c5104'
        // },{
        //   ...cupcakeBase,
        //   id: 1,
        //   flavour: "Vanilla"
        // }, {
        //   ...cupcakeBase,
        //   id: 2,
        //   icing: "Chocolate"
        // }, {
        //   ...cupcakeBase,
        //   id: 3
        // }],
      },
      right: {
        account: "01901822-a418-4da3-8ee8-3c433c0baf51",
        cupcakes: []
        // cupcakes: [{...cupcakeBase, id: 4, sprinkles: { colour: "Red", quantity: 40}}, {...cupcakeBase, id: 5}]
      }
    };
  }

  onBake = (cupcake) => {
    console.log('Baking Cupcake', cupcake);
  };

  onTransfer = (fromAccount, toAccount, cupcake) => {
    console.log("Transfer Cupcake", fromAccount, toAccount, cupcake);
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
