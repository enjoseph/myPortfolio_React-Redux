import React from "react";
import NavbarStyle from "../style/Navbar.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { CV } = useSelector((state) => state.document);
  const { language } = useSelector((state) => state.language);
  const { t, i18n } = useTranslation();

  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
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
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a href="">{t("Navbar.home")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a href="#SkillsID">{t("Navbar.skills")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a href="#ProjectID">{t("Navbar.projects")}</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a href="#ProjectID">{t("Navbar.certificates")}</a>
          </motion.li>
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
            <li className={NavbarStyle.connect_BTN}>{t("Navbar.downloadCV")}</li>
          </a>
        </ul>

        <div className={NavbarStyle.languageContainer}>
          <div className={NavbarStyle.language}>
            <ul>
              <li>
                <img onClick={() => clickHandle("en")} title={language.en.lang} src={language.en.IMG} alt="" style={{ width: '30px', height: '30px' }} />
              </li>
              
              
              
              <li>
                <img onClick={() => clickHandle("az")} title={language.az.lang} src={language.az.IMG} alt="" style={{ width: '30px', height: '30px' }} />
              </li>
              <li>
                <img onClick={() => clickHandle("ru")} title={language.ru.lang} src={language.ru.IMG} alt="" style={{ width: '30px', height: '30px' }} />
              </li>
              <li>
                <img onClick={() => clickHandle("tr")} title={language.tr.lang} src={language.tr.IMG} alt="" style={{ width: '30px', height: '30px' }} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
