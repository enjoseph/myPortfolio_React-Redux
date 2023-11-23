import React from "react";
import ContactStyle from "../style/Contact.module.css";
import ContactPNG from "../assets/contactComponent/contactPNG.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className={ContactStyle.container} id="ContactID">
      <div className={ContactStyle.contactUs}>
        <div className={ContactStyle.text}>
          <h5>{t("Contact.newsletterText")}</h5>
        </div>
        <form action="" className={ContactStyle.contactUsForm}>
          <input type="email" placeholder={t("Contact.emailPlaceholder")} />
          <input type="submit" value={t("Contact.submitButton")} />
        </form>
      </div>
    </section>
  );
}
