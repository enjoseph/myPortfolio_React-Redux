import { createSlice } from "@reduxjs/toolkit";


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