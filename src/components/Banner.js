import React, { useEffect, useState } from "react";
import BannerStyle from "../style/Banner.module.css";
import headerImg from "../assets/bannerComponent/HeaderImage.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function Banner() {
  const text = "Hi! I'm Joseph Web Developer";
  const [bannerText, set_bannerText] = useState("");
  const [loopNum, set_loopNum] = useState(0);
  const [isDeleting, set_isDeleting] = useState(false);

  const { t } = useTranslation();
  const { CV } = useSelector((state) => state.document); 

  useEffect(() => {
    let ticker = setTimeout(() => {
      writeAnimated();
    }, 200);

    return () => clearTimeout(ticker);
  });

  const writeAnimated = () => {
    if (isDeleting) {
      let i = loopNum - 1;
      let updateText = text.substring(0, i);
      set_bannerText(updateText);

      if (loopNum !== 16) {
        set_loopNum(i);
      } else {
        set_isDeleting(false);
      }
    } else {
      let i = loopNum + 1;
      let updateText = text.substring(0, i);

      set_bannerText(updateText);

      if (loopNum !== text.length) {
        set_loopNum(i);
      } else {
        set_isDeleting(true);
      }
    }
  };

  return (
    <section className={BannerStyle.container} id='homeID' >
      {/* Who am I ?*/}
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={BannerStyle.text}
      >
        <h5 className={BannerStyle.welcomeText}>{t("Banner.welcomeText")}</h5>
        <h1 className={BannerStyle.myJob}>
          <span>
            {bannerText} <i className="fa-solid fa-i-cursor fa-fade"></i>
          </span>
        </h1>
        <div>
          <p className={BannerStyle.JobAbout}>{t("Banner.JobAbout")}</p>
          <br />

          {/* Mobil Section Start */}
          <a href={CV} download className={BannerStyle.CV_BTN}>
            <li >
              {t("Navbar.downloadCV")}
            </li>
          </a>
          {/* Mobil Section end */}

          <a href="mailto:yusif.husynov994@gmail.com">
            {t("Banner.letsConnect")}
          </a>
        </div>
      </motion.div>

      {/*Banner icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className={BannerStyle.headerImage}
      >
        <img
          src={headerImg}
          alt="Header Image"
          style={{ width: "100%", height: "100%" }}
        />
      </motion.div>
    </section>
  );
}
