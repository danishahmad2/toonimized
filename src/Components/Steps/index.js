import "./style.css";
import React, { Component } from "react";
import yellowLine from "../../Assets/yellowLine.png";
import purpleLine from "../../Assets/purpleLine.png";
import yellowCircle from "../../Assets/yellowCircle.png";
import purpleCircle from "../../Assets/purpleCircle.png";
import yellowPurple from "../../Assets/yellowPurple.png";

export default class Step extends Component {
  state = {
    step1: true,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
  };

  componentDidMount = () => {
    let path = window.location.pathname;
    if (path == "/orderstep1") this.setState({ step1: true });
    if (path == "/orderstep2") this.step2();
    if (path == "/orderstep3") this.step3();
    if (path == "/orderstep4") this.step4();
    if (path == "/orderstep5") this.step5();
    if (path == "/orderstep6" || path == "/orderDone") this.step6();
  };

  step2 = () => {
    this.setState({
      step1: true,
      step2: true,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
    });
  };

  step3 = () => {
    this.setState({
      step1: true,
      step2: true,
      step3: true,
      step4: false,
      step5: false,
      step6: false,
    });
  };

  step4 = () => {
    this.setState({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: false,
      step6: false,
    });
  };

  step5 = () => {
    this.setState({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: true,
      step6: false,
    });
  };

  step6 = () => {
    this.setState({
      step1: true,
      step2: true,
      step3: true,
      step4: true,
      step5: true,
      step6: true,
    });
  };

  render() {
    const { step1, step2, step3, step4, step5, step6 } = this.state;
    return (
      <div className="step">
        <div className="stepIcon">
          <img
            alt=""
            src={step1 ? purpleCircle : yellowCircle}
            className={step1 ? "purpleCircle" : "yellowCircle"}
          />
          <img
            alt=""
            src={step1 && !step2 ? yellowPurple : purpleLine}
            className="yellowPurple"
          />
          <img
            alt=""
            src={step2 ? purpleCircle : yellowCircle}
            className={step2 ? "purpleCircle" : "yellowCircle"}
          />
          <img
            alt=""
            src={
              step2 && !step3 ? yellowPurple : !step2 ? yellowLine : purpleLine
            }
            className={
              step2 && !step3
                ? "yellowPurple"
                : !step2
                ? "yellowLine"
                : "yellowPurple"
            }
          />
          <img
            alt=""
            src={step3 ? purpleCircle : yellowCircle}
            className={step3 ? "purpleCircle" : "yellowCircle"}
          />
          <img
            alt=""
            src={
              step3 && !step4 ? yellowPurple : !step3 ? yellowLine : purpleLine
            }
            className={
              step3 && !step4
                ? "yellowPurple"
                : !step3
                ? "yellowLine"
                : "yellowPurple"
            }
          />
          <img
            alt=""
            src={step4 ? purpleCircle : yellowCircle}
            className={step4 ? "purpleCircle" : "yellowCircle"}
          />
          <img
            alt=""
            src={
              step4 && !step5 ? yellowPurple : !step4 ? yellowLine : purpleLine
            }
            className={
              step4 && !step5
                ? "yellowPurple"
                : !step4
                ? "yellowLine"
                : "yellowPurple"
            }
          />
          <img
            alt=""
            src={step5 ? purpleCircle : yellowCircle}
            className={step5 ? "purpleCircle" : "yellowCircle"}
          />
          <img
            alt=""
            src={
              step4 && step5
                ? step5 && step6
                  ? purpleLine
                  : yellowPurple
                : yellowLine
            }
            className={
              step4 && step5
                ? step5 && step6
                  ? "yellowPurple"
                  : "yellowPurple"
                : "yellowLine"
            }
          />
          <img
            alt=""
            src={step6 ? purpleCircle : yellowCircle}
            className={step6 ? "purpleCircle" : "yellowCircle"}
          />
        </div>
        <div className="stepBox">
          <div className="stepBoxes">
            <span className={step1 ? "stepTitleSelect" : "stepTitle"}>
              Step 1
            </span>
            <span className={step1 ? "stepDetailSelect" : "stepDetail"}>
              Cartoon type
            </span>
          </div>
          <div className="stepBoxes">
            <span className={step2 ? "stepTitleSelect" : "stepTitle"}>
              Step 2
            </span>
            <span className={step2 ? "stepDetailSelect" : "stepDetail"}>
              Number of people
            </span>
          </div>
          <div className="stepBoxes">
            <span className={step3 ? "stepTitleSelect" : "stepTitle"}>
              Step 3
            </span>
            <span className={step3 ? "stepDetailSelect" : "stepDetail"}>
              Body Type
            </span>
          </div>
          <div className="stepBoxes">
            <span className={step4 ? "stepTitleSelect" : "stepTitle"}>
              Step 4
            </span>
            <span className={step4 ? "stepDetailSelect" : "stepDetail"}>
              Background
            </span>
          </div>
          <div className="stepBoxes">
            <span className={step5 ? "stepTitleSelect" : "stepTitle"}>
              Step 5
            </span>
            <span className={step5 ? "stepDetailSelect" : "stepDetail"}>
              Notes
            </span>
          </div>
          <div className="lastStepBox">
            <span className={step6 ? "stepTitleSelect" : "stepTitle"}>
              Step 6
            </span>
            <span className={step6 ? "stepDetailSelect" : "stepDetail"}>
              Print
            </span>
          </div>
        </div>
      </div>
    );
  }
}
