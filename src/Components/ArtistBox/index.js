import "./style.css";
import React, { Component } from "react";
import arrow from "../../Assets/Artists/arrow.png";

export default class Artist extends Component {
  push = () => {
    localStorage.setItem("artist", JSON.stringify(this.props));
    this.props.history.push("/artist");
  };

  render() {
    const { age, img, name, style } = this.props;
    return (
      <div className="ArtistGalleryBox" onClick={this.push}>
        <img alt="" src={img} className="artistsPic" />
        <p className="artistName">{name}</p>
        <p className="artistAge">{age} y.o</p>
        <img alt="" src={arrow} className="artistArrow" onClick={this.push} />
        <p className="artistStyle">Favorite TV Series: {style}</p>
      </div>
    );
  }
}
