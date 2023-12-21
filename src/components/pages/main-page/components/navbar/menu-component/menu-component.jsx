import React from "react";

// Style Module 
import Style from "./menu.module.css";

// Framer Motion
import {  motion } from "framer-motion";

// i18next
import { useTranslation } from "react-i18next";

// Redux
import { useDispatch } from "react-redux";

//Reducer
import { setIsActive } from "../../../../../../stores/burgerMenuSlice";

export default function MenuComponent({ navItem }) {
  const { t } = useTranslation();

  const dispatch = useDispatch()


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


  const handleNavLinkClick = (e, item) => {
    dispatch(setIsActive(false));
    e.preventDefault();
    const element = document.getElementById(`${item}ID`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      className={Style.burgerMenu}
    >
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className={Style.burgerItem}
      >
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
      </motion.ul>

      <motion.ul initial="hidden" animate="visible" variants={container}>
        <a target="_blank" href="https://www.instagram.com/enjoseph7/">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={Style.SM_icon}
            variants={item}
          >
            <i
              className="fa-brands fa-instagram "
              style={{ color: "#E1306C" }}
            ></i>
          </motion.div>
        </a>
        <a target="_blank" href="mailto:yusif.husynov994@gmail.com">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={Style.SM_icon}
            variants={item}
          >
            <i
              className="fa-brands fa-google "
              style={{ color: "#FF4136" }}
            ></i>
          </motion.div>
        </a>
        <a target="_blank" href="https://github.com/enjoseph">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={Style.SM_icon}
            variants={item}
          >
            <i className="fa-brands fa-github" style={{ color: "#0366D6" }}></i>
          </motion.div>
        </a>
      </motion.ul>
    </motion.div>
  );
}
