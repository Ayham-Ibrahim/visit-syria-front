import React from "react";
import "./Busra.css";
import Busra2 from "../../../assets/images/Busra1.png";
import PhotoSlider from "../../../shared/PhotoSlider/PhotoSlider";
import img1 from "../../../assets/images/SURİYE BUSRA ROMA ANTİK TİYATRO 6 1.png";
import img2 from "../../../assets/images/2022-01-08 1.png";
import img3 from "../../../assets/images/IMG_20191129_114543 1.png";
import img4 from "../../../assets/images/2023-05-24 1.png";

const Busra = () => {
  //   const array = [img1, img2, img3, img4];
  return (
    <div className="busra">
      <div className="hero">
        <img src={Busra2} alt="" />
      </div>
      <div className="busra-container">
        <h1>مدرج بصرى</h1>
        <p>
          مدرج بصرى هو مدرج روماني يقع في مدينة بصرى السورية، وهو واحد من أروع
          المدرجات الرومانية في العالم. تم بناء المدرج في القرن الاول الميلادي.
          ويتسع ل 25 ألف متفرج، يتميز المدرج بتصميمه الهندسي الرائع، حيث يتكون
          من ثلاثة طوابق، ويحتوي على 186 عمودا من الرخام الابيض، كما يتميز ايضا
          باطلالته الخلابة على مدينة بصرى القديمة. تم استخدام المدرج في الماضي
          للاحتفالات الرياضية والحفلات الموسيقية والعروض المسرحية وقد تم
          استخدامهايضا كمكان للتجمعات العامة والاحتفالات الدينية
        </p>
        <p>
          :وهو واحدا من اهم المعالم السياحية في سوريا ويعد رمزا للثقافة
          الرومانية في المنطقة، اما اهم معلومات عن مدرج بصرى
        </p>
        <ul>
          <li>تم بناء المدرج في القرن الاول الميلادي</li>
          <li>يتسع المدرج ل 25 الف متفرج</li>
          <li>
            يتكون المدرج من ثلاثة طوابق، ويحتوي على 186 عمودا من الرخام الابيض
          </li>
          <li>
            تم ادراج مدرج بصرى على قائمة التراث العالمي لليونسكو في عام 1980
          </li>
        </ul>
        {/* <PhotoSlider imgs={array} /> */}
      </div>
    </div>
  );
};

export default Busra;
