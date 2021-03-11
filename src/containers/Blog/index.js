import React from "react";
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
  return (
    <div className="blog-section">
      <div className="blog-container">
        <img className="blog-banner" src={blogBanner} alt="blog-banner" />
        <h2 className="blog-title">Blog</h2>
        <div className="blog-cards">
          {blogCards.map((card) => (
            <div className="blog-card" key={card.id}>
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
