import { createSlice, nanoid } from '@reduxjs/toolkit'
import { skillsImage } from '../../Images/index.js'

const initialState = [
    {
        id: 1,
        name: 'Javascript',
        image: skillsImage('javascript'),
        description: 'Programming Language',
    },
    {
        id: 2,
        name: 'React',
        image: skillsImage('react'),
        description: 'Frontend Library',
    },
    {
        id: 3,
        name: 'Node JS',
        image: skillsImage('nodejs'),
        description: 'Backend Runtime Environment',
    },
    {
        id: 4,
        name: 'MongoDB',
        image: skillsImage('mongodb'),
        description: 'NoSQL Database',
    },
    {
        id: 5,
        name: 'MySQL',
        image: skillsImage('mysql'),
        description: 'Relational Database',
    },
    {
        id: 6,
        name: 'GitHub',
        image: skillsImage('github'),
        description: 'Version Control & Collaboration',
    },
    {
        id: 7,
        name: 'AWS',
        image: skillsImage('aws'),
        description: 'Cloud Computing Platform',
    },
    {
        id: 8,
        name: 'Tableau',
        image: skillsImage('tableau'),
        description: 'Data Visualization Tool',
    },
    {
        id: 9,
        name: 'C++',
        image: skillsImage('c++'),
        description: 'Programming Language',
    },
    {
        id: 10,
        name: 'Nessus',
        image: skillsImage('nessus'),
        description: 'Vulnerability Assessment Tool',
    },
    {
        id: 11,
        name: 'MetaSploit',
        image: skillsImage('metasploit'),
        description: 'Penetration Testing Framework',
    },
    {
        id: 12,
        name: 'Cisco Packet Tracer',
        image: skillsImage('cisco-packet-tracer'),
        description: 'Network Simulation Tool',
    },
    {
        id: 13,
        name: 'Linux',
        image: skillsImage('linux'),
        description: 'Operating System',
    },
    {
        id: 14,
        name: 'Express',
        image: skillsImage('express'),
        description: 'Backend Framework',
    },
];

export const skillSlice = createSlice({
    name: "skill",
    initialState,
    reducers: {
        addSkill: (state, action) => {
            const { name, description } = action.payload;

            // Check if skill already exists
            const existingSkill = state.find(skill => skill.name === name);

            if (existingSkill) {
                // Update description if skill exists
                existingSkill.description = description;
            } else {
                // Otherwise add new skill
                state.push({
                    id: nanoid(),
                    name,
                    image: skillsImage(name),
                    description,
                });
            }
        },

        removeSkill: (state, action) => {
            return state.filter((skill) => skill.id !== action.payload.id);
        },
    },
});

export const { addSkill, removeSkill } = skillSlice.actions;
export default skillSlice.reducer;