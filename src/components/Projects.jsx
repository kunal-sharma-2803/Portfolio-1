import React from "react";
import { useSelector } from "react-redux";

const Projects = () => {
  const projects = useSelector((state) => state.project);

  return (
    <div
      id="projects"
      className="relative z-50 px-6 lg:px-12"
    >
      {/* Section Title */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold rounded-lg shadow-md">
            Projects
          </span>
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1e1a36] rounded-2xl shadow-lg border border-[#2a234a] p-6 hover:border-violet-500 hover:shadow-violet-500/30 transition-all duration-300"
          >
            <div className="flex flex-col text-center gap-4">
              {/* Project Name */}
              <h3 className="text-lg sm:text-2xl font-semibold uppercase text-white">
                {project.name}
              </h3>

              {/* Role */}
              <p className="text-sm sm:text-base text-[#16f2b3] font-medium tracking-wide">
                {project.role}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs sm:text-sm bg-[#2a234a] text-violet-300 rounded-lg border border-violet-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-center gap-6 mt-4">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-300"
                  >
                    Code
                  </a>
                )}
                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
