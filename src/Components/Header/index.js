import "./style.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
  state = { items: [] };

  componentDidMount = () => {
    let fetch = localStorage.getItem("orders");
    let items = JSON.parse(fetch);
    this.setState({ items });
  };

  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display = "block";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
  };

  render() {
    const { items } = this.state;
    const { History } = this.props;
    return (
      <div className="haeder">
        <FontAwesomeIcon
          icon="bars"
          className="menuIcon"
          onClick={this.openNav}
        />
        <div className="mobcartBox">
          <FontAwesomeIcon
            className="mobCart"
            icon="shopping-cart"
            onClick={() => (window.location.href = "/shoppingCart")}
          />
          <p className="mobItem">
            {items && items.length ? items.length : "0"}
          </p>
          <img
            alt=""
            className="logo"
            onClick={() => (window.location.href = "/")}
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086643/Logo_hafewu.png"
          />
        </div>
        <div className="haederCenterBox">
          <span onClick={() => (window.location.href = "/")}>Home</span>
          <span onClick={() => (window.location.href = "/gallery")}>
            Gallery
          </span>
          <span onClick={() => (window.location.href = "/pricing")}>
            Pricing
          </span>
          <span onClick={() => (window.location.href = "/artists")}>
            Artists
          </span>
          <span onClick={() => (window.location.href = "/faqs")}>FAQ</span>
        </div>
        <div className="haederIconsBox">
          <img
            alt=""
            className="headIcon"
            onClick={() => (window.location.href = "/shoppingCart")}
            src="https://res.cloudinary.com/dapozvnbr/image/upload/v1600086714/cart_nmnh7f.png"
          />
          <p className="item">{items && items.length ? items.length : "0"}</p>
          <button
            className="start"
            onClick={() => (window.location.href = "/orderstep1")}
          >
            ORDER NOW
          </button>
        </div>
        <div id="mySidenav" className="sidenav">
          <a
            className="closebtn"
            onClick={this.closeNav}
            href="javascript:void(0)"
          >
            &times;
          </a>
          <a href="/orderstep1">Order Now</a>
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/pricing">Pricing</a>
          <a href="/artists">Artists</a>
          <a href="/faqs">FAQ's</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    );
  }
}
