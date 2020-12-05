import "./style.css";
import React, { Component } from "react";

export default class Artist extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="artistBox">
        <div className="artistDataBox">
          <h1 className="artistHead">
            Meet The
            <br />
            Amazing
            <br />
            Artists
          </h1>
          <h3 className="artistHead3">
            Meet the team with the skillest
            <br />
            hands and most vivid vision.
          </h3>
          <p className="artistSmallPara">
            If you are curious and wish to know more about us, we are one call
            away!
            <br />
            Also for any questions about the artists, check FAQ or contact us.
          </p>
          <button
            className="seeArtistBut"
            onClick={() => history.push("/artists")}
          >
            SEE THE ARTISTS
          </button>
        </div>
        <img
          alt=""
          src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600029842/Home/Done_Transparent_1_1_xkc2dg.png"
          className="donutBoy"
        />
      </div>
    );
  }
}
