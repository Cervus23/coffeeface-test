import React from "react";
import Button from "../../components/Button";
import "./style.scss";

const Subscribe = ({ width }) => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-container">
        <h2 className="subscribe-title">Subscribe to coffeeface emails</h2>
        <p className="subscribe-text">
          Subscribe to our coffeeface emails and get exclusive first access to
          new products, free surveys, free education and beauty tips, and live &
          virtual events. Unsubscribe anytime. For more information, see our
          privacy policy.
        </p>
        <form className="subscribe-form">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Your email"
          ></input>
          <Button text="Subscribe" width={width <= 375 ? 335 : 203} />
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
