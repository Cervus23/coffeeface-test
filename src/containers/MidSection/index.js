import React from "react";
import Button from "../../components/Button";
import {
  discountProduct,
  handWashing,
  treatment,
  waiting,
} from "../../img/exports";
import "./style.scss";

const stars = [1, 2, 3, 4, 5];

const howToUse = [
  { id: "handWashing", img: handWashing, text: "Wash your face" },
  { id: "treatment", img: treatment, text: "Apply on the skin" },
  { id: "waiting", img: waiting, text: "Wait 5 minutes" },
];

const MidSection = () => {
  return (
    <div className="mid-section">
      <div className="discount-container">
        <div className="img-container">
          <img
            className="discount-product"
            src={discountProduct}
            alt="product"
          />
        </div>
        <div className="discount-text-container">
          <h2 className="discount-title">
            3-in-1 Pads Exfoliate. Serum. Moisturize.
          </h2>
          <div className="reviews-container">
            <p className="reviews-text">Reviews</p>
            <div className="stars">
              {stars.map((star) => (
                <div
                  className={star === 5 ? "star" : "star rated"}
                  key={star}
                ></div>
              ))}
            </div>
          </div>
          <p className="discount-text">
            Stabilized caffeine works hard to immediately stimulate collagen
            production in your skin, plus it provides a wake-you-up tightening
            effect.
          </p>
          <div className="price-container">
            <p className="old-price">&nbsp; $84.99 &nbsp;</p>
            <p className="new-price">$64.99</p>
          </div>
          <Button text={"Buy it now"} />
        </div>
      </div>
      <div className="banner-section">
        <h2 className="banner-title">
          Exfoliate.
          <br /> Serum. <br />
          Moisturize.
        </h2>
      </div>
      <div className="HTU-section">
        <h2 className="HTU-title">How to use the CoffeeFace</h2>
        <div className="HTU-container">
          {howToUse.map((item) => (
            <div className="HTU-item" key={item.id}>
              <div className="HTU-item-img-container">
                <img className="HTU-item-img" src={item.img} alt={item.id} />
              </div>

              <p className="HTU-item-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
