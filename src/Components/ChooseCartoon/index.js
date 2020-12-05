import "./style.css";
import React, { Component } from "react";

export default class Customize extends Component {
  render() {
    const { icon, big } = this.props;
    return (
      <div className="chooseCartoon">
        <img
          alt=""
          src={icon}
          className={(big ? "chooseOptions1" : "chooseOptions")+" "+(this.props?.className||"")}
        />
      </div>
    );
  }
}
