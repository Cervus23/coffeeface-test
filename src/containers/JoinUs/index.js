import React, { useState } from "react";
import { joinUs1, joinUs2, joinUs3, joinUsInsta } from "../../img/exports";
import "./style.scss";

const slider = [
  [
    { id: "slide1", img: joinUs1 },
    { id: "slide2", img: joinUs2 },
    { id: "slide3", img: joinUs3 },
    { id: "slide4", img: joinUs1 },
    { id: "slide5", img: joinUs2 },
    { id: "slide6", img: joinUs3 },
  ],
  [
    { id: "slide7", img: joinUs1 },
    { id: "slide8", img: joinUs2 },
    { id: "slide9", img: joinUs3 },
    { id: "slide10", img: joinUs1 },
    { id: "slide11", img: joinUs2 },
    { id: "slide12", img: joinUs3 },
  ],
  [
    { id: "slide13", img: joinUs1 },
    { id: "slide14", img: joinUs2 },
    { id: "slide15", img: joinUs3 },
    { id: "slide16", img: joinUs1 },
    { id: "slide17", img: joinUs2 },
    { id: "slide18", img: joinUs3 },
  ],
];
// const slider = [
//   { id: "slide1", img: joinUs1 },
//   { id: "slide2", img: joinUs2 },
//   { id: "slide3", img: joinUs3 },
//   { id: "slide4", img: joinUs1 },
//   { id: "slide5", img: joinUs2 },
//   { id: "slide6", img: joinUs3 },
// ];

const JoinUs = () => {
  const [side, setSide] = useState(1);

  const onClickHandler = (slide) => {
    if (slide === "left" && side > 0) {
      setSide(side - 1);
    }
    if (slide === "right" && side < 2) {
      setSide(side + 1);
    }
  };
  return (
    <div className="joinUs-section">
      <h2 className="joinUs-title">@coffee_face</h2>
      <div className="slider-container">
        <div className="btns">
          <button
            className="slide-btn left"
            onClick={() => onClickHandler("left")}
          />
          <button
            className="slide-btn right"
            onClick={() => onClickHandler("right")}
          />
        </div>
        <div className={`slides-container side${side}`}>
          {slider.map((slides) => (
            <div className="slides">
              {slides.map((slide) => (
                <img
                  className="slide"
                  key={slide.id}
                  src={slide.img}
                  alt={slide.id}
                />
              ))}
            </div>
          ))}
        </div>
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
