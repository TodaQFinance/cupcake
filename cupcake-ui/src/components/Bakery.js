import React, { Component } from 'react';

import '../shared/styles/App.css';

import Cupcake from './Cupcake';
import CupcakeEditor from './CupcakeEditor';

import {
  flavourColours,
  icingColours,
  sprinklesColours,
  candleColours,
} from '../shared/constants/constants';

class Bakery extends Component {
  onBake = (cupcake) => {
    const { onBake } = this.props;
    if (onBake) {
      onBake(cupcake);
    }
  };

  onChange = (cupcake) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(cupcake);
    }
  };

  render() {
    const { cupcake } = this.props;

    if (!cupcake) {
      return null;
    }

    const {
      flavour, icing, sprinkles, candle, temperature,
    } = cupcake;

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
            cupcake={cupcake}
          />
        </div>
        <div className="col-md-4">
          {/*
            Due to ID's being used in the SVG you can only include one cupcake at a time or they will overwrite eachothers
            styles.
            */}
          <Cupcake
            flavourColour={flavourColours[flavour]}
            icingColour={icingColours[icing]}
            sprinklesColour={sprinklesColours[sprinkles.type]}
            numSprinkles={sprinkles.quantity}
            candleColour={candleColours[candle.colour]}
            candleIgnited={candle.ignited}
          />
        </div>
      </div>
    );
  }
}

export default Bakery;
