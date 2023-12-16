import React, { useEffect, useState } from "react";
import SkillsStyle from "../style/Skills.module.css";
import Carousel from "react-multi-carousel";
import AboutModal from "./Modal/AboutSkillModal";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentCategory, setCurrentSkills } from "../stores/skillsSlice";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();


  //  Multi Carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const dispatch = useDispatch();
  const { currentCategory } = useSelector((state) => state.skills);
  const { currentSkills } = useSelector((state) => state.skills);
  const skills = useSelector((state) => state.skills.skills);

  const closeSkill = (e) => {
    skillsBoxAnimation_Active();
    dispatch(setCurrentCategory(undefined));
  };


  const helperCurrentCategory = (e) => {
    dispatch(setCurrentCategory(e.target.id));
    console.log(e.target.id);
    skillsBoxAnimation_Active();
  };

  const skillsBoxAnimation_Active = () => {
    const SkillsComponent = document.getElementById("skillsID");
    SkillsComponent.classList.add(SkillsStyle.rotateAnimation);
    setTimeout(() => {
      SkillsComponent.classList.remove(SkillsStyle.rotateAnimation);
    }, 1000);
  };
  return (
    <section className={SkillsStyle.container} id="skillsID">
    {currentCategory ? (
      <i className="fa-solid fa-left-long fa-bounce" onClick={closeSkill}></i>
    ) : undefined}
    <h1 className={SkillsStyle.mainText}>
      {!currentCategory ? t("Skills.mainText") : currentCategory}
    </h1>
    <p className={SkillsStyle.aboutText}>{t("Skills.aboutText")}</p>
    <Carousel
      key={currentCategory}
      responsive={responsive}
      className={SkillsStyle.skillsBox}
    >
      {skills.map((skills, index) => {
        if (!currentCategory ) {
          return (
            <motion.div
              key={skills.id}
              className={SkillsStyle.box}
              onClick={(e) => {
                helperCurrentCategory(e);
              }}
              id={skills.category}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <img
                className={SkillsStyle.skillsImage}
                src={skills.icon}
                alt={skills.category}
                style={{ width: "40%" }}
              />
              <h5 className={SkillsStyle.skillsName}> {skills.category}</h5>
            </motion.div>
          );
        } else if (currentCategory === skills.category) {
          return skills.skills.map((element, index) => {
            return (
              <motion.div
                initial={{ rotate: 180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                key={element.id}
                className={SkillsStyle.box}
                id={element.name}
                onClick={(e) => {
                  if (e.target.id === element.name)
                    dispatch(setCurrentSkills(element));
                }}
              >
                <div className={SkillsStyle.imgContainer}>
                  {element.icon ? (
                    <img
                      className={SkillsStyle.skillsImage}
                      src={element.icon}
                      alt={element.name}
                      style={{ width: "40%", animation: "none" }}
                    />
                  ) : null}

                  <h5 className={SkillsStyle.skillsName}> {element.name}</h5>
                </div>
              </motion.div>
            );
          });
        }
      })}
    </Carousel>
    {currentSkills && currentSkills.icon ?  (
      <AboutModal/>
    ) : null}
  </section>
);
}
