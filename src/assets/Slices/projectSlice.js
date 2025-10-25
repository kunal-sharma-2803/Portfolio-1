import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: "Cwear",
        description:
            "Built a secure MERN stack e-commerce application. Implemented JWT authentication and bcrypt password hashing, developed Node.js/Express backend, designed scalable MongoDB schemas, managed product and cart data, and added file storage for product images.",
        tools: ["MongoDB", "Express", "React", "Node.js", "JWT", "Bcrypt", "File Storage", "MERN Stack"],
        role: "Full Stack Developer",
        code: "",
        deployedLink: "",
    },
    {
        id: 2,
        name: "Team Sync",
        description:
            "Gained hands-on experience with AWS architecture—launching EC2 instances, configuring subnets, setting up load balancers, managing storage (EBS/S3), ensuring network security, and deploying scalable applications with high availability and performance.",
        tools: ["AWS", "EC2", "S3", "EBS", "Load Balancer", "VPC", "Cloud Networking"],
        role: "Cloud Engineer",
        code: "",
        deployedLink: "",
    },
    {
        id: 3,
        name: "Book Nest",
        description:
            "Learnt React JS fundamentals, component structure, state and props management, routing, form handling, CRUD operations, API integration, UI design, and user authentication to build a functional and responsive library system.",
        tools: ["React JS", "JavaScript", "API Integration", "Routing", "CRUD", "UI Design", "Authentication"],
        role: "Frontend Developer",
        code: "",
        deployedLink: "",
    },
    {
        id: 4,
        name: "Configuring Bank Network",
        description:
            "Learnt basic networking, IP addressing, subnetting, device configuration, wireless setup, and security.",
        tools: ["Cisco Packet Tracer", "Networking", "IP Addressing", "Subnetting", "Network Security"],
        role: "Network Engineer",
        code: "",
        deployedLink: "",
    },
    {
    id: 5,
    name: "Climate Chronicle",
    description:
        "Learned web development basics: HTML structuring, CSS styling, responsive design, and JavaScript interactivity. Explored DOM manipulation, data fetching (APIs), animations, and user experience design in a climate-focused web project.",
    tools: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design", "DOM Manipulation", "Animations"],
    role: "Web Developer",
    code: "",
    deployedLink: "",
},

];

export const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        addProject: (state, action) => {
            const newProject = {
                id: nanoid(),
                name: action.payload.name,
                description: action.payload.description,
                tools: action.payload.tools,
                role: action.payload.role,
                code: action.payload.code,
                deployedLink: action.payload.deployedLink,
            };
            state.push(newProject);
        },
        removeProject: (state, action) => {
            return state.filter((project) => project.id !== action.payload.id);
        },
        updateProject: (state, action) => {
            const index = state.findIndex((project) => project.id === action.payload.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index], // keep unchanged fields
                    name: action.payload.name,
                    description: action.payload.description,
                    tools: action.payload.tools,
                    role: action.payload.role,
                    code: action.payload.code,
                    deployedLink: action.payload.deployedLink,
                };
            }
        },
    },
});

export const { addProject, removeProject, updateProject } = projectSlice.actions;
export default projectSlice.reducer;
