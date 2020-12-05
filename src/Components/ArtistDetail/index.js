import "./style.css";
import Footer from "../Footer";
import Header from "../Header";
import React, { Component } from "react";
import fb1 from "../../Assets/Artists/fb.PNG";
import arow from "../../Assets/Artists/arow.png";
import left from "../../Assets/Artists/left.png";
import right from "../../Assets/Artists/right.png";
import insta1 from "../../Assets/Artists/insta.PNG";
import center from "../../Assets/Artists/center.png";

export default class Artist extends Component {
  state = {
    fb: "",
    age: "",
    img: "",
    name: "",
    icon: "",
    style: "",
    insta: "",
    motto: "",
    drawing: "",
  };

  componentDidMount = () => {
    let obj = JSON.parse(localStorage.getItem("artist"));
    const { age, img, name, style, motto, drawing, fb, insta, icon } = obj;
    this.setState({ age, img, name, style, motto, drawing, fb, insta, icon });
  };

  render() {
    const { history } = this.props;
    const {
      age,
      img,
      name,
      style,
      motto,
      drawing,
      fb,
      insta,
      icon,
    } = this.state;
    return (
      <div className="artistsContainer">
        <Header History={history} />
        <img alt="" src={left} className="leftArtist" />
        <img alt="" src={right} className="rigthArtist" />
        <img alt="" src={center} className="centerArtist" />
        <div className="artistProfile">
          <div className="ArtistGalleryBox1">
            <img alt="" src={img} className="artistsPic" />
            <p className="artistName">{name}</p>
            <p className="artistAge">{age} y.o</p>
            <p className="artistStyle">Style: {style}</p>
          </div>
          <img alt="" src={icon} className="vegitable" />
        </div>
        <div className="artistDetials">
          <h1 className="artistDetialName">{name}</h1>
          <p className="artistDetialDetail">Motto: {motto}</p>
          <hr />
          <div className="artistDetialRow">
            <p className="artistDetialRowTxt">Favorite TV Series: {style}</p>
            <div className="artistsIconsRow">
              <img
                alt=""
                src={fb1}
                className="artistsIco"
                onClick={() => (window.location.href = fb)}
              />
              <img
                alt=""
                src={insta1}
                className="artistsIco"
                onClick={() => (window.location.href = insta)}
              />
            </div>
          </div>
          <hr />
          <div className="artistDetialRow">
            <p className="artistDetialRowTxt">Number of Drawings</p>
            <p className="artistDetialRowTxt1">{drawing}</p>
          </div>
          <hr />
          <div
            className="backRow"
            onClick={() => (window.location.pathname = "/artists")}
          >
            <img alt="" src={arow} className="backArow" />
            <p className="artistDetialRowTxt1">Back to Artist List</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
