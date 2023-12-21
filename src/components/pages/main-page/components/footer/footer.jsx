import React from "react";

// Style Module
import FooterStyle  from './footer.module.css'

// i18next
import { useTranslation } from "react-i18next";

// Import Icon
import logo from '../../../../../assets/Logo/logoFooter.png'


export default function Footer() {

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
