import AboutProjectModalStyle from "../../style/Modal/AboutProjectModal.module.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentProject} from '../../stores/projectsSlice'
import { useTranslation } from "react-i18next";

export default function AboutProjectModal() {
  const { currentProject } = useSelector((state) => state.projects);
  console.log('Rendering AboutProjectModal');
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
  const{t} = useTranslation()
  
  const dispatch = useDispatch()


  const closeProjectDetails = () => {
    dispatch(setCurrentProject(undefined));
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id={AboutProjectModalStyle.BG}
      onClick={closeProjectDetails}
    >
      <div className={AboutProjectModalStyle.modalMain}>
        <h5>
          {t('AboutModal.Message')} <i className="fa-regular fa-lightbulb"></i>
        </h5>

        <div className={AboutProjectModalStyle.projectName}>
          <h4 className="fa-fade">{currentProject.name}</h4>
        </div>

        <div className={AboutProjectModalStyle.projectAbout}>
          <motion.ul variants={container} initial="hidden" animate="visible">
            {currentProject.usedTechnologies.map((usedTechnologies, index) => {
              return (
                <motion.li variants={item} key={index}>
                  <img
                    src={usedTechnologies}
                    style={{ maxWidth: "3rem", maxHeight: "3rem" }}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
        {!currentProject.githubLink ? (
          <a>
            {
              t("ProjectModal.notGithub")
            }
          </a>
        ) : (
          <a href={currentProject.githubLink}> {currentProject.githubLink}</a>
        )}
        {/*  */}
      </div>
    </motion.section>
  );
}
