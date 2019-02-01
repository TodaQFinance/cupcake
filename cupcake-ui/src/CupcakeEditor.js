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
      <select className="form-control" value={value} onChange={onChange}>
        {Object.entries(items).map(c => {
          return <option key={c[0]} value={c[0]}>{c[0]}</option>
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
 * 
 * onBake(cupcake) - Fired when the bake button is clicked
 * onChange(cupcake) - Fired when anything is changed
 */
class CupcakeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cupcake: props.cupcake,
    };
  }

  onChange = fn => {
    const cupcake = JSON.parse(JSON.stringify(this.state.cupcake)); // Hack for deep copy

    return (evt) => {
      const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;

      fn(cupcake, value); // Update cupcake
      this.setState({ cupcake });
      this.props.onChange(cupcake);
    }
  }

  onBake = evt => {
    evt.preventDefault();

    this.props.onBake(this.state.cupcake);
  }

  render() {
    const {flavourColours, icingColours, sprinklesColours, candleColours} = this.props;
    const {flavour, icing, sprinkles, candle, temperature} = this.state.cupcake;

    return (
      <form>
        <div className="form-row">
          <DropDown label="Flavour" items={flavourColours} value={flavour} onChange={this.onChange((c, v) => c.flavour = v)} />
          <DropDown label="Icing" items={icingColours} value={icing} onChange={this.onChange((c, v) => c.icing = v)} />
        </div>

        {/* Sprinkles */}
        <div className="form-row">
          <DropDown label="Sprinkles" 
            items={sprinklesColours} 
            value={sprinkles.colour} 
            onChange={this.onChange((c, v) => c.sprinkles.colour = v)} />

          <div className="form-group col-md-2">
            <label>Sprinkles Quantity</label>
            <input 
              type="number" 
              className="form-control" 
              value={sprinkles.quantity} 
              onChange={this.onChange((c, v) => c.sprinkles.quantity = parseInt(v, 10))} />
          </div>
        </div>
        
        {/* Candles */}
        <div className="form-row">
          <DropDown 
            label="Candle Color" 
            items={candleColours} 
            value={candle.colour} 
            onChange={this.onChange((c, v) => c.candle.colour = v)} />

          <div className="form-group col-md-2">
            <label>Remaining</label>
            <input
              type="number" 
              min={0} max={100} 
              className="form-control" 
              value={candle.remaining} 
              onChange={this.onChange((c, v) => c.candle.remaining = parseInt(v, 10))} />
          </div>
          <div className="form-group col-md-2">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                checked={candle.ignited} 
                onChange={this.onChange((c, v) => c.candle.ignited = v)} />
              <label className="form-check-label">Ignited</label>
            </div>
          </div>
        </div>

        {/* Temperature */}
        <div className="form-row">
          <div className="form-group col-md-2">
            <label>Temperature</label>
            <input 
              type="number" 
              className="form-control" 
              value={temperature}
              onChange={this.onChange((c, v) => c.temperature = parseInt(v, 10))} />
          </div>
        </div>

        <button className="btn btn-primary" onClick={this.onBake}>Bake</button>
      </form>
    );
  }
}

export default CupcakeEditor;
