import "./style.css";
import React, { Component } from "react";
import plus from "../../../Assets/plus.png";
import homeBg from "../../../Assets/home_i1wlpb.png";
import portal from '../../../Assets/home/image-done-min.png'
export default class Cover extends Component {
  render() {
    return (
      <div className="homeBox">
        <div className="homeBox1">
          <h1 className="homeBoxHead">Cartoonize Yourself</h1>
          <img
            alt=""
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087043/Home/line_wvsvdz.png"
            className="line"
          />
          <p className="homeBoxPara">No generated animations!</p>
          <p className="homeBoxPara">
            Enjoy an artist’s personalized work of you!
          </p>
        </div>
        <div className="homeBox2">
          <img
            alt=""
            // src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600085486/Home/GREENportalImp.new_1_3_3_jykcsl.png"
            src={portal}
            className="cartoon cartoon-cover"
          />
          <img
            alt=""
            //src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086924/Home/home_i1wlpb.png"
            src={homeBg}
            className="cartoonBg"
          />
          <img alt="" src={plus} className="plus1" />
          <img alt="" src={plus} className="plus2" />
          <img alt="" src={plus} className="plus3" />
        </div>
      </div>
    );
  }
}
