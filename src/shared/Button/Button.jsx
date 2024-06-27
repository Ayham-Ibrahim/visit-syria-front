import { IoIosArrowBack } from "react-icons/io";
import { FaComments } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import "./Button.css";
const Button = (Props) => {
  const renderIcon = () => {
    switch (Props.btnText) {
      case "اقرأ المزيد":
      case "إحجز الآن":
      case "استكشف المزيد":
      case "من هنا":
        return <IoIosArrowBack />;
      case "اكتب تعليق":
        return <FaComments />;
      case "اضف الى المفضلة":
        return <IoHeart />;
      case "تقييم":
        return <IoMdStar />;

      case "ابحث":
      case "تأكيد الدفع"  :
        return "";
    }
  };
  const ButtonStyle = {
    backgroundColor: "#8DD3BB",
    borderColor: "white",
    outline: "solid 1px #8DD3BB",
    borderRadius: `${Props.radius}`,
    // padding: "7.84px 15.69px 7.84px 15.69px",
    // padding: "8.97px 142px 8.97px 142px",
    color: "var(--black_button_tex)",
  };

  return (
    // <div className="col">
    //   {/* <div className={Props.classForSearchButton}> */}
    <button
      type="button"
      className={`btn btn-lg ${Props.className} text-center`}
      style={ButtonStyle}
    >
      {renderIcon()} {Props.btnText}
    </button>
    //   {/* </div> */}
    // {/* </div> */}
  );
};

export default Button;
