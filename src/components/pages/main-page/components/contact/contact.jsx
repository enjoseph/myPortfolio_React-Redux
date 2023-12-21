import React from "react";

// Style Module
import ContactStyle from "./contact.module.css";

// i18Next
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
