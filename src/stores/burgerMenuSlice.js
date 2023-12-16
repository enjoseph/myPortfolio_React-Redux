import { createSlice } from "@reduxjs/toolkit";


export const burgerMenuSlice = createSlice(  {
    name : 'burgerMenu', 
    initialState :  {
        isActive : false

    },


    reducers : {
        setIsActive : (state, action) => { 
            state.isActive = action.payload
          }
    }
})



export const {setIsActive} = burgerMenuSlice.actions


export default burgerMenuSlice.reducer

