import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import '../shared/styles/Cupcake.css';
import cupcakeSvg from '../shared/svg/cupcake.svg';

function setCss(element, selector, style, value) {
  element.querySelectorAll(selector).forEach((e) => {
    e.style[style] = value;
  });
}

class Cupcake extends Component {
  onInjected = (
    {
      icingColour,
      flavourColour,
      paperColour,
      candleColour,
      candleIgnited,
      numSprinkles,
      sprinklesColour,
    },
    error,
    element,
  ) => {
    // Icing
    setCss(element, "#Icing linearGradient stop[offset='0']", 'stopColor', icingColour);

    // Filling
    setCss(element, "#Base > linearGradient stop[offset='0']", 'stopColor', flavourColour);
    setCss(element, "#Base > linearGradient stop[offset='1']", 'stopColor', flavourColour);

    // Paper
    setCss(element, "#Base g linearGradient stop[offset='0']", 'stopColor', paperColour);
    setCss(element, "#Base g linearGradient stop[offset='1']", 'stopColor', paperColour);

    // Candle
    setCss(element, "#Candle > linearGradient stop[offset='0']", 'stopColor', candleColour);
    // also have stops at 1, 0.1056 (light), 0.367, 0.8522
    setCss(element, "#Candle > linearGradient stop[offset='0.367']", 'stopColor', candleColour);
    setCss(element, "#Candle > linearGradient stop[offset='0.8522']", 'stopColor', candleColour);
    setCss(
      element,
      '#path8612, #path8615, #path8617',
      'display',
      candleIgnited ? 'initial' : 'none',
    );

    // Sprinkles
    setCss(element, '.st50, .st51, .st52, .s53, .st54', 'fill', sprinklesColour);
    setCss(element, '#Sprinkles *', 'display', 'none');
    if (numSprinkles > 0) {
      setCss(element, '#Sprinkles :nth-child(1)', 'display', 'initial');
      for (let i = 0; i < numSprinkles; i++) {
        setCss(element, `#Sprinkles :nth-child(${i + 4})`, 'display', 'initial');
      }
    }
  };

  render() {
    return (
      <ReactSVG
        src={cupcakeSvg}
        svgClassName="cupcake-svg"
        onInjected={this.onInjected.bind(null, this.props)}
      />
    );
  }
}

export default Cupcake;
