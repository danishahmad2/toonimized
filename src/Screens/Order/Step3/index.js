import "./style.css";
import React, { Component } from "react";
import Steps from "../../../Components/Steps";
import Tick from "../../../Assets/stepTick.png";
import Body from "../../../Assets/fullBody.png";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import selfie from "../../../Assets/selfie.png";
import Previous from "../../../Components/Previous";
import Circle from "../../../Assets/stepHalfCircle.png";
import selfieActive from "../../../Assets/selfieActive.png";
import bodyActive from "../../../Assets/fullBodyActive.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import firebase from "../../../helper";

export default class Step3 extends Component {
  state = {
    select: "",
  };

  select = (e) => this.setState({ select: [e] });

  next = () => {
    const { select } = this.state;
    localStorage.setItem("body", select);
    this.props.history.push("/orderstep4");
  };
  componentDidMount=()=>{
    firebase.analytics().logEvent('visit_order_step_3',{}) 
  }
  render() {
    const { history } = this.props;
    const { select } = this.state;
    return (
      <div className="stepBox3">
        <Header History={history} />
        <Steps />
        <Previous path="/orderstep2" />
        <img alt="" src={Circle} className="stepsBigCircle" />
        <img alt="" src={rigthCircle} className="rigthStepCircle" />
        <div className="step3TopData">
          <br />
          <h1 className="step3DataHead">Step 3</h1>
          <h4 className="stepSubHead3">Body Type</h4>
          <p className="step3DataPara">
            Would you like a full body or just a good portrait picutre, from
            shoulder up? Your call!
          </p>
        </div>
        <div className="step3CirclesRow">
          <div
            className={
              select == "fullBody"
                ? "step3PurpleCircles"
                : select !== ""
                ? "step3CirclesH"
                : "step3Circles"
            }
            onClick={() => this.select("fullBody")}
          >
            <img
              alt=""
              src={select == "fullBody" ? Body : bodyActive}
              className="fullBody"
            />
            {select == "fullBody" && (
              <img alt="" src={Tick} className="tick3" />
            )}
          </div>
          <div
            className={
              select == "portrait"
                ? "step3PurpleCircles"
                : select !== ""
                ? "step3CirclesH"
                : "step3Circles"
            }
            onClick={() => this.select("portrait")}
          >
            <img
              alt=""
              className="selfie"
              src={select == "portrait" ? selfie : selfieActive}
            />
            <p
              className={
                select == "portrait" ? "selfieTitleActive" : "selfieTitle"
              }
            >
              Portrait
            </p>
            <span
              className={
                select == "portrait" ? "selfieDiscActive" : "selfieDisc"
              }
            >
              (hip upwards)
            </span>
            {select == "portrait" && (
              <img alt="" src={Tick} className="tick3" />
            )}
          </div>
        </div>
        <button
          onClick={select !== "" ? () => this.next() : null}
          className={select !== "" ? "step1ActiveBut" : "step1But"}
        >
          NEXT STEP
        </button>
        <br />
        <Footer History={this.props.history} />
      </div>
    );
  }
}
