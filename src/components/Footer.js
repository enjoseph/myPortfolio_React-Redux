import React from "react";
import FooterStyle  from '../style/Footer.module.css'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from '../assets/Logo/logoFooter.png'

export default function Footer() {
  console.log('Rendering Footer');

  const {t} = useTranslation()


  return (
    <section className={FooterStyle.container}>
         <div className={FooterStyle.BrandName}>
          <img src={logo} alt="Main Logo" />
        </div>

      <div className={FooterStyle.contactUS}>
            <ul>
                <a href="https://www.instagram.com/enjoseph7"> <i className="fa-brands fa-instagram "></i> Instagram</a>
                <a href="mailto:yusif.husynov994@gmail.com"><i className="fa-brands fa-google "></i>Gmail</a>
                <a href="https://github.com/enjoseph"> <i className="fa-brands fa-github"></i> Github</a>
            </ul>
            <p>{t("Footer.copyright")}</p>
      </div>
    </section>
  );
}
