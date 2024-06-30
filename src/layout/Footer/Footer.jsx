import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import iconx from "../../assets/icons/Vectorx.png";

function Footer() {
  return (
    <footer>
      <div className=" container-fluide footer">
        <div className=" responsive-footer-reverce">
          <div className="line row-social  ">
            <div className="mail">
              <span className="mail-footer">
                <MdEmail />
              </span>
              <span className="email-footer text-center ">
                visit syria @info.sy
              </span>
            </div>
            <div className="icon-footer">
              <span>
                {" "}
                <FaFacebookF />
              </span>
              <span>
                {" "}
                <FaInstagram />{" "}
              </span>
              <span>
                {" "}
                <FaLinkedinIn />
              </span>
              <span>
                {" "}
                <img src={iconx} alt="" className="img-icon" />
              </span>
            </div>
          </div>

          <div className="section-icon-item ">
            <div className="item-footer-1 line-footer">
              <p> معالم و اثار</p>
              <p> اساسيات السفر </p>
              <p> سياسة الخصوصية </p>
            </div>
            <div className="item-footer-2 line-footer">
              <p> ارقام مفيدة</p>
              <p> الاسئلة المتكررة </p>
              <p> التوصيات </p>
            </div>
          </div>
          <div className="logo-footer">
            <p className=" ">
              visit <span>syria</span>
            </p>{" "}
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <h1>
          ©جميع الحقوق محفوظة لوزارة السياحة في الجمهورية العربية السورية - 2024
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
