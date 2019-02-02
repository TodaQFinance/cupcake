import React, { Component } from 'react';
import './App.css';

import Cupcake from './Cupcake';
import CupcakeEditor from './CupcakeEditor';

const flavourColours = {"Chocolate": "#612D00", "Vanilla": "#FFFFBB"};
const icingColours = {"Chocolate": "#332202", "Vanilla": "#FFFFBB"};
const sprinklesColours = {"Chocolate": "#332202", "Green": "#00FF00", "Rainbow":null};
const candleColours = {"Blue":"#0000FF", "Red":"#FF0000", "Pink":"#FF04E4"};

class Bakery extends Component {
  constructor(props) {
    super(props);
  }

  onBake = cupcake => {
    if(this.props.onBake) {
        this.props.onBake(cupcake);
    }
  }

  onChange = cupcake => {
    if(this.props.onChange) {
      this.props.onChange(cupcake);
    }
  }

  render() {
    const {cupcake} = this.props;
    
    if (!cupcake) {return null;}

    const {flavour, icing, sprinkles, candle, temperature} = cupcake;
    
    return (
      <div className="row panel">
        <div className="col-md-8">
          <CupcakeEditor 
            flavourColours={flavourColours}
            icingColours={icingColours}
            sprinklesColours={sprinklesColours}
            candleColours={candleColours}
            onChange={this.onChange}
            onBake={this.onBake}
            cupcake={cupcake} />
          </div>
        <div className="col-md-4">
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
        </div>
      </div>
    );
  }
}

export default Bakery;
