import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./ContactSection.css";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";

const ContactSection = () => {
  return (
    <>
      <div className="container  contact-section">
        <div className="row  g-0 ">
          <div className="col-4">
            <div className="row">
              <div className="col-1">
                <FaLocationDot className="social-media-icon" />
              </div>
              <div className="col-11 "> سوريا ـ اللاذقية - طريق طرطوس</div>
            </div>
          </div>
          <div className="col-4">
            <div className="row align-items-center">
              <div className="col-1 p-1 ">
                <img src="/src/assets/icons/website.png" alt="" />
              </div>
              <div className="col-11"> mbrestor-sy.com</div>
            </div>
          </div>
          <div className="col-4">
            <div className="row" style={{ width: "208px" }}>
              <div className="col-3">
                <FaFacebookF className="social-media-icon" />
              </div>
              <div className="col-3">
                <FaInstagram className="social-media-icon" />
              </div>
              <div className="col-3">
                <FaYoutube className="social-media-icon" />
              </div>
              <div className="col-3">
                <FaXTwitter className="social-media-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-1">
                <BsTelephoneFill className="social-media-icon" />
              </div>
              <div className="col-11 "> +963-0988 900 800 </div>
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <div className="col-1">
                <IoIosMail className="social-media-icon" />
              </div>
              <div className="col-11 ">info@mbrestor-sy.com</div>
            </div>
          </div>
          <div className="col-4">
            <div className="row justify-content-end">
              <div className="col-1">
                <TbClockHour3 className="social-media-icon" />
              </div>
              <div className="col-11 ">24 / 24</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
