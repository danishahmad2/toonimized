import "./style.css";
import React, { Component } from "react";
import PNG from "../../../Assets/PNG.png";
import Steps from "../../../Components/Steps";
import jacket from "../../../Assets/jacket.png";
import tick from "../../../Assets/stepTick.png";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Previous from "../../../Components/Previous";
import Circle from "../../../Assets/stepHalfCircle.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import firebase from "../../../helper";

export default class Step1 extends Component {
  state = {
    pets: "",
    body: "",
    notes: "",
    select: "",
    peoples: "",
    cartoon: "",
    background: "",
    cartoonized: [],
    ordersArray: [],
  };

  componentDidMount = () => {
    firebase.analytics().logEvent('visit_order_step_6',{}) 
    let pets = localStorage.getItem("pets");
    let body = localStorage.getItem("body");
    let total = localStorage.getItem("total");
    let peoples = localStorage.getItem("peoples");
    let notes = localStorage.getItem("notes") || "";
    let background = localStorage.getItem("background");
    let cartoon = localStorage.getItem("selectedCartoon");
    let cartoonizedObj = localStorage.getItem("cartoonized");
    let cartoonized = JSON.parse(cartoonizedObj);
    this.setState({
      body,
      pets,
      notes,
      total,
      peoples,
      cartoon,
      background,
      cartoonized,
    });
    try {
      let orders = localStorage.getItem("orders");
      let ordersArray = JSON.parse(orders) || [];
      this.setState({ ordersArray });
    } catch (error) {
      console.log("error", error);
    }
  };

  select = (e) => {
    this.setState({ select: [e] });
  };

  done = async () => {
    const {
      body,
      pets,
      notes,
      total,
      select,
      peoples,
      cartoon,
      background,
      cartoonized,
      ordersArray,
    } = this.state;
    var array = ordersArray.length ? [...ordersArray] : [];
    array.push({
      body,
      pets,
      notes,
      total,
      select,
      peoples,
      cartoon,
      background,
      cartoonized,
    });
    localStorage.setItem("orders", JSON.stringify(array));
    this.props.history.replace("/orderDone");
  };

  render() {
    const { history } = this.props;
    const { select } = this.state;
    return (
      <div className="stepBox1">
        <Header History={history} />
        <Steps />
        <Previous path="/orderstep5" />
        <img alt="" src={Circle} className="stepsBigCircle" />
        <img alt="" src={rigthCircle} className="rigthStepCircle" />
        <div className="stepTopData">
          <h1 className="stepDataHead">Step 6</h1>
          <h4 className="stepSubHead">Print on products</h4>
          <p className="stepSubHead">
            How would you like to receive the cartoon version of yourself?
          </p>
        </div>

        <div className="cartoonVersion">
          <div className="pngBg">
            <div
              className={select == "PNG" ? "pngActive" : "pngVersion"}
              onClick={() => this.select("PNG")}
            >
              <img alt="" src={PNG} className="PNG" />
              <p className="PNGTitle">Get it as a PNG</p>
              {select == "PNG" && <img alt="" src={tick} className="PNGtick" />}
            </div>
          </div>
          <div className="jacketVersion">
            <img alt="" src={jacket} className="jacket" />
            <p className="jacketTitle">Print on products</p>
            <div className="jacketBottom">
              <p className="jacketDisc">*coming soon*</p>
            </div>
          </div>
        </div>

        <div className="version">
          <div className="jacketDetail">
            <p>
              *Will be available in the further steps, we will notify you when
              you are able to choose the products.
            </p>
          </div>
        </div>

        <button
          className={select !== "" ? "step1ActiveBut" : "step1But"}
          onClick={select !== "" ? () => this.done() : null}
        >
          NEXT STEP
        </button>
        <span className="discTxt">Choose at least one option to continue</span>
        <Footer History={history} />
      </div>
    );
  }
}
