import React, { useEffect, useState } from "react";
import BlogPage from "../BlogPage";
import "./Archeological.css";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../../../components/Pagination/Pagination";

const Archeological = () => {
  const [data, setData] = useState([]);
  const handlePageChange = (page) => {
    console.log("Page changed to:", page);
  };

  // fetching the data
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  // a function to limit the characters of card content
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

  return (
    <div className="arch">
      <BlogPage />
      <div className="arch-card-container">
        {data.map((element, index) => {
          return (
            <div className="arch-card" key={index}>
              <div className="arch-card-image">
                <img
                  src={`http://127.0.0.1:8000/${element.main_image}`}
                  alt={element.title}
                />
              </div>
              <div className="arch-card-info">
                <h1>{element.title}</h1>
                <p className="arch-location">
                  درعا
                  <IoLocationOutline />
                </p>
                <p className="arch-description">
                  {truncateText(element.content, 200)}
                </p>
                <div className="location-and-btn">
                  <div className="location-responsive">
                    درعا
                    <IoLocationOutline />
                  </div>
                  <Link to={"/blog/archeological/busra"}>
                    {"<"} اقرأ المزيد
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination_section">
        <Pagination
          pageCount={5}
          currentPage={1}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Archeological;
