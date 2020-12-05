import "./style.css";
import React, { Component } from "react";
import plus2 from "../../../Assets/plus.png";
import Circles from "../../../Components/Circles";
import plus from "../../../Assets/purple-plus.png";

export default class Customize extends Component {
  render() {
    const { History } = this.props;
    return (
      <div className="customizeBox">
        <img alt="" src={plus} className="plus01" />
        <img alt="" src={plus} className="plus02" />
        <img alt="" src={plus} className="plus04" />
        <img alt="" src={plus2} className="plus05" />
        <img alt="" src={plus2} className="plus6" />
        <img alt="" src={plus} className="plus7" />
        <img alt="" src={plus} className="plus8" />
        <img alt="" src={plus} className="plus9" />
        <div className="customizeCircle">
          <img
            alt=""
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087154/Home/Ellipse_7_uxz08y.png"
            className="Ellipse"
          />
        </div>
        <div className="customizeDataBox">
          <h1 className="customizeHead">
            Let’s transform
            <br className="customizeHeadbr" />
            you into art
          </h1>
          <h3 className="customizePara">
            Get yourself a hand-drawn character!
          </h3>
          <p className="customizeParagraph">
            What if autenticity isn’t dead? Those emblematic cartoons are famous
            for many reasons and people love
            <br className="customizeParaBr" /> them for what they represent, but
            what if we can offer you one more reason to enjoy them? The perfect
            gift
            <br className="customizeParaBr" /> for friends, family or yourself -
            a striking avatar, or just a bit of fun, let our skilled artists
            feed your curiosity and
            <br className="customizeParaBr" />
            show you how anyone may look as a character for one of this
            animations.
            <br className="customizeParaBr" />
            Ready? Let’s go!
          </p>
          <div className="CustomerIcons">
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087431/Home/pen_zoev8o.png"
              head="4259+"
              para="Drawings"
            />
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087431/Home/paint_p1uu9k.png"
              head="27+"
              para="Incredible Artists"
            />
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087430/Home/cup_qxxjsf.png"
              head="97%"
              para="Customer Satisfaction"
            />
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087430/Home/dollar_fistyv.png"
              head="100%"
              para="Money Back Guarantee"
            />
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087431/Home/tick_uttxfe.png"
              sign={true}
              para="unlimited Revisions"
            />
            <Circles
              icon="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087431/Home/truck_i8zefe.png"
              head="4-7"
              para="Days Delivery Time"
            />
          </div>
        </div>
        <div className="customButBox">
          <button
            className="customBut yellow"
            onClick={() => History.push("/orderstep1")}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    );
  }
}
