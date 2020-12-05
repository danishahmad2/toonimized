import "./style.css";
import React, { Component } from "react";
import line from "../../../Assets/line.png";
import arrow from "../../../Assets/arrow.png";
import plus from "../../../Assets/purple-plus.png";
import leftArrow from "../../../Assets/leftArrow.PNG";
import rightArrow from "../../../Assets/rightArrow.PNG";
import turnMeFuture from "../../../Assets/turn-me-future_uh7oxf.png";

export default class Customize extends Component {
  state = {
    index: 0,
    cartoons: [
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087651/Home/Simpsons1_uxw7ji.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Rick_and_Morty1_rfax7b.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Dragonball1_jjwsxg.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087655/Home/Southpark1_u3mgqr.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087652/Home/Family_Guy1_uem0rp.png",
      "https://res.cloudinary.com/dapozvnbr/image/upload/v1600087653/Home/Futurama1_sppeoo.png",
    ],
  };

  next = () => {
    const { index, cartoons } = this.state;
    if (index < cartoons.length - 1) this.setState({ index: index + 1 });
    else this.setState({ index: 0 });
  };

  prev = () => {
    const { index, cartoons } = this.state;
    if (index > 0) this.setState({ index: index - 1 });
    else this.setState({ index: cartoons.length - 1 });
  };

  set = (index) => this.setState({ index });

  render() {
    const { cartoons, index } = this.state;
    return (
      <div className="chooseBox">
        <div className={"parentRow"}>
          <img alt="" src={plus} className="plus08" />
          <img alt="" src={plus} className="plus09" />
          <div className="chooseBox1">
            <div className="chooseCircle">
              <img
                alt=""
                src={leftArrow}
                onClick={this.prev}
                className="arrow  bounce"
              />
              <img
                alt=""
                src={cartoons[index]}
                className="selectedCartoon bounce2"
              />
              <img
                alt=""
                src={rightArrow}
                onClick={this.next}
                className="arrow bounce1"
              />
            </div>
            <img alt="" src={line} className="line2" />
            <div className="insideChooseBox1">
              <h1 className="chooseBox1Heading">
                Choose between <br /> popular cartoon styles
              </h1>
              <p className="chooseBox1Disc">
                Curious about how the customization is made?
              </p>
              <div className="row">
                <a href="#watchVedio" className="vedioTxt">
                  Watch video
                </a>
                <img alt="" src={arrow} className="aro" />
              </div>
            </div>
            
          </div>
          
          <div className="chooseBox2">
            <img
              alt=""
              onClick={() => this.set(0)}
              className={index == 0 ? "activeCartoon2" : "non-select2"}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600087973/Home/turn-me-yellow_2x_uguj33.svg"
            />
            <img
              alt=""
              onClick={() => this.set(1)}
              className={index == 1 ? "activeCartoon" : "non-select"}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-rick_nb6rpb.png"
            />
            <img
              alt=""
              onClick={() => this.set(2)}
              className={index == 2 ? "activeCartoon" : "non-select"}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-goku_f1pdnc.png"
            />
            <img
              alt=""
              onClick={() => this.set(3)}
              className={index == 3 ? "activeCartoon" : "non-select"}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-cartman_q7zql9.png"
            />
            <img
              alt=""
              onClick={() => this.set(4)}
              className={index == 4 ? "activeCartoon2" : "non-select1"}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088038/Home/turn-me-family_xmefva.png"
            />
            <img
              alt=""
              onClick={() => this.set(5)}
              className={index == 5 ? "activeCartoon" : "non-select"}
              //src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600088040/Home/turn-me-future_uh7oxf.png"
              src={turnMeFuture}
            />
            
          </div>
        </div>
        <div className="customButBox customButBox-choose">
          <button
            className="customBut"
            onClick={ () => (window.location.href = "/orderstep1")}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    );
  }
}
