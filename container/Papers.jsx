import React from 'react'
import Link from 'next/link';
import { SlPaperClip } from "react-icons/sl";
import data from '../data';

const Papers = () => {
  const paperContent = data.researchPapersPage;

  return (
    <section
      id="publications"
      className="flex flex-col items-center lg:items-start mt-28 lg:mt-24 gap-3 opacity-0 animate-fadeIn"
    >
      <h1 className="uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]">
        Research
        <span className="text-headingGray"> Papers</span>
      </h1>

      <div className="w-full">
        {paperContent.map((paper, index) => (
          <Link
            href={paper.link}
            key={index}
            className="relative w-[80vw] mx-auto lg:w-[50vw] xl:w-[35vw] flex flex-col gap-3 lg:gap-6 px-5 py-3 mt-6 rounded-xl hover:bg-[#191919] duration-300 opacity-0 animate-slideUp"
          >
            <div className="w-full pr-5 text-justify md:text-start">
              <h2 className="text-2xl font-semibold">{paper.title}</h2>
              <p className="text-textGray w-[100%] mt-2">{paper.description}</p>
            </div>
            <div className="text-textGray font-kanit text-center md:text-start">
              {paper.date}
            </div>
            <span>
              <span className="absolute top-4 right-4 flex items-center text-orange">
                <SlPaperClip className="text-xl" />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Papers;
