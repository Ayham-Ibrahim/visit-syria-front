import "./Navbar.css";
import { Link } from "react-router-dom";
import personImage from "./../../assets/images/person-login.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [sideBarActive, setSideBarActive] = useState(false);
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const toggleDisplay = () => {
    setSideBarActive(!sideBarActive);
  };

  return (
    <>
      <div className="navbar z-3">
        <div className="container">
          <div className="login-icon">
            <img src={personImage} alt="person image" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link
                  to="/recommendations"
                  className={`  ${
                    activeItem === "recommendations" ? "active-nav" : ""
                  }`}
                  onClick={() => handleItemClick("recommendations")}
                >
                  التوصيات
                </Link>
              </li>
              <li>
                <Link
                  to="blog/archeological"
                  className={`  ${activeItem === "blog" ? "active-nav" : ""}`}
                  onClick={() => handleItemClick("blog")}
                >
                  المدونة
                </Link>
              </li>
              <li>
                <Link
                  to="explore"
                  className={`  ${
                    activeItem === "explore" ? "active-nav" : ""
                  }`}
                  onClick={() => handleItemClick("explore")}
                >
                  استكشف
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className={`  ${activeItem === "about" ? "active-nav" : ""}`}
                  onClick={() => handleItemClick("about")}
                >
                  عن سوريا
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`  ${activeItem === "home" ? "active-nav" : ""}`}
                  onClick={() => handleItemClick("home")}
                >
                  الرئيسية
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-brand">
            <p>
              <span>Visit</span> Syria
            </p>
          </div>
          <div className="bar-icon" onClick={toggleDisplay}>
            <FaBars />
          </div>
        </div>
      </div>
      {sideBarActive && (
        <Sidebar isActive={sideBarActive} toggleDisplay={toggleDisplay} />
      )}
    </>
  );
}

export default Navbar;
