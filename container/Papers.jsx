import React from 'react'
import Link from 'next/link';
import { SlPaperClip } from "react-icons/sl";


const Papers = () => {

    const paperContent = [
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do', 
            abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut.',
            link: 'https://www.google.com',
            month: 'Jan',
            year: '2021',
            date: '01',
            readTime: '5'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do', 
            abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut.',
            link: 'https://www.google.com',
            month: 'Feb',
            year: '2021',
            date: '01',
            readTime: '5'
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do', 
            abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut Sed do eiusmod tempor incididunt ut.',
            link: 'https://www.google.com',
            month: 'March',
            year: '2021',
            date: '01',
            readTime: '5'
        }
    ]

  return (
    <section id="publications" className='flex flex-col items-center lg:items-start mt-24 lg:mt-24 gap-3'>
        <h1 className='uppercase lg:text-[7rem]  text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]'>
          Research
          <span className='text-headingGray'> Papers</span>
        </h1>
        <div className='w-full'>
            {
                paperContent.map((paper, index) => (
                    <Link href={paper.link} key={index} className='relative lg:w-[50vw] xl:w-[35vw] flex flex-col gap-3 lg:gap-6 px-5 py-3 mt-6 rounded-xl hover:bg-[#191919] duration-300'>
                        <div className='w-full lg:w-[80%]'>
                            <h2 className='text-2xl font-semibold'>{paper.title}</h2>
                            <p className='text-textGray w-[100%] mt-2'>{paper.abstract}</p>
                        </div>
                        <div className='text-textGray font-kanit'>
                            {paper.month} {paper.date}, {paper.year}
                        </div>
                        <span>
                            <span className='absolute top-4 right-4 flex items-center text-orange'>
                                <SlPaperClip className='text-xl' />
                            </span>
                        </span>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default Papers