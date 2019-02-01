import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import './App.css';

import Cupcake from './Cupcake'

/*

var flavourColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
var icingColours = {"chocolate": "#FF0000", "vanilla": "#FFFFBB"};
var sprinklesColours = {"chocolate": "#FF0000"};
var candleColours = {"blue":"#0000FF"};


var renderCupcake = function(cupcake) {
    var el = $("#cupcake").clone();
    if (cupcake.flavour && cupcake.flavour in flavourColours) {
	setFilling(el, flavourColours[cupcake.flavour]);
    }
    if (cupcake.icing && cupcake.icing in icingColours) {
	setIcing(el, icingColours[cupcake.icing]);
    }
    if (cupcake.sprinkles && cupcake.sprinkles.quantity) {
	numSprinkles(el, cupcake.sprinkles.quantity);
    }
    if (cupcake.sprinkles && cupcake.sprinkles.type in sprinklesColours) {
	setSprinkles(el, sprinklesColours[cupcake.sprinkles.type]);
    }
    if (cupcake.candle && cupcake.candle.colour in candleColours) {
	setCandle(el, candleColours[cupcake.candle.colour]);
    }
    el.css({'width':300}); // for now
    el.show();
    return el;
};
*/

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cupcake icingColor="red" fillingColor="blue" paperColor="red" candleColor="red" numSprinkles={40} sprinklesColor="blue" />
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Flavour</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control">
                <option value="Chocolate">Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
