import React from "react";
import {
  logo,
  visa,
  amex,
  mastercard,
  jcb,
  discover,
  dinersClub,
} from "../../img/exports";
import "./style.scss";

const footerMenu = [
  "Home page",
  "About coffeface",
  "Coffeface the Community",
  "Privacy Policy",
  "Shipping-Terms",
  "Contact Us",
];

const social = ["facebook", "twitter", "instagram"];

const payments = [
  { id: "visa", img: visa },
  { id: "amex", img: amex },
  { id: "mastercard", img: mastercard },
  { id: "jcb", img: jcb },
  { id: "discover", img: discover },
  { id: "dinersClub", img: dinersClub },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <img className="logo" src={logo} alt="logo" />
          <nav className="footer-menu">
            {footerMenu.map((link, idx) => (
              <a className="nav-link" href="/" key={idx}>
                {link}
              </a>
            ))}
          </nav>
          <div className="social-container">
            {social.map((link, idx) => (
              <a className="social-link" id={link} href="/" key={idx}></a>
            ))}
          </div>
        </div>
        <div className="payment-container">
          {payments.map((link) => (
            <a className="payment-link" href="/" key={link.id}>
              <img className="payment-icon" src={link.img} alt={link.id} />
            </a>
          ))}
        </div>
        <hr />
        <div className="copyright-container">
          <p className="copyright">© 2020, Coffeeface</p>
          <p className="copyright">Powered by Shopify</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
