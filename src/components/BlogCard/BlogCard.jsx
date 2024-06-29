import React from "react";
import "./BlogCard.css";
import { IoLocationOutline } from "react-icons/io5";

const BlogCard = ({ title, location, brief, image, button }) => {
  return (
    <div className="BY_BlogCard">
      <div className="image_container">
        <img src={image} alt="" />
      </div>
      <div className="content_container">
        <div className="title_section">{title}</div>
        <div className="location_section main">
          <IoLocationOutline /> {location}
        </div>
        <div className="brief_section">{brief.slice(0, 167)}...</div>
        <div className="bottom_section">
          <div className="location_section responsive">
            <IoLocationOutline /> {location}
          </div>
          <div className="button_section">{button}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
