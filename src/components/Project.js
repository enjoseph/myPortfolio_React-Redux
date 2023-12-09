import React, { useEffect, useState } from "react";
import ProjectStyle from "../style/Project.module.css";
import AboutProjectModal from "./Modal/AboutProjectModal";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProject } from "../stores/projectsSlice";
import { useTranslation } from "react-i18next";

export default function Project(props) {
  console.log('Rendering Projects');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);
  const { currentProject } = useSelector((state) => state.projects);

  const TabFix = projects.length / 6 > 3 ? projects.length / 6 : 3;
  const [tab, set_tab] = useState(TabFix);
  const [isActive, set_isActive] = useState(1);



  const renderTab = () => {
    const tabs = [];
    for (let i = 1; i <= tab; i++) {
      tabs.push(
        <a
          key={i}
          onClick={() => {
            set_isActive(i);
          }}
          id={i}
        >
          Tab {i}
        </a>
      );
    }
    return tabs;
  };

  return (
    <section className={ProjectStyle.container} id="ProjectID">
      <h5 className={ProjectStyle.mainText}>{t("Project.mainText")}</h5>
      <p className={ProjectStyle.aboutText}>{t("Project.aboutText")}</p>

      <div className={ProjectStyle.linkTab}>{renderTab()}</div>

      <div className={ProjectStyle.myProjects}>
        {isActive === 1 ? (
          projects.map((project, index) => {
            return (
              <div key={project.id} className={ProjectStyle.myProject}>
                <img
                  id={project.id}
                  className={ProjectStyle.viewProject}
                  src={project.view}
                  alt={project.name}
                  onClick={(e) => {
                    dispatch(setCurrentProject(project));
                  }}
                />
              </div>
            );
          })
        ) : (
          <div className={ProjectStyle.textContainer}>
            <h5 className="fa-fade">
              Your projects can be included in this section.{" "}
              <i className="fa-regular fa-face-smile-wink"></i>
            </h5>
          </div>
        )}
      </div>

      {currentProject !== undefined ? (
        <AboutProjectModal></AboutProjectModal>
      ) : null}
    </section>
  );
}
