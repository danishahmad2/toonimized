import "./style.css";
import React, { Component } from "react";
import Steps from "../../../Components/Steps";
import hover from "../../../Assets/hover.png";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Cartoon from "../../../Components/Cartoon";
import Previous from "../../../Components/Previous";
import Choose from "../../../Components/ChooseCartoon";
import Circle from "../../../Assets/stepHalfCircle.png";
import goku from "../../../Assets/bubbles/turn-me-goku.png";
import guy from "../../../Assets/bubbles/turn-me-family.png";
import ricck from "../../../Assets/bubbles/turn-me-rick.png";
import Futurama from "../../../Assets/Cartoons/Futurama1.png";
import Simpsons from "../../../Assets/Cartoons/Simpsons1.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import yellow from "../../../Assets/bubbles/turn-me-yellow.png";
import future from "../../../Assets/bubbles/turn-me-future.png";
import Southpark from "../../../Assets/Cartoons/Southpark1.png";
import cartman from "../../../Assets/bubbles/turn-me-cartman.png";
import Dragonball from "../../../Assets/Cartoons/Dragonball1.png";
import Family_Guy from "../../../Assets/Cartoons/Family Guy1.png";
import Rick_Morty from "../../../Assets/Cartoons/Rick and Morty1.png";
import firebase from "../../../helper";

export default class Step1 extends Component {
  state = { select: "", hovering: "" };
  componentDidMount=()=>{
    firebase.analytics().logEvent('visit_order_step_1',{}) 
  }
  enter = (key) => {
    this.setState({ select: [key] });
    localStorage.setItem("selectedCartoon", key);
  };

  hover = (key) => {
    this.setState({ hovering: [key] });
  };

  render() {
    const { history } = this.props;
    const { select, hovering } = this.state;
    return (
      <div className="stepBox1">
        <Header History={history} />
        <Steps />
        <Previous path="/" />
        <img alt="" src={Circle} className="stepsBigCircle" />
        <img alt="" src={rigthCircle} className="rigthStepCircle" />
        <div className="stepTopData">
          <h1 className="stepDataHead">Step 1</h1>
          <h4 className="stepSubHead">Choose a cartoon style!</h4>
          <p className="stepDataPara">
            Choose a cartoon style you wish you’d turn yourself into. <br />
            Add yourself to the story!
          </p>
        </div>
        <div className="stepCartoonRow1">
          <div
            className="standingBox"
            onClick={() => this.enter("simpsons")}
            onMouseOver={() => this.hover("simpsons")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={yellow} big={true} />
            <Cartoon icon={Simpsons} />
            {hovering == "simpsons" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "simpsons" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
          <div
            className="standingBox"
            onClick={() => this.enter("dragon")}
            onMouseOver={() => this.hover("dragon")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={goku} />
            <Cartoon icon={Dragonball} />
            {hovering == "dragon" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "dragon" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
          <div
            className="standingBox"
            onClick={() => this.enter("rick")}
            onMouseOver={() => this.hover("rick")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={ricck} />
            <Cartoon icon={Rick_Morty} />
            {hovering == "rick" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "rick" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
          <div
            className="standingBox"
            onClick={() => this.enter("park")}
            onMouseOver={() => this.hover("park")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={cartman} />
            <Cartoon icon={Southpark} />
            {hovering == "park" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "park" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
          <div
            className="standingBox"
            onClick={() => this.enter("familyguy")}
            onMouseOver={() => this.hover("familyguy")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={guy} className="chooseOptions2" />
            <Cartoon icon={Family_Guy} big={true}/>
            {hovering == "familyguy" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "familyguy" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
          <div
            className="standingBox"
            onClick={() => this.enter("futurama")}
            onMouseOver={() => this.hover("futurama")}
            onMouseLeave={() => this.hover("")}
          >
            <Choose icon={future} />
            <Cartoon icon={Futurama} />
            {hovering == "futurama" && window.innerWidth > 800 && (
              <img alt="" src={hover} className="standHover" />
            )}
            {select == "futurama" && (
              <img alt="" src={hover} className="standHover" />
            )}
          </div>
        </div>
        <div className="stepBottomData1">
          <h1>Choose a style to continue!</h1>
          <p>
            <b>When you made your decision, we are ready to move forward!</b>
          </p>
          <button
            className={select !== "" ? "step1ActiveBut" : "step1But"}
            onClick={select !== "" ? () => history.push("/orderstep2") : null}
          >
            NEXT STEP
          </button>
        </div>
        <Footer History={this.props.history} />
      </div>
    );
  }
}
