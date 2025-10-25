import { configureStore } from '@reduxjs/toolkit'
import educationReducer from './Slices/educationSlice'
import projectReducer from './Slices/projectSlice'
import skillReducer from './Slices/skillSlice'

export const store = configureStore({
    reducer: {
        education: educationReducer,
        project: projectReducer,
        skill: skillReducer,
    },
});