import React, { useEffect, useState } from "react";
import ProjectStyle from "../style/Project.module.css";
import AboutProjectModal from "./Modal/AboutProjectModal";
import TabComponent from "./TabComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProject } from "../stores/projectsSlice";
import { useTranslation } from "react-i18next";
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';



export default function Project() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);
  const { currentProject } = useSelector((state) => state.projects);

  const TabFix = projects.length / 6 > 3 ? projects.length / 6 : 3;
  const [tab, set_tab] = useState(TabFix);
  const { isActive } = useSelector((state) => state.projects);

  const loop = Array.from({ length: tab }, (_, index) => index + 1);

  return (
    <section className={ProjectStyle.container} id="projectsID">
      <h5 className={ProjectStyle.mainText}>{t("Project.mainText")}</h5>
      <p className={ProjectStyle.aboutText}>{t("Project.aboutText")}</p>

      <div className={ProjectStyle.linkTab}>
        {loop.map((index) => {
          return <TabComponent key={index} index={index}></TabComponent>;
        })}
      </div>

      <Swiper
         effect={'cards'}
         grabCursor={true}
         modules={[EffectCards]}
        className={ProjectStyle.myProjects}
        id={ProjectStyle.mobileVersion}
      >
        {isActive === 1 ? (
          projects.map((project, index) => {
            return (
              <SwiperSlide key={project.id}>
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
              </SwiperSlide>
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
        
      </Swiper>

      <div className={ProjectStyle.myProjects} id={ProjectStyle.pcVersion}>
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

      {currentProject ? <AboutProjectModal /> : null}
    </section>
  );


}

