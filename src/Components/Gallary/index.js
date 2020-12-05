import "./style.css";
import tick from "../../Assets/stepTick.png";
import React, { Component } from "react";

export default class Gallary extends Component {
  render() {
    const { state, pic, select, name } = this.props;
    return (
      <div className="gallaryBgBox">
        <span className="gallaryTxt">{name}</span>
        <div className={state == name && "gallaryPicBgActive"}>
          <img
            alt=""
            src={pic}
            loading="lazy"
            onClick={() => select({url:pic,name:name})}
            className={state == name ? "gallaryPic" : "gallaryPics"}
          />
          {state == name && (
            <img alt="" src={tick} className="selectGallary" loading="lazy" />
          )}
        </div>
      </div>
    );
  }
}
