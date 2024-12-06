import React from "react";

const experiences = [
  {
    id: 1,
    title: "Graphic Designer",
    company: "Pentagon Design",
    duration: "2017 - 2019",
    description: "Worked on branding, logo design, and digital assets for multiple clients. Led a team of junior designers to execute creative campaigns.",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Animate Studio",
    duration: "2015 - 2017",
    description: "Focused on animation and motion graphics for marketing campaigns. Collaborated with creative teams to produce promotional videos.",
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "Cute Studio",
    duration: "2014 - 2015",
    description: "Developed print and digital designs for advertisements. Improved project efficiency by introducing new design workflows.",
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "City Printing",
    duration: "2013 - 2014",
    description: "Designed custom graphics for print media. Assisted in managing printing projects to ensure timely delivery.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className='flex flex-col items-center lg:items-start mt-24 lg:mt-28 gap-3'>
        <h1 className='uppercase lg:text-[7rem]  text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]'>
          Experience
          <span className='text-headingGray'> Section</span>
        </h1>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#191919]"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative mt-20 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`bg-[#191919] p-6 rounded-lg shadow-md w-[45%] ${
                index % 2 === 0 ? "mr-16" : "ml-16"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-4 text-gray-300">{exp.description}</p>
            </div>

            {/* Timeline Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange rounded-full border-2 border-gray-900"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
