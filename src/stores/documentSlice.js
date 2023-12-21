import { createSlice } from "@reduxjs/toolkit";

// Import Icon
import myCV from "../assets/myDocuments/CV_Yusif-Hüseynov.pdf"


export const documentSlice = createSlice(  {
    name : 'document', 
    initialState :  {
        CV : myCV

    },


    reducers : {
        
    }
})





export default documentSlice.reducer

