import React from "react";
import FooterStyle  from '../style/Footer.module.css'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export default function Footer() {

  const {t} = useTranslation()


  return (
    <section className={FooterStyle.container}>
       <h5>{t("Footer.name")}</h5>

      <div className={FooterStyle.contactUS}>
            <ul>
                <a href="https://www.instagram.com/enjoseph7"><motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={FooterStyle.SM_icon}> <i className="fa-brands fa-instagram "></i></motion.li> </a>
                <a href="mailto:yusif.husynov994@gmail.com"><motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={FooterStyle.SM_icon}><i className="fa-brands fa-google "></i> </motion.li></a>
                <a href="https://github.com/enjoseph"><motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className={FooterStyle.SM_icon}> <i className="fa-brands fa-github"></i> </motion.li></a>
            </ul>
            <p>{t("Footer.copyright")}</p>
      </div>
    </section>
  );
}
