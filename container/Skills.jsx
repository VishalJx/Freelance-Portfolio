'use client';

const { useState } = require("react");
const { default: data } = require("../data");

const Skills = () => {
  const skillsData = data.skillsData;

  // Initialize the active category based on the first element in the array
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);

  // Find the active category's skills
  const activeSkills = skillsData.find(
    (category) => category.category === activeCategory
  )?.skills || [];

  return (
    <section
      id="skills"
      className="flex flex-col min-h-[25rem] lg:min-h-[30rem] items-center lg:items-start mt-24 lg:mt-28 gap-3 mx-2 opacity-0 animate-fadeIn"
    >
      <h1 className="uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]">
        SKILLS
        <span className="text-headingGray"> SECTION</span>
      </h1>

      {/* Headings with underline */}
      <div className="flex gap-8 mb-4 mt-5">
        {skillsData.map(({ category }) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg pb-2 font-medium transition-all ${
              activeCategory === category
                ? "text-gray-300 border-b-4 border-orange"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {activeSkills.map((skill, index) => (
          <div
            key={index}
            className="h-12 flex items-center justify-center rounded-md border border-gray-300 font-medium text-center shadow-sm hover:shadow-md transition-all opacity-0 animate-slideUp delay-100"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
