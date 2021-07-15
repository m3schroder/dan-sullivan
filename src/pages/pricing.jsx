import React, { Component } from "react";

import RangeSlider from "../components/common/rangeSlider";

class Pricing extends Component {
  state = {
    printingPrices: {
      material: {
        id: "pmaterial",
        price: 0.7,
        quantity: 0,
        unit: "grams",
        max: 1000,
        step: 10,
      },
      printTime: {
        id: "ptime",
        price: 0.7,
        quantity: 0,
        unit: "hours",
        max: 72,
      },
    },
    totalCost: 0,
  };

  handle = {
    slide: (slider) => {
      let printingPrices = this.state.printingPrices;
      printingPrices[slider.id].quantity = slider.value;
      this.setState({ printingPrices, totalCost: this.handle.calcTotal() });
    },
    calcTotal: () => {
      const { printingPrices } = this.state;
      let sum = 0;
      for (var key in printingPrices) {
        sum += printingPrices[key].quantity * printingPrices[key].price;
      }
      return sum.toFixed(2);
    },
  };

  render() {
    const { printingPrices, totalCost } = this.state;

    return (
      <div className="price-container">
        <div className="pc">
          <h2>${totalCost}</h2>
        </div>
        <div className="slide-container">
          {Object.entries(printingPrices).map((category) => (
            <RangeSlider
              key={category[0]}
              id={category[0]}
              item={category[1]}
              step={category[1].step}
              showVal={true}
              handleSlide={this.handle.slide}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pricing;
