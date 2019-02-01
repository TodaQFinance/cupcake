import React, { Component } from 'react';

/*
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

function DropDown({label, items, value, onChange}) {
  if(!onChange) { onChange = e => {}; }
  
  return (
    <div className="form-group col-md-3">
      <label>{label}</label>
      <select className="form-control" value={value} onChange={evt => onChange(items[evt.target.value])}>
        {Object.entries(items).map(c => {
          return <option key={c[1]} value={c[1]}>{c[0]}</option>
        })}
      </select>
    </div>
  );
}

/**
 * Object used for incoming props and outgoing changes on bake
 * {
 *  cupcake: {
 *    flavour: "chocolate",
 *    icing: "chocolate",
 *    sprinkles: {
 *      colour: "chocolate",
 *      quantity: 20,
 *    },
 *    candle: {
 *      colour: "blue",
 *      remaining: 20,
 *      ignited: true,
 *    },
 *    temperature: 50,
 *  }
 * }
 */
class CupcakeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupcake: props.cupcake,
    };
  }

  onChange() {
    console.log("Change");
  }

  onBake() {
    this.props.onBake(this.state.cupcake);
  }

  render() {
    const {flavourColours, icingColours, sprinklesColours, candleColours} = this.props;
    const {flavour, icing, sprinkles, candle, temperature} = this.state.cupcake;

    return (
      <form>
        <div className="form-row">
          <DropDown label="Flavour" items={flavourColours} value={flavour} onChange={this.onChange} />
          <DropDown label="Icing" items={icingColours} value={icing} />
        </div>

        {/* Sprinkles */}
        <div className="form-row">
          <DropDown label="Sprinkles" items={sprinklesColours} value={sprinkles.colour} />
          <div className="form-group col-md-2">
            <label>Sprinkles Quantity</label>
            <input type="number" className="form-control" value={sprinkles.quantity} />
          </div>
        </div>
        
        {/* Candles */}
        <div className="form-row">
          <DropDown label="Candle Color" items={candleColours} value={candle.colour} />
          <div className="form-group col-md-2">
            <label>Remaining</label>
            <input type="number" min={0} max={100} className="form-control" value={candle.remaining} />
          </div>
          <div className="form-group col-md-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={candle.ignited} />
              <label className="form-check-label">Ignited</label>
            </div>
          </div>
        </div>

        {/* Temperature */}
        <div className="form-row">
          <div className="form-group col-md-2">
            <label>Temperature</label>
            <input type="number" className="form-control" value={temperature} />
          </div>
        </div>

        <button className="btn btn-primary">Bake</button>
      </form>
    );
  }
}

export default CupcakeEditor;
