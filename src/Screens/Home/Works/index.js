import "./style.css";
import React, { Component } from "react";
import oval from "../../../Assets/oval.png";
import body from "../../../Assets/body.png";
import shirt from "../../../Assets/shirt.png";
import pencil from "../../../Assets/pencil.png";
import marker from "../../../Assets/marker.png";
import family from "../../../Assets/family.png";
import neclace from "../../../Assets/neclace.png";

export default class Works extends Component {
  render() {
    return (
      <div className="worksBox">
        <img alt="" src={neclace} className="neclace" />
        <img alt="" src={neclace} className="neclace2" />
        <h1 className="worksHead">How it works?</h1>
        <span className="worksPara">
          Working with our team means 100% customer satisfaction.
        </span>
        <span className="worksPara">
          Our english speaking team pays attention to every tiny detail until
          the final drawing speaks for itself -
        </span>
        <h1 className="worksHead2">Unlimited Revision Rounds</h1>
        <div className="worksBigCircle" />
        <img
          alt=""
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088932/Home/Rectanglebg_utiph0.png"
          className="Rectangle"
        />
        <img
          alt=""
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088829/Home/table_npwsa0.png"
          className="catTable"
        />
        <img
          alt=""
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088828/Home/cat_eip0vj.png"
          className="cat"
        />
        <div className="halfCircle" />
        <div className="ovalbox1">
          <img alt="" src={oval} className="oval" />
          <img alt="" src={family} className="avatar" />
          <span className="num">1</span>
          <span className="ovalHead">Single, or...?</span>
          <span className="ovalPara">
            Choose number of people and pets to be drawn
          </span>
        </div>
        <div className="ovalbox2">
          <img alt="" src={oval} className="oval" />
          <img alt="" src={body} className="avatar" />
          <span className="num">2</span>
          <span className="ovalHead">Body Type</span>
          <span className="ovalPara">
            Choose body type and specific features
          </span>
        </div>
        <div className="ovalbox3">
          <img alt="" src={oval} className="oval" />
          <img alt="" src={marker} className="avatar" />
          <span className="num">3</span>
          <span className="ovalHead">Background</span>
          <span className="ovalPara1">
            Choose an already made background or opt for a customzied one
          </span>
        </div>
        <div className="ovalbox4">
          <img alt="" src={oval} className="oval" />
          <img alt="" src={pencil} className="avatar" />
          <span className="num">4</span>
          <span className="ovalHead">Notes</span>
          <span className="ovalPara2">
            Leave some notes, for the kick-ass details!
          </span>
        </div>
        <div className="ovalbox5">
          <img alt="" src={oval} className="oval" />
          <img alt="" src={shirt} className="avatar" />
          <span className="num">5</span>
          <span className="ovalHead">Final Product</span>
          <span className="ovalPara3">
            Choose rather your creation is printed on one or more products or
            sent to you as a PNG
          </span>
        </div>
        <div className="behindScenes">
          <h1 className="behindScenesHead" id="watchVedio">
            ...and behind the scenes?
          </h1>
          <h1 className="behindScenesPara">
            All Hand Drawn ! No generic software!
          </h1>
          <h1 className="behindScenesPara1">
            We use professional artists to hand-draw your portrait
          </h1>
        </div>

        <video className="vedio" controls>
          <source
            src="https://res.cloudinary.com/dapozvnbr/video/upload/v1600085765/Home/work_gpcg9w.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </div>
    );
  }
}
