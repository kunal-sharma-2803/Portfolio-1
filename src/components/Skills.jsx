import { useSelector } from "react-redux";
import { skillsImage } from "../Images/index.js"; // adjust path as needed

const Skills = () => {
  const skills = useSelector((state) => state.skill);

  return (
    <div
      id="skills"
      // ✅ Adjusted spacing to match the Education component
      className="relative z-50 px-6"
    >
      {/* Section Title */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <span className="bg-[#1a1443] text-white px-6 py-2 text-xl font-semibold rounded-lg shadow-md">
            Skills
          </span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills?.map((skill) => (
          <div
            key={skill.id}
            // ✅ Updated padding and added a gap for consistency
            className="bg-[#1e1a36] rounded-2xl shadow-lg border border-[#2a234a] p-6 hover:border-violet-500 hover:shadow-violet-500/30 transition-all duration-300 flex flex-col items-center text-center gap-3"
          >
            {/* Skill Icon */}
            <div className="h-16 w-16">
              <img
                src={skill.image || skillsImage(skill.name)}
                alt={skill.name}
                className="h-full w-full object-contain"
              />
            </div>

             {/* Skill Description */}
              {skill.description && (
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
                  {skill.description}
                </p>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;