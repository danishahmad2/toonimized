import "./style.css";
import React, { Component } from "react";

export default class Circles extends Component {
  render() {
    const { icon, head, para, sign } = this.props;
    return (
      <div className="circleBox">
        <div className="iconCircle">
          <div className="insideIconCircle">
            <img alt="" src={icon} className="iconInsideCircle" />
          </div>
        </div>
        {sign ? (
          <img
            alt=""
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087570/Home/unlimited_rxhuxi.png"
            className="unlimitedIcon"
          />
        ) : (
          <h3 className="iconsHead">{head}</h3>
        )}
        <h3 className="iconsPara">{para}</h3>
      </div>
    );
  }
}
