import React, { useState } from "react";
import { user1 } from "../../img/exports";
import "./style.scss";

const reviews = [
  {
    id: "user1",
    photo: user1,
    active: false,
    username: "Anna T.",
    text: `The passage experienced a surge in popularity during the 1960s 
    when Letraset used it on their dry-transfer sheets, and again during the 
    90s as desktop publishers bundled the text with their software. Today it's 
    seen all around the web; on templates, websites, and stock designs. 
    Use our generator to get your own, or read on for the authoritative 
    history of lorem ipsum.`,
  },
  {
    id: "user2",
    photo: user1,
    active: true,
    username: "Anna K.",
    text: `The passage experienced a surge in popularity during the 1960s 
    when Letraset used it on their dry-transfer sheets, and again during the 
    90s as desktop publishers bundled the text with their software. Today it's 
    seen all around the web; on templates, websites, and stock designs. 
    Use our generator to get your own, or read on for the authoritative 
    history of lorem ipsum.`,
  },
  {
    id: "user3",
    photo: user1,
    active: false,
    username: "Anna F.",
    text: `The passage experienced a surge in popularity during the 1960s 
    when Letraset used it on their dry-transfer sheets, and again during the 
    90s as desktop publishers bundled the text with their software. Today it's 
    seen all around the web; on templates, websites, and stock designs. 
    Use our generator to get your own, or read on for the authoritative 
    history of lorem ipsum.`,
  },
];

const Reviews = () => {
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
    <div className="reviews-section">
      <h2 className="reviews-title">Testimonials</h2>
      <div className="slider">
        <button
          className="slide-btn left"
          onClick={() => onClickHandler("left")}
        ></button>
        <button
          className="slide-btn right"
          onClick={() => onClickHandler("right")}
        ></button>
      </div>
      <div className={`reviews-container side${side}`}>
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <img
              className="user-photo"
              src={review.photo}
              alt={review.username}
            />
            <p className="user-name">{review.username}</p>
            <p className="user-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
