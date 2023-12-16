import { createSlice } from "@reduxjs/toolkit";

import EN from "../assets/navbarComponent/eng.png";
import AZ from "../assets/navbarComponent/aze.png";
import RU from "../assets/navbarComponent/rus.png";
import TR from "../assets/navbarComponent/tr.png";


export const languageSlice = createSlice({
  name: "language",
  initialState: {
    isActiveLang : false
  },


  reducers : {
   set_isActiveLang : (state , action) => { 
    state.isActiveLang =  action.payload
    }
  
  } 

});


export const {set_isActiveLang} = languageSlice.actions

export default languageSlice.reducer;