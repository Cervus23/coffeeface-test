import React from "react";
import { logo, bannerHeader } from "../../img/exports";
import Button from "../../components/Button/index";
import "./style.scss";

const navItems = ["Home", "Shop", "About", "What is Coffeeface", "Contact"];

const Header = () => {
  const goods = 3;

  return (
    <div className="header">
      <div className="top-bar">Free shipping over $100</div>
      <div className="header-main">
        <img className="logo" src={logo} alt="logo" />
        <nav className="nav-bar">
          {navItems.map((link, idx) => (
            <a className="nav-link" href="/#" key={idx}>
              {link}
            </a>
          ))}
        </nav>
        <div className="cart-container">
          <div className="goods">{goods}</div>
        </div>
      </div>
      <div className="banner-container">
        <img className="banner-img" src={bannerHeader} alt="banner" />
        <div className="banner-content">
          <h1 className="banner-title">
            A Revolution in Antibacterial, Antiviral Facial Cleaning
          </h1>
          <p className="banner-text">
            Manuka honey antibacterial properties that help protect and seal
            your skin
          </p>
          <Button text={"Shop now"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
