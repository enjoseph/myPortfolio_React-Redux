import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import myCV from "../assets/myDocuments/CV_Yusif-Huseynov.pdf"
import WebDevelopmentPNG from "../assets/skillsCompnent/skills-WebDevelopment.png";
import ITPNG from "../assets/skillsCompnent/skills-IT.png";
import GraphicDesignerPNG from "../assets/skillsCompnent/skills-GraphicDesigner.png";
import SoftSkillsPNG from "../assets/skillsCompnent/skills-SoftSkills.png";
import HTML_PMG from "../assets/skillsCompnent/skill_Icon/html-5.png";
import CSS_PNG from "../assets/skillsCompnent/skill_Icon/css-3.png";
import BootStrap_PNG from "../assets/skillsCompnent/skill_Icon/bootstrap.png";
import Tailwind_PNG from "../assets/skillsCompnent/skill_Icon/Tailwind_CSS_Logo.svg.png";
import JS_PNG from "../assets/skillsCompnent/skill_Icon/js.png";
import TypeScript_PNG from "../assets/skillsCompnent/skill_Icon/typescript.png";
import RestTesting_PNG from "../assets/skillsCompnent/skill_Icon/testing.png";
import React_PNG from "../assets/skillsCompnent/skill_Icon/physics.png";
import Redux_PNG from "../assets/skillsCompnent/skill_Icon/redux.svg";
import MongoDB_PNG from "../assets/skillsCompnent/skill_Icon/mongodb.svg";
import BlazeJS_PNG from "../assets/skillsCompnent/skill_Icon/blazejs.png";
import MeteorJS_PNG from "../assets/skillsCompnent/skill_Icon/meteor-js-icon.webp";
import PhotoShop_PNG from "../assets/skillsCompnent/skill_Icon/adobe-photoshop.png";
import PremierPro_PNG from "../assets/skillsCompnent/skill_Icon/premiere-pro.png";
import CorelDraw_PNG from "../assets/skillsCompnent/skill_Icon/corel-draw-circle-icon-for-web-design-free-png.webp";
import Windows_PNG from "../assets/skillsCompnent/skill_Icon/windows.png";
import KaliLinux_PNG from "../assets/skillsCompnent/skill_Icon/Kali-dragon-icon.svg.png";
import HardWare_PNG from "../assets/skillsCompnent/skill_Icon/cpu.png";
import WindowsServer_PNG from "../assets/skillsCompnent/skill_Icon/server.png";
import CheapFlyPNG from "../assets/projectComponent/ChepFly.jpg";
import CheapFly_AdminPanelPNG from "../assets/projectComponent/chepFly-AdminPanel.jpg";
import KapitalBankPNG from "../assets/projectComponent/Kapital Bank.jpg";
import HangManPNG from "../assets/projectComponent/hangMan.jpg";
import NegotiatingPNG from "../assets/projectComponent/negotiating.jpg";
import TicTacToePNG from "../assets/projectComponent/TicTacToe.jpg";


