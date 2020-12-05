import "./style.css";
import React, { Component } from "react";
import donut from "../../Assets/donut.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import candy1 from "../../Assets/Candy/candy1.png";
import candy2 from "../../Assets/Candy/candy2.png";
import candy3 from "../../Assets/Candy/candy3.png";
import candy4 from "../../Assets/Candy/candy4.png";
import candy5 from "../../Assets/Candy/candy5.png";
import candy6 from "../../Assets/Candy/candy6.png";
import candy7 from "../../Assets/Candy/candy7.png";
import candy8 from "../../Assets/Candy/candy8.png";

export default class Contact extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="contactContainer">
        <Header History={history} />
        <div className="contactBoxRow">
          <div className="contactBox">
            <div className="contactBoxData">
              <p className="contactTitle">Hi, there!</p>
              <p className="contactDics">
                We’re excited to meet you, let us a note!
              </p>
              <div>
                <p className="contactLable">Full Name</p>
                <input
                  className="contactInput"
                  placeholder="Write your full name...."
                />
              </div>
              <div>
                <p className="contactLable">E-mail Address</p>
                <input
                  className="contactInput"
                  placeholder="Write your e-mail...."
                />
              </div>
              <div>
                <p className="contactLable">What would you like us to know?</p>
                <textarea
                  className="contactArea"
                  placeholder="Thank you for "
                />
              </div>
              <div className="characterRow">
                <input type="checkbox" id="c1" name="cb" />
                <label for="c1">I accept the privacy policy.</label>
              </div>
              <button className="sendMessageBut">send message</button>
            </div>
          </div>
          <div className="contactDonutBox">
            <img alt="" src={candy1} className="candies candy1" />
            <img alt="" src={candy2} className="candies candy2" />
            <img alt="" src={candy3} className="candies candy3" />
            <img alt="" src={candy4} className="candies candy4" />
            <img alt="" src={candy5} className="candies candy5" />
            <img alt="" src={candy6} className="candies candy6" />
            <img alt="" src={candy7} className="candies candy7" />
            <img alt="" src={candy8} className="candies candy8" />
            <img alt="" src={candy8} className="candies candy9" />
            <img alt="" src={candy8} className="candies candy10" />
            <img alt="" src={candy6} className="candies candy11" />
            <img alt="" src={candy3} className="candies candy12" />
            <img alt="" src={candy8} className="candies candy13" />
            <img alt="" src={donut} className="contactDonut1" />
            <img alt="" src={donut} className="contactDonut2" />
            <div className="contactDonut3Box">
              <img alt="" src={donut} className="contactDonut3" />
            </div>
          </div>
        </div>
        <Footer History={history} />
      </div>
    );
  }
}
