import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className='flex flex-col items-center lg:items-start gap-3 mt-20 lg:mt-28'>
        <h1 className='uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.5rem] lg:leading-[6.5rem]'>
            SKILLS
        <span className='text-headingGray'> Section</span>
        </h1>
        <h3 className='w-[70%] text-center lg:text-justify lg:w-[90%] text-lg font-medium text-textGray tracking-[0.02em]'>
          Passionate about creating intuitive 
          and engaging user experiences. 
          Specialize in transforming ideas 
          into beautifully crafted products.
        </h3>
    </section>
  )
}

export default Skills