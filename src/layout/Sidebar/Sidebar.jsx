import './Sidebar.css'
import { useState } from 'react';
import UserImage from './../../assets/images/user-photo.png'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
function Sidebar({sideBarActive,toggleDisplay}) {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    const handleSidebarClose =() => {

    };
    return (
        <div className='sidebar'>
            <div className="overlay">
                <div className="sidebar-container">
                    <div className="sidebar-close-icon" onClick={toggleDisplay}>
                        <AiOutlineArrowRight />
                    </div>
                    <div className="user-data">
                        <div className="name-location-container">
                            <div className="user-name mb-2">
                                <p>أحمد محمد</p>
                            </div>
                            <div className="location">
                                <FaLocationDot />
                                <p>حمص</p>
                            </div>
                        </div>
                        <div className="user-photo">
                            <img src={UserImage} alt="user photo" />
                        </div>
                    </div>
                    <div className="sidebar-nav-links">
                        <Link to='/recommendations'
                            className={`  ${activeItem === "recommendations" ? "active-nav" : ""
                                }`}
                            onClick={() => handleItemClick('recommendations')}>
                            التوصيات
                        </Link>
                        <Link to='blog'
                            className={`  ${activeItem === "blog" ? "active-nav" : ""
                                }`}
                            onClick={() => handleItemClick('blog')}>
                            المدونة
                        </Link>
                        <Link to='explore'
                            className={`  ${activeItem === "explore" ? "active-nav" : ""
                                }`}
                            onClick={() => handleItemClick('explore')}>
                            استكشف
                        </Link>
                        <Link to='about'
                            className={`  ${activeItem === "about" ? "active-nav" : ""
                                }`}
                            onClick={() => handleItemClick('about')}>
                            عن سوريا
                        </Link>
                        <Link to='/'
                            className={`  ${activeItem === "home" ? "active-nav" : ""
                                }`}
                            onClick={() => handleItemClick('home')}>
                            الرئيسية
                        </Link>
                    </div>
                    <div className="logout">
                    <CiLogout />
                    <p>تسجيل الخروج</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar