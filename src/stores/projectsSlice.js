import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import HTML_PMG from "../assets/skillsCompnent/skill_Icon/html-5.png";
import CSS_PNG from "../assets/skillsCompnent/skill_Icon/css-3.png";
import BootStrap_PNG from "../assets/skillsCompnent/skill_Icon/bootstrap.png";
import Tailwind_PNG from "../assets/skillsCompnent/skill_Icon/Tailwind_CSS_Logo.svg.png";
import JS_PNG from "../assets/skillsCompnent/skill_Icon/js.png";
import React_PNG from "../assets/skillsCompnent/skill_Icon/physics.png";
import MongoDB_PNG from "../assets/skillsCompnent/skill_Icon/mongodb.svg";
import BlazeJS_PNG from "../assets/skillsCompnent/skill_Icon/blazejs.png";
import MeteorJS_PNG from "../assets/skillsCompnent/skill_Icon/meteor-js-icon.webp";
import CheapFlyPNG from "../assets/projectComponent/ChepFly.jpg";
import CheapFly_AdminPanelPNG from "../assets/projectComponent/chepFly-AdminPanel.jpg";
import KapitalBankPNG from "../assets/projectComponent/Kapital Bank.jpg";
import HangManPNG from "../assets/projectComponent/hangMan.jpg";
import NegotiatingPNG from "../assets/projectComponent/negotiating.jpg";
import TicTacToePNG from "../assets/projectComponent/TicTacToe.jpg";


export const projectsSlice = createSlice({
  name: "project",
  initialState: {
    currentProject: undefined ,
    projects : [
      {
        id: uuidv4(),
        isActiveModal: false,
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
        isActiveModal: false,
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
        isActiveModal: false,
        name: 'Negotiating',
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG],
        view: NegotiatingPNG,
        githubLink: "",
      },
      {
        id: uuidv4(),
        isActiveModal: false,
        name: "Kapital Bank",
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG, BootStrap_PNG],
        view: KapitalBankPNG,
        githubLink: "https://github.com/enjoseph/Kapital-Bank-Web-site",
      },
      {
        id: uuidv4(),
        isActiveModal: false,
        name: "Tic-Tac-Toe",
        usedTechnologies: [JS_PNG, HTML_PMG, CSS_PNG],
        view: TicTacToePNG,
        githubLink: "",
      },
  
      {
        id: uuidv4(),
        isActiveModal: false,
        name: "HangMan",
        usedTechnologies: [React_PNG, HTML_PMG, CSS_PNG],
        view: HangManPNG,
        githubLink: "https://github.com/enjoseph/React_HangMan",
      },
    ],
    isActive: 1
  },

  reducers: {
    setCurrentProject : (state, action) => { 
        state.currentProject = action.payload
    },
    setIsActive : (state, action) => { 
      state.isActive = action.payload
    }
  },
});

export const {setCurrentProject , setIsActive} = projectsSlice.actions;

export default projectsSlice.reducer;
