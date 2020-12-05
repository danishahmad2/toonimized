import "./style.css";
import React, { Component } from "react";
import plus from "../../Assets/plus.png";
import Footer from "../../Components/Footer";
import center from "../../Assets/center.png";
import Header from "../../Components/Header";
import table from "../../Assets/paintTable.png";
import circle1 from "../../Assets/leftCircle.png";
import circle2 from "../../Assets/rightCircle.png";
import center1 from "../../Assets/Artists/center.png";

export default class policy extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header History={history} />
        <img alt="" src={circle1} className="policyLeftCircle" />
        <img alt="" src={circle2} className="policyRightCircle" />
        <div className="policyBox">
          <div className="policyHeaderBox">
            <h1 className="policyHeading">Privacy Policy</h1>
          </div>
        </div>
        <div className="policyDataBox1">
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
            woollychild.com (the “Site”).
          </p>
        </div>

        <div className="policyDataBox1">
          <p className="policyTxt">Personal information we collect</p>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that
            you view, what websites or search terms referred you to the Site,
            and information about how you interact with the Site. We refer to
            this automatically-collected information as “Device Information”.
            <br />
            <br />
            We collect Device Information using the following technologies: -
            “Cookies” are data files that are placed on your device or computer
            and often include an anonymous unique identifier. For more
            information about cookies, and how to disable cookies, visit
            http://www.allaboutcookies.org.
            <br />- “Log files” track actions occurring on the Site, and collect
            data including your IP address, browser type, Internet service
            provider, referring/exit pages, and date/time stamps.
            <br />- “Web beacons”, “tags”, and “pixels” are electronic files
            used to record information about how you browse the Site.
            <br />
            <br />
            Additionally when you make a purchase or attempt to make a purchase
            through the Site, we collect certain information from you, including
            your name, billing address, shipping address, payment information
            (including credit card numbers, email address, and phone number. We
            refer to this information as “Order Information”.
            <br />
            <br />
            When we talk about “Personal Information” in this Privacy Policy, we
            are talking both about Device Information and Order Information.
          </p>
        </div>

        <div className="policyDataBox1">
          <p className="policyTxt">How do we use your personal information?</p>
          <p>
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site (including processing your
            payment information, arranging for shipping, and providing you with
            invoices and/or order confirmations). Additionally, we use this
            Order Information to:
            <br />
            - Communicate with you;
            <br />
            - Screen our orders for potential risk or fraud; and
            <br />
            - When in line with the preferences you have shared with us, provide
            you with
            <br />
            information or advertising relating to our products or services.
            <br />
            <br />
            We use the Device Information that we collect to help us screen for
            potential risk and fraud (in particular, your IP address), and more
            generally to improve and optimize our Site (for example, by
            generating analytics about how our customers browse and interact
            with the Site, and to assess the success of our marketing and
            advertising campaigns).
          </p>
        </div>
        <div className="tableBox">
          <img alt="" src={plus} className="plusTableP" />
          <img alt="" src={plus} className="plusTable1P" />
          <img alt="" src={center} className="centerTableP" />
          <img alt="" src={center1} className="centerTable1" />
        </div>
        <Footer History={history} />
      </div>
    );
  }
}
