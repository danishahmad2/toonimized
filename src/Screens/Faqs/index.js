import "./style.css";
import React, { Component } from "react";
import plus from "../../Assets/plus.png";
import arrow from "../../Assets/arrow.png";
import Footer from "../../Components/Footer";
import center from "../../Assets/center.png";
import Header from "../../Components/Header";
import circle1 from "../../Assets/leftCircle.png";
import circle2 from "../../Assets/rightCircle.png";
import paint from "../../Assets/Artists/paint.png";
import center1 from "../../Assets/Artists/center.png";

export default class policy extends Component {
  state = {
    index: null,
    policies: [
      {
        ques: "How long will it take to get my order?",
        ans:
          "Your digital orders usually take between 5 to 8 days to deliver. Everything is hand drawn by our amazing artists",
      },
      {
        ques: "How do I receive my artwork",
        ans:
          "Your orders made from “Toonize” are digital drawings (high resolution PNG file), we will send you your personal peace of art via E-Mail.",
      },
      {
        ques: "How can I print my artwork on something?",
        ans:
          "You can have your drawings printed by choosingone or more products out of our selection. Also, you can choose furtherPrint-on-Products of our partner network.Check out the following link -> (insert link here)\nFurthermore, printing them locally yourself is an alternative option.Digital art can be printed on posters and suitable products of any size without quality loss.",
      },
      {
        ques: "Which payment methods do you accept?",
        ans:
          "We accept the following payment providers: Credit card payment, Paypal and bank transfer.",
      },
      {
        ques: "What If I am not 100% satisfied with my order?",
        ans:
          "Happy customers are our motivation, meaning we work with the best artists to make your gift the “perfect” one. But if for some reason you are unsatisfied, you have the right to ask for revisions of your drawing until you are entirely happy with the result – unlimited revisions!",
      },
      {
        ques: "Can you draw an individual background?",
        ans:
          "Of course, we can simply draw a customized background of your choice. Extra fee of 20 USD applied. ",
      },
      {
        ques: "Do pets count as people?",
        ans:
          "Most other shops would say yes. We are different, we give you a great discount on drawing pets. So, feel free to include your loved ones.\nPeoples:15-20$\nPets: 12$",
      },
      {
        ques: "What Images should I upload?",
        ans:
          "We highly recommend uploading high-quality images where faces, colors, and textures are visible. This way we will be able to get everything right and there will be no need for revisions. Therefore, you can receive your order faster.",
      },
      {
        ques: "We are a large group, can you turn us into cartoons as well?",
        ans:
          "More people more fun! If you have more than 8 people you want to getcartoonized, contact us by sending us an email. We will work it out!",
      },
    ],
  };

  clicked = (index) => {
    if (this.state.index === index) this.setState({ index: null });
    else this.setState({ index });
  };

  render() {
    const { history } = this.props;
    const { policies, index } = this.state;
    return (
      <div>
        <Header History={history} />
        <img alt="" src={circle1} className="policyLeftCircle" />
        <img alt="" src={circle2} className="policyRightCircle" />
        <div className="policyBox">
          <div className="faqsHeaderBox">
            <h1 className="policyHeading">Frequently Asked Questions</h1>
            <h1 className="policyHeading2">Always better to ask...</h1>
            <p className="faqsDisc">
              Are there any questions popping up in your head regarding
              toonimized? <br />
              Maybe they did pop in other’s mind too, so we made sure to cover
              some essential ones.
            </p>
            <div className="seachQuesBox">
              <input
                className="seachQuesInput"
                placeholder="Search for answear...."
              />
              <button className="searchFaqsBut">Search</button>
            </div>
          </div>
        </div>
        <div className="policyDataBox">
          {policies.length &&
            policies.map((e, i) => {
              return (
                <div className="policiesBoxRow" onClick={() => this.clicked(i)}>
                  <div className="policiesRow">
                    <p className="policyTxt1">
                      {i + 1}. {e.ques}
                    </p>
                    <img
                      alt=""
                      src={arrow}
                      className={index == i ? "policyArow2" : "policyArow1"}
                    />
                  </div>
                  {index == i && <p className="asn">{e.ans}</p>}
                </div>
              );
            })}
        </div>
        <div className="tableFaqsBox">
          <img alt="" src={plus} className="plusTable" />
          <img alt="" src={plus} className="plusTable1" />
          <img alt="" src={center} className="centerTable" />
          <img alt="" src={paint} className="faqsPaint" />
          <img alt="" src={center1} className="faqsCenterTable1" />
        </div>
        <Footer History={history} />
      </div>
    );
  }
}
