import React, { useEffect, useState } from "react";
import AboutModalStyle from "../../style/Modal/AboutSkillModal.module.css";
import { motion } from "framer-motion";
import { setCurrentSkills } from "../../stores/skillsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function AboutSkillModal() {
  const dispatch = useDispatch();
  const { currentSkills } = useSelector((state) => state.skills);
  console.log('Rendering AboutSkillModal');

  const {t} = useTranslation()

  const [counter, set_counter] = useState(0);
  const [skillLVL, set_skillLVL] = useState(currentSkills.lvl);

  const closeSkillDetails = (e) => {
    dispatch(setCurrentSkills(undefined));
  };

  const helperCounter = () => {
    if (skillLVL > counter) {
      set_counter(counter + 1);
    }
  };

  useEffect(() => {
    const counterCall = setTimeout(function () {
      helperCounter();
    }, 20);

    if (currentSkills.lvl === counter) 

    return () =>  clearTimeout(counterCall);
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id={AboutModalStyle.BG}
      onClick={closeSkillDetails}
    >
      <motion.div
        initial={{ opacity: 0, translateX: "-50%", translateY: "-100%" }}
        animate={{ opacity: 1, translateX: "-50%", translateY: "-50%" }}
        transition={{ duration: 0.5 }}
        className={AboutModalStyle.modalMain}
      >
        <h5>
        {t('AboutModal.Message')} <i className="fa-regular fa-lightbulb"></i>
        </h5>

        <div className={AboutModalStyle.container}>
          <div className={AboutModalStyle.text}>
            <div className={AboutModalStyle.content}>
              <motion.img
                initial={{ scale: 0, rotate: 180 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                src={currentSkills.icon}
                alt={currentSkills.name}
                style={{ maxWidth: "86px", maxHeight: "86px" }}
              />
              <h2>{currentSkills.name}</h2>
            </div>
          </div>
          <div className={AboutModalStyle.skillBar}>
            <div className={AboutModalStyle.block}>
              <div className={AboutModalStyle.box}>
                <p className={AboutModalStyle.number}>
                  <span className={AboutModalStyle.num}>{counter}</span>
                  <span className={AboutModalStyle.sub}>%</span>
                </p>
              </div>

              <svg className={AboutModalStyle.svg}>
                <circle
                  className={AboutModalStyle.circle}
                  cx="90"
                  cy="90"
                  r="80"
                  style={{ strokeDashoffset: 440 - (440 * counter) / 100 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
