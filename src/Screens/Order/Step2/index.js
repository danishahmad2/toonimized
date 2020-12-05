import "./style.css";
import React, { Component } from "react";
import Steps from "../../../Components/Steps";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Pricing from "../../../Components/Pricing";
import Previous from "../../../Components/Previous";
import Circle from "../../../Assets/stepHalfCircle.png";
import purpleArrow from "../../../Assets/purpleArrow.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import firebase from "../../../helper";

export default class Step1 extends Component {
  state = {
    pets: 0,
    total: 0,
    peoples: 0,
    show: false,
  };
  componentDidMount=()=>{
    firebase.analytics().logEvent('visit_order_step_2',{}) 
  }
  enter = (key) => this.setState({ select: [key] });

  price = () => this.setState({ show: !this.state.show });

  min = (e) => {
    if (this.state[e] > 0) {
      this.setState({ [e]: this.state[e] - 1 }, () => this.updatePrice());
    }
  };

  plus = (key) => {
    if (this.state[key] < 10) {
      this.setState({ [key]: this.state[key] + 1 }, () => this.updatePrice());
    }
  };

  updatePrice = () => {
    const { peoples, pets } = this.state;
    let total = 0;
    if (pets > 0) total += pets * 13.5;
    if (peoples === 1) total += 22.5;
    if (peoples === 2) total += 45;
    if (peoples === 3) total += 65;
    if (peoples === 4) total += 85;
    if (peoples === 5) total += 102.5;
    if (peoples === 6) total += 120;
    if (peoples === 7) total += 137.5;
    if (peoples === 8) total += 155;
    if (peoples === 9) total += 172.5;
    if (peoples === 10) total += 190;
    this.setState({ total });
  };

  next = () => {
    const { pets, peoples, total } = this.state;
    localStorage.setItem("total", total);
    localStorage.setItem("pets", pets);
    localStorage.setItem("peoples", peoples);
    this.props.history.push("/orderstep3");
  };

  render() {
    const { history } = this.props;
    const { show, peoples, pets } = this.state;
    return (
      <div className="stepBox2">
        <Header History={history} />
        <Steps />
        <Previous path="/orderstep1" />
        <img alt="" src={Circle} className="stepsBigCircle2" />
        <img alt="" src={rigthCircle} className="rigthStepCircle2" />
        <div className="step2TopData">
          <h1 className="step2DataHead">Step 2</h1>
          <h4 className="step2SubHead">Number of people</h4>
          <p className="step2DataPara">
            Choose how many people or animals you’d like to get cartoonized,
            Make sure all people are shown on the uploaded photos!
            <br />
            Contact us in case of a bigger group and we‘ll find a solution.
          </p>
        </div>

        <div
          onClick={this.price}
          data-toggle="collapse"
          href="#collapseExample"
          className="previousTxtRow marLeft"
        >
          <a className="purplePreviousTxt">
            {show ? "See less" : "See prices"}
          </a>
          <img
            alt=""
            src={purpleArrow}
            className={show ? "less" : "seePriceArrow"}
          />
        </div>

        <div id="collapseExample" className="collapse pricingContainerDetail">
          <hr className="pricingHr" />
          <p>People:</p>
          <p>first person / 22,5 USD</p>
          <p>second / +22,5 USD</p>
          <p>third / +20 USD</p>
          <p>fourth / +20 USD</p>
          <p>fifth – tenth / +17,5 USD for each extra person</p>
          <hr className="pricingHr" />
          <p>Pets: 13,5 USD (always)</p>
          <hr className="pricingHr" />
        </div>
        <div className="pricingContainer">
          <Pricing
            title="People"
            min={this.min}
            state="peoples"
            value={peoples}
            plus={this.plus}
            subTitle="(17,5-22,5$/person)"
          />
          <Pricing
            state="pets"
            title="Pets"
            value={pets}
            min={this.min}
            plus={this.plus}
            subTitle="(13,5$/pet)"
          />
        </div>
        <br />
        <button
          onClick={peoples > 0 || pets > 0 ? () => this.next() : null}
          className={peoples > 0 || pets > 0 ? "step1ActiveBut" : "step1But"}
        >
          NEXT STEP
        </button>
        <br />
        <Footer History={this.props.history} />
      </div>
    );
  }
}
