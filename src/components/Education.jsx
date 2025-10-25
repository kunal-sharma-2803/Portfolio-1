import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const educations = useSelector((state) => state.education);

  return (
    <div
      id="education"
      className="relative z-50 px-6 lg:px-12" // ✅ spacing below navbar
    >
      {/* Section Title */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold rounded-lg shadow-md">
            Education
          </span>
        </div>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {educations.map((education) => (
          <div
            key={education.id}
            className="bg-[#1e1a36] rounded-2xl shadow-lg border border-[#2a234a] p-6 hover:border-violet-500 hover:shadow-violet-500/30 transition-all duration-300"
          >
            <div className="flex flex-col text-center gap-3">
              <p className="text-sm sm:text-base text-[#16f2b3] font-medium tracking-wide">
                {education.duration}
              </p>
              <h3 className="text-lg sm:text-2xl font-semibold uppercase text-white">
                {education.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {education.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
