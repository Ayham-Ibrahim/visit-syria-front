import React, { useState } from "react";
import statue from "../../assets/images/statue.png";
import "./BlogPage.css";
import { NavLink } from "react-router-dom";

function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-header">
        <img src={statue} alt="" />
        <div className="blog-tabs">
          <NavLink
            to={"/blog/archeological"}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            الأثرية
          </NavLink>
          <NavLink
            to={"/blog/nature"}
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            الطبيعة
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
