import { createSlice } from "@reduxjs/toolkit";
import myCV from "../assets/myDocuments/CV_Yusif-Hüseynov.pdf"


export const documentSlice = createSlice(  {
    name : 'document', 
    initialState :  {
        CV : myCV

    },


    reducers : {
        
    }
})



export const {} = documentSlice.actions


export default documentSlice.reducer

