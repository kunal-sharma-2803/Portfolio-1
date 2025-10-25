import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
    id: 1,
    title: "Bachelor Degree",
    duration: "2022 - Present",
    institution: "Chandigarh University",
  },
  {
    id: 2,
    title: "Intermediate",
    duration: "2020 - 2021",
    institution: "MRA DAV Public School",
  },
  {
    id: 3,
    title: "Matriculation",
    duration: "2018 - 2019",
    institution: "MRA DAV Public School",
  }
];

export const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducation: (state, action) => {
            const newEducation = {
                id: nanoid(),
                title: action.payload.title,
                duration: action.payload.duration,
                institution: action.payload.institution,
            };
            state.push(newEducation);
        },
        removeEducation: (state, action) => {
            return state.filter((education) => education.id !== action.payload.id);
        },
    },
});

export const { addEducation, removeEducation } = educationSlice.actions;
export default educationSlice.reducer;
