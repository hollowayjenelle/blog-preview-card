import React from "react";
import blogimage from "../../assets/blogimage.svg";
import avatar from "../../assets/avatar.webp";

const Card = () => {
  return (
    <div className="cardContainer">
      <img src={blogimage} alt="blog illustration" />
      <h4>Learning</h4>
      <h5>Published 21 Dec 2023</h5>
      <h3>HTML & CSS foundations</h3>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <div>
        <img src={avatar} alt="blog author" />
        <p>Greg Hooper</p>
      </div>
    </div>
  );
};

export default Card;
