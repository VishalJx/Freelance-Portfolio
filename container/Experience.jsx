import React from "react";
import data from "../data";

const experiences = data.experiencePage;

export default function Experience() {
  return (
    <section id="experience" className='flex flex-col items-center lg:items-start mb-28 lg:mb-20 lg:mt-20 gap-3'>
        <h1 className='uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]'>
          Experience
          <span className='text-headingGray'> Section</span>
        </h1>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#191919]"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative mt-20 px-5 lg:px-0 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`bg-[#191919] p-6 rounded-lg shadow-md w-[48%] ${
                index % 2 === 0 ? "mr-16" : "ml-16"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-4 text-gray-300">{exp.responsibilities}</p>
            </div>

            {/* Timeline Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange rounded-full border-2 border-gray-900"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
