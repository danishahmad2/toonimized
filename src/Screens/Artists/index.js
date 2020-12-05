import "./style.css";
import React, { Component } from "react";
import donut from "../../Assets/donut.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import flag from "../../Assets/Artists/flag.png";
import Artists1 from "../../Assets/Artists/1.png";
import Artists2 from "../../Assets/Artists/2.png";
import Artists3 from "../../Assets/Artists/3.png";
import Artists4 from "../../Assets/Artists/4.png";
import Artists5 from "../../Assets/Artists/5.png";
import Artists6 from "../../Assets/Artists/6.png";
import Artists7 from "../../Assets/Artists/7.png";
import Artists8 from "../../Assets/Artists/8.png";
import Artists9 from "../../Assets/Artists/9.png";
import ArtistBox from "../../Components/ArtistBox";
import paper from "../../Assets/Artists/paper.png";
import Artists10 from "../../Assets/Artists/10.png";
import Artists11 from "../../Assets/Artists/11.png";
import Artists12 from "../../Assets/Artists/12.png";
import Artists13 from "../../Assets/Artists/13.png";
import Artists14 from "../../Assets/Artists/14.png";
import Artists15 from "../../Assets/Artists/15.png";
import second from "../../Assets/Artists/second.png";
import monkey from "../../Assets/Artists/monkey.png";
import Circle from "../../Assets/stepHalfCircle.png";
import Circle1 from "../../Assets/rigthStepCircle.png";
import vegitable from "../../Assets/Artists/vegetable.png";

export default class Artist extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="artistsContainer">
        <Header History={history} />
        <img alt="" src={Circle} className="leftCircle" />
        {/* <img alt="" src={Circle1} className="rigthCircle" /> */}
        <div className="artistsBox">
          <p className="artistsTitle">Artists</p>
          <p className="artistsSubTitle">Where skills meet amusement!</p>
          <p className="artistsDetail">
            We’ve gathered together a large amount of beautifully skilled
            artists, each with a unique style, yet each with a finesse talent of
            replying your favourite cartoons. What’s unique about them is that
            they’ve mastered the styles in such ways that it was about time to
            develop something new. And what’s better than doing it for the
            people!
          </p>

          <hr className="artistshr" />

          <div className="artistsRow">
            <ArtistBox
              age="24"
              name="Megan"
              drawing="212+"
              img={Artists1}
              icon={vegitable}
              history={history}
              style="Rick & Morty"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Every artist was first an amateur”"
            />
            <ArtistBox
              age="27"
              icon={donut}
              name="Sarah"
              drawing="189+"
              img={Artists2}
              style="Simpsons"
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“We don’t make mistakes, just happy little accidents”"
            />
            <ArtistBox
              age="36"
              icon={flag}
              name="George"
              drawing="65+"
              img={Artists3}
              history={history}
              style="Dragonball Z"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Art enables us to find ourselves and lose ourselves at the same time.”"
            />
            <ArtistBox
              age="35"
              icon={paper}
              name="Samuel"
              drawing="432+"
              img={Artists4}
              history={history}
              style="South Park"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“You don’t take a photograph, you make it”"
            />
            <ArtistBox
              age="22"
              icon={monkey}
              drawing="329+"
              img={Artists5}
              history={history}
              name="Maria"
              style="Futurama"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Creativity takes courage”"
            />
          </div>

          <div className="artistsRow">
            <ArtistBox
              age="23"
              icon={second}
              drawing="253+"
              img={Artists6}
              history={history}
              name="Sophia"
              style="Dragonball Z"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Every child is an artist. The problem is how to remain an artist once we grow up.”"
            />
            <ArtistBox
              age="24"
              icon={second}
              drawing="194+"
              name="Carolyn"
              img={Artists7}
              history={history}
              style="Family Guy"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“A picture is a poem without words”"
            />
            <ArtistBox
              age="28"
              name="Zion"
              drawing="732+"
              img={Artists8}
              style="Simpsons"
              icon={vegitable}
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Painting is easy when you don’t know how, but very difficult when you do”"
            />
            <ArtistBox
              age="31"
              icon={donut}
              drawing="44+"
              name="Hallie"
              img={Artists9}
              history={history}
              style="Rick & Morty"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“You can’t wait for inspiration, you have to go after it with a club”"
            />
            <ArtistBox
              age="33"
              icon={flag}
              name="Elijah"
              drawing="302+"
              img={Artists10}
              style="Futurama"
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“Creativity comes from a conflict of ideas”"
            />
          </div>

          <div className="artistsRow">
            <ArtistBox
              age="20"
              name="Noah"
              icon={monkey}
              drawing="262+"
              img={Artists11}
              history={history}
              style="South Park"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“If I could say it in words there would be no reason to paint.”"
            />
            <ArtistBox
              age="29"
              icon={flag}
              name="Robert"
              drawing="543+"
              img={Artists12}
              style="Simpsons"
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“I never paint dreams or nightmares. I paint my own reality.”"
            />
            <ArtistBox
              age="30"
              icon={paper}
              name="Jessie"
              drawing="382+"
              img={Artists13}
              history={history}
              style="Rick & Morty"
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“The main thing is to be moved, to love, to hope, to tremble, to live.”"
            />
            <ArtistBox
              age="20"
              name="Mason"
              drawing="23+"
              img={Artists14}
              icon={vegitable}
              style="Futurama"
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“The principles of true art is not to portray, but to evoke”"
            />
            <ArtistBox
              age="19"
              name="Lucas"
              icon={donut}
              drawing="99+"
              img={Artists15}
              style="Simpsons"
              history={history}
              fb="https://facebook.com"
              insta="https://instagram.com"
              motto="“I want to make paintings that look as if they were made by a child.”"
            />
          </div>
        </div>
        <Footer History={this.props.history} />
      </div>
    );
  }
}
