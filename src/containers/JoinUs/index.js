import React from "react";
import { joinUs1, joinUs2, joinUs3, joinUsInsta } from "../../img/exports";
import "./style.scss";

const slider = [
  { id: "slide1", img: joinUs1 },
  { id: "slide2", img: joinUs2 },
  { id: "slide3", img: joinUs3 },
  { id: "slide4", img: joinUs1 },
  { id: "slide5", img: joinUs2 },
  { id: "slide6", img: joinUs3 },
];

const JoinUs = () => {
  return (
    <div className="joinUs-section">
      <h2 className="joinUs-title">@coffee_face</h2>
      <div className="slider-container">
        <button className="slide-btn left" />
        {slider.map((slide) => (
          <img
            className="slide"
            key={slide.id}
            src={slide.img}
            alt={slide.id}
          />
        ))}
        <button className="slide-btn right" />
      </div>
      <a className="joinUs-slogan" href="/">
        <img className="joinUs-insta" src={joinUsInsta} alt="instagram" />
        <p className="slogan-text">
          JOIN US on instagram for new products, great giveaways and more!
        </p>
      </a>
    </div>
  );
};

export default JoinUs;