export const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    currentCategory: undefined,
    currentSkills: undefined,
    skills: [
      {
        id: uuidv4(),
        category: "Development",
        about:
          "I have a solid foundation in different technologies and am always open to learning new and innovative tools. I have expertise especially in Development issues.",
        icon: WebDevelopmentPNG,
        skills: [
          { id: uuidv4(), name: "JavaScript", icon: JS_PNG, lvl: "89" },
          { id: uuidv4(), name: "TypeScript", icon: TypeScript_PNG, lvl: "65" },
          { id: uuidv4(), name: "React", icon: React_PNG, lvl: "80" },
          { id: uuidv4(), name: "Meteor", icon: MeteorJS_PNG, lvl: "60" },
          { id: uuidv4(), name: "Redux", icon: Redux_PNG, lvl: "80" },
          { id: uuidv4(), name: "MongoDB", icon: MongoDB_PNG, lvl: "70" },
          { id: uuidv4(), name: "BlazeJS", icon: BlazeJS_PNG, lvl: "50" },
          { id: uuidv4(), name: "Tailwind", icon: Tailwind_PNG, lvl: "70" },
          { id: uuidv4(), name: "BootStrap", icon: BootStrap_PNG, lvl: "80" },
          {
            id: uuidv4(),
            name: "RestTesting",
            icon: RestTesting_PNG,
            lvl: "65",
          },
          { id: uuidv4(), name: "HTML", icon: HTML_PMG, lvl: "90" },
          { id: uuidv4(), name: "CSS", icon: CSS_PNG, lvl: "90" },
        ],
      },
      {
        id: uuidv4(),
        category: "Graphic Design",
        about:
          "Designing interactive and user-friendly interfaces that focus on users' needs is a priority for me. This is one of my efforts to maximize user experience.",
        icon: ITPNG,
        skills: [
          { id: uuidv4(), name: "Photoshop", icon: PhotoShop_PNG, lvl: "70" },
          { id: uuidv4(), name: "CorelDraw", icon: CorelDraw_PNG, lvl: "50" },
          { id: uuidv4(), name: "PremierPro", icon: PremierPro_PNG, lvl: "70" },
        ],
      },
      {
        id: uuidv4(),
        category: "IT",
        icon: GraphicDesignerPNG,
        about:
          "I am an IT professional who is passionate about diving into hardware details and navigating the Windows environment. I stand out for my skills in streamlining systems and providing seamless experiences for users. I look forward to the opportunity to contribute my talents to impressive projects and technological advances by embracing the dynamic world of information technologies.",
        skills: [
          { id: uuidv4(), name: "WindowsOP", icon: Windows_PNG, lvl: "90" },
          { id: uuidv4(), name: "LinuxOP", icon: KaliLinux_PNG, lvl: "70" },
          { id: uuidv4(), name: "HardWare", icon: HardWare_PNG, lvl: "98" },
          {
            id: uuidv4(),
            name: "WindowsServer",
            icon: WindowsServer_PNG,
            lvl: "70",
          },
        ],
      },
      {
        id: uuidv4(),
        category: "Soft Skills",
        about:
          "Harmonious working within the team and open communication are key for me. I establish strong bonds with the teams I work with and we complete our projects successfully.",
        icon: SoftSkillsPNG,
        skills: [
          { id: uuidv4(), name: "Disciplined" },
          { id: uuidv4(), name: "Ability to work with Team" },
        ],
      },
    ],
    projects : [
      {
        id: uuidv4(),
        name: "CheapFly",
        usedTechnologies: [
          MeteorJS_PNG,
          BlazeJS_PNG,
          HTML_PMG,
          MongoDB_PNG,
          CSS_PNG,
          Tailwind_PNG,
          BootStrap_PNG,
        ],
        view: CheapFlyPNG,
        githubLink: "",
      },
      {
        id: uuidv4(),
        name: "CheapFly Admin",
        usedTechnologies: [
          MeteorJS_PNG,
          BlazeJS_PNG,
          HTML_PMG,
          MongoDB_PNG,
          CSS_PNG,
          Tailwind_PNG,
          BootStrap_PNG,
        ],
        view: CheapFly_AdminPanelPNG,
        githubLink: "",
      },
      {
        id: uuidv4(),
        name: 'Negotiating',
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG],
        view: NegotiatingPNG,
        githubLink: "",
      },
      {
        id: uuidv4(),
        name: "Kapital Bank",
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG, BootStrap_PNG],
        view: KapitalBankPNG,
        githubLink: "https://github.com/enjoseph/Kapital-Bank-Web-site",
      },
      {
        id: uuidv4(),
        name: "Tic-Tac-Toe",
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG],
        view: TicTacToePNG,
        githubLink: "",
      },
  
      {
        id: uuidv4(),
        name: "HangMan",
        usedTechnologies: [React_PNG, HTML_PMG, CSS_PNG],
        view: HangManPNG,
        githubLink: "https://github.com/enjoseph/React_HangMan",
      },
    ]
  },

  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },

    setCurrentSkills: (state, action) => {
      state.currentSkills = action.payload;
    },
  },
});

export const { setCurrentCategory, setCurrentSkills } = skillsSlice.actions;

export default skillsSlice.reducer;
