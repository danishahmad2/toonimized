import "./style.css";
import plos from "../../Assets/+.png";
import minus from "../../Assets/-.png";
import React, { Component } from "react";
import circle from "../../Assets/calcCircle.png";

export default class Pricing extends Component {
  render() {
    const { title, subTitle, value, plus, min, state } = this.props;
    return (
      <div className="pricingRow">
        <div className="pricingData">
          <p className="pricingBoldText">{title}</p>
          <span className="pricingGrayText">{subTitle}</span>
        </div>
        <div
          onClick={() => min(state)}
          className={value == 0 ? "calcCircleBox2" : "calcCircleBox"}
        >
          <img alt="" src={minus} className="calcMinusIcon" />
          <img alt="" src={circle} className="calcCircle" />
        </div>
        <div className="calcCircleBox3">
          <h1 className="calculationText">{value}+</h1>
        </div>
        <div className="calcCircleBox" onClick={() => plus(state)}>
          <img alt="" src={plos} className="calcMinusIcon" />
          <img alt="" src={circle} className="calcCircle" />
        </div>
      </div>
    );
  }
}
