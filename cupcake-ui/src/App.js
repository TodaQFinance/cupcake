import React, { Component } from 'react';
import './App.css';

import Cupcake from './Cupcake';
import CupcakeEditor from './CupcakeEditor';

const flavourColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
const icingColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
const sprinklesColours = {"chocolate": "#FF0000", "green": "#00FF00"};
const candleColours = {"blue":"#0000FF", "red":"#FF0000"};

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
    this.state = {
      cupcake: cupcake
    };
  }

  updateCupcakeState = cupcake => {
    this.setState({ cupcake });
  }

  onBake = cupcake => {
    this.updateCupcakeState(cupcake);

    console.log("Baking Cupcake", cupcake);
  }

  render() {
    const {flavour, icing, sprinkles, candle, temperature} = this.state.cupcake;
    
    return (
      <div className="container">
        {/*
          Due to ID's being used in the SVG you can only include one cupcake at a time or they will overwrite eachothers
          styles.
          */}
        <Cupcake 
          flavourColour={flavourColours[flavour]}
          icingColour={icingColours[icing]}  
          sprinklesColour={sprinklesColours[sprinkles.colour]}
          numSprinkles={sprinkles.quantity}
          candleColour={candleColours[candle.colour]}
          candleIgnited={candle.ignited} />

        <CupcakeEditor 
          flavourColours={flavourColours}
          icingColours={icingColours}
          sprinklesColours={sprinklesColours}
          candleColours={candleColours}
          onChange={this.updateCupcakeState}
          onBake={this.onBake}
          cupcake={cupcake} />
      </div>
    );
  }
}

export default App;
