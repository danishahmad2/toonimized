import "./style.css";
import React, { Component } from "react";
import Steps from "../../../Components/Steps";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import Circle from "../../../Assets/stepHalfCircle.png";
import rigthCircle from "../../../Assets/rigthStepCircle.png";
import firebase from "../../../helper";

export default class Step1 extends Component {
  componentDidMount = () => {

    let orders = localStorage.getItem("orders");
    let ordersArray = JSON.parse(orders);
    this.setState({orders:ordersArray})
    console.log("Step1 -> componentDidMount -> ordersArray", ordersArray);
  };

  render() {
    const { history } = this.props;
    return (
      <div className="stepBox1">
        <Header History={history} />
        <Steps />
        <img alt="" src={Circle} className="stepsBigCircles" />
        <img alt="" src={rigthCircle} className="rigthStepCircles" />
        <div className="orderData">
          <h1 className="orderHead">All done!</h1>
          <h4 className="orderSubHead">Your order was placed successfully!</h4>
          <p className="orderSubDisc">
            Would you like to experiment more with the customization process?
          </p>
        </div>

        <div className="orderButRow">
          <button
            className="payBut"
            onClick={() => {
              firebase.analytics().logEvent('add_to_cart',{
                currency:"USD",
                value: (this.state.orders??[]).reduce((prev,cur)=>prev+cur.total , 0),
                items:this.state.orders
              }) 
              history.push("/shoppingCart")
            }}
          >
            finish order & pay
          </button>
          <button
            className="continueBut"
            onClick={() => history.push("/orderstep1")}
          >
            continue shopping
          </button>
        </div>
        <Footer History={this.props.history} />
      </div>
    );
  }
}
