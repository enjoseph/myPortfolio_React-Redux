import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  // Set Languages
  useEffect(() => {
    const setLang = localStorage.getItem("language");
    if (setLang !== null) i18n.changeLanguage(setLang);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
