import { createSlice } from "@reduxjs/toolkit";

import EN from "../assets/navbarComponent/eng.png";
import AZ from "../assets/navbarComponent/aze.png";
import RU from "../assets/navbarComponent/rus.png";
import TR from "../assets/navbarComponent/tr.png";


export const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: {
     en: {
      lang: 'EN',
      IMG : EN
     },
     az: {
      lang: 'AZ',
      IMG : AZ
     },
     ru: {
      lang: 'RU',
      IMG : RU
     },
     tr: {
      lang: 'TR',
      IMG : TR
     }
    },
  },


});


export const {setLanguage} = languageSlice.actions

export default languageSlice.reducer;