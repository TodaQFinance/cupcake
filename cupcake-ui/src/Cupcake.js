import React, { Component } from 'react';
import ReactSVG from 'react-svg'
import './Cupcake.css';
import cupcakeSvg from './cupcake.svg'

function setCss(element, selector, style, value) {
  element.querySelectorAll(selector).forEach(e => {
    e.style[style] = value;
  });
}

class Cupcake extends Component {
  constructor(props) {
    super(props);
  }

  onInjected = ({icingColor, fillingColor, paperColor, candleColor, numSprinkles, sprinklesColor}, error, element) => {
    // Icing
    setCss(element, "#Icing linearGradient stop[offset='0']", 'stopColor', icingColor);

    // Filling
    setCss(element, "#Base > linearGradient stop[offset='0']", "stopColor", fillingColor);
    setCss(element, "#Base > linearGradient stop[offset='1']", "stopColor", fillingColor);
    
    // Paper
    setCss(element, "#Base g linearGradient stop[offset='0']", "stopColor", paperColor);
    setCss(element, "#Base g linearGradient stop[offset='1']", "stopColor", paperColor);

    // Candle
    setCss(element, "#Candle > linearGradient stop[offset='0']", "stopColor", candleColor);
    //also have stops at 1, 0.1056 (light), 0.367, 0.8522
    setCss(element, "#Candle > linearGradient stop[offset='0.367']", "stopColor", candleColor);
    setCss(element, "#Candle > linearGradient stop[offset='0.8522']", "stopColor", candleColor);

    // Sprinkles
    setCss(element, ".st50, .st51, .st52, .s53, .st54", "fill", sprinklesColor);
    setCss(element, "#Sprinkles *", "display", "none");
    if(numSprinkles > 0) {
      setCss(element, "#Sprinkles :nth-child(1)", "display", "initial");
      for(var i = 0; i < numSprinkles; i++) {
        setCss(element, "#Sprinkles :nth-child(" + (i + 4) + ")", "display", "initial");
      }
    }
  }

  render() {
    return (
      <ReactSVG src={cupcakeSvg} svgClassName="cupcake-svg" onInjected={this.onInjected.bind(null, this.props)} />
    );
  }
}

export default Cupcake;
