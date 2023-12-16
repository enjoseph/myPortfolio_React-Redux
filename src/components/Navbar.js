import React, { useState } from "react";
import NavbarStyle from "../style/Navbar.module.css";
import { color, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import EN from "../assets/navbarComponent/eng.png";
import AZ from "../assets/navbarComponent/aze.png";
import RU from "../assets/navbarComponent/rus.png";
import TR from "../assets/navbarComponent/tr.png";
import MenuComponent from "./MenuComponent";
import { setIsActive } from "../stores/burgerMenuSlice";
import { set_isActiveLang } from "../stores/languageSlice";
import logo from "../assets/Logo/logo.png";

export default function Navbar() {
  console.log("Rendering Navbar");
  const { CV } = useSelector((state) => state.document);

  const { isActive } = useSelector((state) => state.burgerMenu);
  const dispatch = useDispatch();

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

  const { isActiveLang } = useSelector((state) => state.language);
  const [lang, setLanguage] = useState(language);

  const { t, i18n } = useTranslation();

  const navItem = ["home", "skills", "projects"];
  console.log(isActiveLang + 'nAVBAR');

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    dispatch(set_isActiveLang(false));
  };

  const handleClickLang = () => {
    dispatch(set_isActiveLang(!isActiveLang));
    console.log(isActiveLang);
  };


  const handleNavLinkClick = (e, item) => {
    e.preventDefault();
    const element = document.getElementById(`${item}ID`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBurgerMenu = () => {
    if (isActive) {
      dispatch(setIsActive(false));
    } else {
      dispatch(setIsActive(true));
    }
  };

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, delay: 1 }} // Animasyon süresi ve gecikme
        className={NavbarStyle.container}
      >
        {/* Brand Name */}
        <div className={NavbarStyle.BrandName}>
          <img src={logo} alt="Main Logo" />
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
                  <a   onClick={(e) => handleNavLinkClick(e, item)} >{t(`Navbar.${item}`)} </a>
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
          <i onClick={handleClickLang} className="fa-solid fa-globe"></i>
          <motion.ul
            variants={container}
            initial="hidden"
            animate={isActiveLang ? "visible" : "hidden"}
            className={`${NavbarStyle.languages} ${
              isActiveLang ? NavbarStyle.isActive : ""
            }`}
          >
            {lang.map((lang, index) => (
              <motion.li key={index} variants={item}>
                <motion.img
                  onClick={() => clickHandle(lang.lang)}
                  title={lang.lang}
                  src={lang.IMG}
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <i onClick={handleBurgerMenu} className="fa-solid fa-bars"></i>
      </motion.div>
      {isActive ? <MenuComponent navItem={navItem} /> : null}
    </>
  );
}
