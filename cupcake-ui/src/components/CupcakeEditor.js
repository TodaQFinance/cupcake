import React, { Component } from 'react';

import createFile from '../lib/helpers/files/createFile';

function DropDown({
  label, items, value, onChange,
}) {
  if (!onChange) {
    onChange = (e) => {};
  }

  return (
    <div className="form-group col-md-4">
      <label>{label}</label>
      <select className="form-control" value={value} onChange={onChange}>
        {Object.entries(items).map(c => (
          <option key={c[0]} value={c[0]}>
            {c[0]}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * Object used for incoming props and outgoing changes on bake
 * {
 *  cupcake: {
 *    flavour: "Chocolate",
 *    icing: "Chocolate",
 *    sprinkles: {
 *      colour: "Chocolate",
 *      quantity: 20,
 *    },
 *    candle: {
 *      colour: "Blue",
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
  onChange = (fn) => {
    const { cupcake, onChange } = this.props;
    const cupcakeJSON = JSON.parse(JSON.stringify(cupcake)); // Hack for deep copy

    return (evt) => {
      const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

      fn(cupcakeJSON, value); // Update cupcake

      if (onChange) {
        onChange(cupcakeJSON);
      }
    };
  };

  onBake = (evt) => {
    const { cupcake, onBake } = this.props;
    evt.preventDefault();

    console.log('making cupcake..');

    createFile(cupcake).then(data => console.log(data));

    if (onBake) {
      onBake(cupcake);
    }
  };

  render() {
    const {
      cupcake, flavourColours, icingColours, sprinklesColours, candleColours,
    } = this.props;

    const {
      address, flavour, icing, sprinkles, candle, temperature,
    } = cupcake;

    return (
      <form>
        <div className="form-row">
          <DropDown
            label="Flavour"
            items={flavourColours}
            value={flavour}
            onChange={this.onChange((c, v) => (c.flavour = v))}
          />
          <DropDown
            label="Icing"
            items={icingColours}
            value={icing}
            onChange={this.onChange((c, v) => (c.icing = v))}
          />
        </div>

        {/* Sprinkles */}
        <div className="form-row">
          <DropDown
            label="Sprinkles"
            items={sprinklesColours}
            value={sprinkles.colour}
            onChange={this.onChange((c, v) => (c.sprinkles.colour = v))}
          />

          <div className="form-group col-md-4">
            <label>Sprinkles Quantity</label>
            <input
              type="number"
              className="form-control"
              value={sprinkles.quantity}
              onChange={this.onChange((c, v) => (c.sprinkles.quantity = parseInt(v, 10)))}
            />
          </div>
        </div>

        {/* Candles */}
        <div className="form-row">
          <DropDown
            label="Candle Color"
            items={candleColours}
            value={candle.colour}
            onChange={this.onChange((c, v) => (c.candle.colour = v))}
          />

          <div className="form-group col-md-4">
            <label>Initial Address</label>
            <input
              type="string"
              className="form-control"
              value={address}
              onChange={this.onChange((c, v) => (c.address = v))}
            />
          </div>
          <div className="form-group col-md-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={candle.ignited}
                onChange={this.onChange((c, v) => (c.candle.ignited = v))}
              />
              <label className="form-check-label">Ignited</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={this.onBake}>
          Bake
        </button>
      </form>
    );
  }
}

export default CupcakeEditor;
