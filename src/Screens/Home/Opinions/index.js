import "./style.css";
import React, { Component } from "react";
import quotes from "../../../Assets/quotes.png";
import shirt from "../../../Assets/shirtDesign.png";
import bookCover from "../../../Assets/bookCover.png";
import mobileCover from "../../../Assets/mobileCover.png";
import leftArrow from "../../../Assets/leftSlideArrow.png";
import rightArrow from "../../../Assets/rightSlideArrow.png";
import image1 from "../../../Assets/Image1_1_ywp9q2.jpg";
import fansImage from "../../../Assets/fans_vuecfm.jpg";
import opinionImage2_2 from "../../../Assets/Opinion_Image_pqsvzs.png";
import opinionImage2_1 from "../../../Assets/Opinion_Image_2_qgjban.jpg";

export default class Opinions extends Component {
  state = { index: 0 };

  next = () => {
    const { index } = this.state;
    if (index < 2) this.setState({ index: index + 1 });
    else this.setState({ index: 0 });
  };

  prev = () => {
    const { index } = this.state;
    if (index > 0) this.setState({ index: index - 1 });
    else this.setState({ index: 2 });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="opinionsBox">
        <div className="opinionsCircles" />
        <img alt="" src={shirt} className="opinionShirt" />
        <div className="bigBlackContainer">
          <div className="bigBlackCircle" />
        </div>
        <div className="opinionsData">
          <div className="opinionDataCenter">
            <h1 className="Opinions">Opinions?</h1>
          </div>
          <div className="opinionsDataRow">
            <img
              alt=""
              src={leftArrow}
              className="SideArrow1"
              onClick={this.prev}
            />
            <div className="opinionsDataBox">
              {index === 0 && (
                <>
                  <h1 className="OpinionDate">Sarah. 25 y.o, Architect</h1>
                  <h1 className="OpinionSubHead">
                    West Virginia, United States
                  </h1>
                  <p className="opinionsDataPara">
                    “Through one of my favorite influencers on Instagram I
                    became aware of Toonize. I am very happy with my artwork and
                    would recommend the service to others.”
                  </p>
                  <div className="girlsRow">
                    <img
                      alt=""
                      loading="lazy"
                      className="girls"
                      src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/originalGirl_pv2n0h.png"
                    />
                    <img
                      alt=""
                      loading="lazy"
                      className="girls"
                      src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600634951/artificialGirl_mkflpr.png"
                    />
                  </div>
                </>
              )}
              {index === 1 && (
                <>
                  <h1 className="OpinionDate">
                    Ana & Jorge. 28 & 32 y.o, Married
                  </h1>
                  <h1 className="OpinionSubHead">Pittsburgh, United States</h1>
                  <p className="opinionsDataPara">
                    “My husband is a huge fan of the TV series and was extremely
                    pleased with the picture. The most beautiful day of our life
                    is now printed on a canvas hanging on our living room wall.”
                  </p>
                  <div className="girlsRow">
                    <img
                      alt=""
                      loading="lazy"
                      className="girls"
                      src={opinionImage2_1}
                    />
                    <img
                      alt=""
                      loading="lazy"
                      className="girls"
                      src={opinionImage2_2}
                    />
                  </div>
                </>
              )}
              {index === 2 && (
                <>
                  <h1 className="OpinionDate">Jack. 21 y.o, Waiter</h1>
                  <h1 className="OpinionSubHead">California, United States</h1>
                  <p className="opinionsDataPara">
                    “I really liked that the artist was able to implement all
                    requested adjustments afterwards, down to the smallest
                    detail. Thanks to the unlimited revision rounds.”
                  </p>
                  <div className="girlsRow">
                    <img
                      alt=""
                      loading="lazy"
                      className="girls"
                      src={fansImage}
                    />
                    <img alt="" loading="lazy" className="girls" src={image1} />
                  </div>
                </>
              )}
            </div>
            <img
              alt=""
              src={rightArrow}
              className="SideArrow2"
              onClick={this.next}
            />
          </div>
        </div>
        <img alt="" src={quotes} className="quotes" />
        
        <div className="smallBlackCircle" />
        <img alt="" src={mobileCover} className="mobileCover" />
        <img alt="" src={bookCover} className="bookCover" />
        
        <div className="customButBox customButBox-opinions">
          <button
            className="customBut yellow"
            onClick={() => (window.location.href = "/orderstep1")}
          >
            ORDER NOW
          </button>
        </div>
      
      </div>
    );
  }
}
