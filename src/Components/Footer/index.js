import "./style.css";
import React, { Component } from "react";
import master from "../../Assets/cards.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { mailchimp_url } from "../../helper";
import Mailchimp from "react-mailchimp-subscribe";

export default class Footer extends Component {
  state = {
    email: "",
    faq: false,
    home: false,
    contact: false,
    customize: false,
  };

  componentDidMount = () => {
    let path = window.location.pathname;
    if (path == "/") this.setState({ home: true });
    if (
      path == "/orderstep1" ||
      path == "/orderstep2" ||
      path == "/orderstep3" ||
      path == "/orderstep4" ||
      path == "/orderstep5" ||
      path == "/orderstep6" ||
      path == "orderDone"
    )
      this.setState({ customize: true });
    if (path == "/faqs") this.setState({ faq: true });
    if (path == "/contact") this.setState({ contact: true });
  };

  saveEmail = () => {
    // do something with email
    console.log("email =>", this.state.email);
  };

  render() {
    const { faq, home, contact, customize } = this.state;
    return (
      <div className="footerContainer">
        <div className="footerBox">
          <div className="footBox1">
            <img
              alt=""
              className="footLogo"
              onClick={() => (window.location.href = "/")}
              src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo__nye4vn.png"
            />
            <div className="socialRow">
              <a
                href="https://www.facebook.com/Toonizedcom-106348711193090"
                className="sociala"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="socialFootIcon"
                />
              </a>
              <a
                href="https://www.instagram.com/toonimized_art/"
                className="sociala"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="socialFootIcon"
                />
              </a>
            </div>
          </div>
          <div className="footBox2">
            <p
              onClick={() => (window.location.href = "/")}
              className={home ? "footOption1" : "footOption"}
            >
              Home
            </p>
            <p
              onClick={() => (window.location.href = "/orderstep1")}
              className={customize ? "footOption1" : "footOption"}
            >
              Customize Now!
            </p>
            <p
              onClick={() => (window.location.href = "/faqs")}
              className={faq ? "footOption1" : "footOption"}
            >
              FAQ
            </p>
            <p
              onClick={() => (window.location.href = "/contact")}
              className={contact ? "footOption1" : "footOption"}
            >
              Contact
            </p>
          </div>
          <div className="footBox3">
            <p className="footOption">Let’s keep in touch!</p>
            <p className="footDetail">
              Join our newsletter to stay up to date to latest discounts,
              promotions and orders.
            </p>
            <div className="inptBox">
              <Mailchimp
                url={mailchimp_url}
                render={({ subscribe, status, message }) => (
                  <form id="mailChimp_footer"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (
                        this.state.email &&
                        /\S+@\S+\.\S+/.test(this.state.email)
                      ) {
                        subscribe({ EMAIL: this.state.email, NAME: "" });
                      } else {
                        this.setState({ error: "Invalid Email" });
                      }
                    }}
                  >
                    <input
                      type="email"
                      className="footInput"
                      placeholder="Enter your email address"
                      onChange={(e) =>
                        this.setState({ email: e.target.value, error: null })
                      }
                    />
                    <FontAwesomeIcon
                      icon="paper-plane"
                      className="planeIcon"
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          this.state.email &&
                          /\S+@\S+\.\S+/.test(this.state.email)
                        ) {
                          subscribe({ EMAIL: this.state.email, NAME: "" });
                        } else {
                          this.setState({ error: "Invalid Email" });
                        }
                      }}
                    />
                    {this.state.error && (
                      <span style={{ float: "left", color: "red" }}>
                        {this.state.error}
                      </span>
                    )}
                    {status == "error" && (
                      <span style={{ float: "left", color: "red" }}>
                        Already subscribed
                      </span>
                    )}
                    {status == "sending" && (
                      <span style={{ float: "left" }}>Sending...</span>
                    )}
                    {status == "success" && (
                      <span style={{ float: "left", color: "green" }}>
                        Email sent
                      </span>
                    )}
                  </form>
                )}
              />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>© 2020 Make me Yellow. All right reserved.</p>
          <img alt="" src={master} className="footerCard" />
          <p className="tos" onClick={() => (window.location.href = "/terms")}>
            Terms of Service
          </p>
          <p className="tos" onClick={() => (window.location.href = "/policy")}>
            Privacy Policy
          </p>
        </div>
      </div>
    );
  }
}
