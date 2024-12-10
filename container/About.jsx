import React from 'react'
import data from '@/data'

const About = () => {

    const aboutData = data.aboutPage;

  return (
    <section id='about'className='flex flex-col items-center lg:items-start mt-28 lg:mt-24 gap-3'>
        <h1 className="uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]">
            About
            <span className="text-headingGray"> MYSELF</span>
        </h1>
        <p className='w-[70%] text-center lg:text-justify lg:w-[90%] text-lg font-medium text-textGray tracking-[0.02em]'>
            {aboutData.description1}
        </p>
        <p className='w-[70%] text-center lg:text-justify lg:w-[90%] text-lg font-medium text-textGray tracking-[0.02em]'>
            {aboutData.description2}
        </p>
    </section>
  )
}

export default About