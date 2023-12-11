import React, { useState } from "react";
import NavbarStyle from "../style/Navbar.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import EN from "../assets/navbarComponent/eng.png";
import AZ from "../assets/navbarComponent/aze.png";
import RU from "../assets/navbarComponent/rus.png";
import TR from "../assets/navbarComponent/tr.png";

export default function Navbar() {
  console.log("Rendering Navbar");

  const { CV } = useSelector((state) => state.document);

  const language = [
    {
      lang: "en",
      IMG: EN,
    },
    {
      lang: "az",
      IMG: AZ,
    },
    {
      lang: "ru",
      IMG: RU,
    },
    {
      lang: "tr",
      IMG: TR,
    },
  ];

  const [lang, setLanguage] = useState(language);

  const { t, i18n } = useTranslation();

  const navItem = ["home", "skills", "projects", "certificates"];

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 1 }} // Animasyon süresi ve gecikme
      className={NavbarStyle.container}
    >
      {/* Brand Name */}
      <div className={NavbarStyle.BrandName}>
        <a href="">Logo</a>
      </div>

      {/* Navigation */}
      <div className={NavbarStyle.navItem}>
        <ul>
          {navItem.map((item, index) => {
            return (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <a href="">{t(`Navbar.${item}`)}</a>
              </motion.li>
            );
          })}
        </ul>

        <ul>
          <a target="_blank" href="https://www.instagram.com/enjoseph7/">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={NavbarStyle.SM_icon}
            >
              <i className="fa-brands fa-instagram "></i>
            </motion.div>
          </a>
          <a target="_blank" href="mailto:yusif.husynov994@gmail.com">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={NavbarStyle.SM_icon}
            >
              <i className="fa-brands fa-google "></i>
            </motion.div>
          </a>
          <a target="_blank" href="https://github.com/enjoseph">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={NavbarStyle.SM_icon}
            >
              <i className="fa-brands fa-github"></i>
            </motion.div>
          </a>
          <a href={CV} download>
            <li className={NavbarStyle.connect_BTN}>
              {t("Navbar.downloadCV")}
            </li>
          </a>
        </ul>
      </div>

      <div className={NavbarStyle.languageContainer}>
        <div className={NavbarStyle.language}>
          <ul>
            {lang.map((lang) => {
              return (
                <li>
                  <img
                    onClick={() => clickHandle("en")}
                    title={lang.lang}
                    src={lang.IMG}
                    alt=""
                    style={{ width: "30px", height: "30px" }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// <li>
// <img
//   onClick={() => clickHandle("az")}
//   title={lang.az.lang}
//   src={lang.az.IMG}
//   alt=""
//   style={{ width: "30px", height: "30px" }}
// />
// </li>
// <li>
// <img
//   onClick={() => clickHandle("ru")}
//   title={lang.ru.lang}
//   src={lang.ru.IMG}
//   alt=""
//   style={{ width: "30px", height: "30px" }}
// />
// </li>
// <li>
// <img
//   onClick={() => clickHandle("tr")}
//   title={lang.tr.lang}
//   src={lang.tr.IMG}
//   alt=""
//   style={{ width: "30px", height: "30px" }}
// />
// </li>
