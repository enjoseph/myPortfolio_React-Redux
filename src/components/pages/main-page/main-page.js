import React from "react";

// Component
import Navbar from "./components/navbar/navbar.jsx";
import Banner from "./components/banner/banner.jsx";
import Skills from "./components/skills/skills.jsx";
import Project from "./components/porject/project.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";

export  function MainPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
