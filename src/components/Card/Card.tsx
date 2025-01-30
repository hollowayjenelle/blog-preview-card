import React from "react";
import blogimage from "../../assets/blogimage.svg";
import avatar from "../../assets/avatar.webp";
import "./Card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <img src={blogimage} alt="blog illustration" className="blogImg" />
      <div className="blogInfo">
        <h4 className="blogCategory">Learning</h4>
        <h5 className="blogDate">Published 21 Dec 2023</h5>
        <h3 className="blogTitle">HTML & CSS foundations</h3>
        <p className="blogDesc">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="authorInfo">
        <img src={avatar} alt="blog author" className="authorImg" />
        <p className="authorName">Greg Hooper</p>
      </div>
    </div>
  );
};

export default Card;
