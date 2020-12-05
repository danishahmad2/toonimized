import "./style.css";
import React, { Component } from "react";
import stand from "../../Assets/cartoonStand.png";

export default class Customize extends Component {
  render() {
    const { icon } = this.props;
    return (
      <div className="standCartoonBox">
        <img alt="" src={icon} className="standCartoon" />
        <img alt="" src={stand} className="stand" />
      </div>
    );
  }
}
