import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './languageSlice'
import skillsReducer from  './skillsSlice'
import projectsReducer from './projectsSlice'
import documentReducer from './documentSlice'

export default configureStore({
    reducer: {
        skills: skillsReducer , 
        language : languageReducer,
        projects : projectsReducer,
        document : documentReducer
    },

    
})