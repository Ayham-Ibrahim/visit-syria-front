import React, { useEffect, useState } from "react";
import BlogPage from "../BlogPage";
import "./Archeological.css";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const Archeological = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogs")
      .then((res) => setData(res.data))
      // .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);
  return (
    <div className="arch">
      <BlogPage />
      {data.map((element, index) => {
        return (
          <div className="arch-card" key={index}>
            <img src={element.main_image} alt={element.title} />
            <div className="arch-card-info">
              <h1>{element.title}</h1>
              <p className="arch-location">
                درعا
                <IoLocationOutline />
              </p>
              <p className="arch-description">{element.content}</p>
              <Link to={"/blog/archeological/busra"}> {"<"} اقرأ المزيد</Link>
            </div>
          </div>
        );
      })}
      {/* <img src={Busra} alt="" />
        <div className="arch-card-info">
          <h1>مدرج بصرى</h1>
          <p className="arch-location">
            درعا
            <IoLocationOutline />
          </p>
          <p className="arch-description">
            مدرج بصرى هو مدرج روماني يقع في مدينة بصرى السورية وهو واحد من اروع
            المدرجات الرومانية في العالم تم بناء المدرج في القرن الاول الميلادي
            مدرج بصرى هو مدرج روماني يقع في مدينة بصرى السورية وهو واحد من اروع
            المدرجات الرومانية في العالم تم بناء المدرج في القرن الاول الميلادي
            ويتسع ل 25 الف متفرج ويتسع ل 25 الف متفرج
          </p>
          <Link to={"/blog/archeological/busra"}> {"<"} اقرأ المزيد</Link>
        </div> */}
    </div>
  );
};

export default Archeological;
