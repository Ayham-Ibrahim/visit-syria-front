import React, { useState } from "react";
import "./BlogPage.css";
import Hero from "../../components/Hero/Hero";
import statue from "../../assets/images/statue.png";

function BlogPage() {
  let list = ["الطبيعية", "الأثرية"];

  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div className="BY_BlogPage">
      <Hero backgroundImage={statue} />
      <div className="BY_container">
        <div className="taps">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                className={activeItem === index ? "active" : ""}
                onClick={() => handleItemClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
