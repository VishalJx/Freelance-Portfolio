import React from 'react'

const HomePage = () => {
  return (
    <section id="home" className='flex flex-col items-center lg:items-start mt-16 lg:mt-0 gap-3'>
        <h1 className='uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]'>
          HELLO
          <span className='text-headingGray'> FOLKS !</span>
        </h1>
        <h3 className='w-[70%] text-center lg:text-justify lg:w-[90%] text-lg font-medium text-textGray tracking-[0.02em]'>
          I'm an innovative AI/ML Engineer 
          passionate about solving real-world 
          challenges through cutting-edge technologies 
          and deep learning solutions.
        </h3>
    </section>
  )
}

export default HomePage