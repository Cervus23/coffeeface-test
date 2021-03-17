import React, { useState, useRef, useEffect } from "react";
import { blogBanner, blog1, blog2, blog3, partners } from "../../img/exports";
import "./style.scss";

const blogCards = [
  {
    id: "blog1",
    img: blog1,
    text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print`,
  },
  {
    id: "blog2",
    img: blog2,
    text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print`,
  },
  {
    id: "blog3",
    img: blog3,
    text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print`,
  },
];

const Blog = () => {
  const blogCardsEl = useRef(null);
  const firstCard = useRef(null);
  const lastCard = useRef(null);

  const [position, setPosition] = useState(null);
  const [moving, setMoving] = useState(false);
  const [transform, setTransform] = useState(0);

  const gestureStart = (e) => {
    setPosition(e.pageX);
    setMoving(true);
    const transformMatrix = window
      .getComputedStyle(blogCardsEl.current)
      .getPropertyValue("transform");
    if (transformMatrix !== "none") {
      setTransform(parseInt(transformMatrix.split(",")[4].trim()));
    }
  };

  const gestureMove = (e) => {
    const positionOfFirst = firstCard.current.getBoundingClientRect().x;
    const positionOfLast = lastCard.current.getBoundingClientRect().x;

    if (moving) {
      const currentPosition = e.pageX;
      const diff = currentPosition - position;
      if (
        (positionOfFirst > 20 && diff > 0) ||
        (positionOfLast < 75 && diff < 0)
      ) {
        return;
      } else {
        blogCardsEl.current.style.transform = `translateX(${
          transform + diff
        }px)`;
      }
    }
  };

  const gestureEnd = (e) => {
    setMoving(false);
  };

  useEffect(() => {
    const blogCardsCurrent = blogCardsEl.current;

    if (blogCardsCurrent) {
      blogCardsCurrent.addEventListener("touchdown", gestureStart);
      blogCardsCurrent.addEventListener("touchmove", gestureMove);
      blogCardsCurrent.addEventListener("touchup", gestureEnd);

      blogCardsCurrent.addEventListener("pointerdown", gestureStart);
      blogCardsCurrent.addEventListener("pointermove", gestureMove);
      blogCardsCurrent.addEventListener("pointerup", gestureEnd);
    }

    return () => {
      blogCardsCurrent.removeEventListener("touchdown", gestureStart);
      blogCardsCurrent.removeEventListener("touchmove", gestureMove);
      blogCardsCurrent.removeEventListener("touchup", gestureEnd);

      blogCardsCurrent.removeEventListener("pointerdown", gestureStart);
      blogCardsCurrent.removeEventListener("pointermove", gestureMove);
      blogCardsCurrent.removeEventListener("pointerup", gestureEnd);
    };
  });

  return (
    <div className="blog-section">
      <div className="blog-container">
        <img className="blog-banner" src={blogBanner} alt="blog-banner" />
        <h2 className="blog-title">Blog</h2>
        <div className="blog-cards" ref={blogCardsEl}>
          {blogCards.map((card) => (
            <div
              className="blog-card"
              key={card.id}
              ref={
                card.id === "blog1"
                  ? firstCard
                  : card.id === "blog3"
                  ? lastCard
                  : null
              }
            >
              <img className="blog-img" src={card.img} alt={card.id} />
              <p className="blog-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <img className="partners" src={partners} alt="partners"></img>
    </div>
  );
};

export default Blog;
