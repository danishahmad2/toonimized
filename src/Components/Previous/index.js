import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import purpleArrow from "../../Assets/purpleArrow.png";

export default function Previous({ path }) {
  return (
    <div className="previousTxtRow">
      <img alt="" src={purpleArrow} className="purpleArrow" />
      <Link to={path}>
        <p className="purplePreviousTxt">Previous Step</p>
      </Link>
    </div>
  );
}
