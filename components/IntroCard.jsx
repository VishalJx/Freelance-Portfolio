import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { LuTwitter } from "react-icons/lu";
import { PiLinkedinLogoBold } from "react-icons/pi";


const IntroCard = () => {

    const socials = [
        {
            id: 1,
            name: 'Linkedin',
            icon: <PiLinkedinLogoBold />,
            link: 'https://www.linkedin.com/in/priyapal/'
        },
        {
            id: 2,
            name: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/priyapal/'
        },
        {
            id: 3,
            name: 'Youtube',
            icon: <FiYoutube />,
            link: 'https://www.youtube.com/priyapal/'
        },
        {
            id: 4,
            name: 'Twitter',
            icon: <LuTwitter />,
            link: 'https://www.twitter.com/priyapal/'
        },
    ]

  return (
    <div className='lg:w-[22rem] w-[80vw] mx-auto lg:mx-0 h-[60vh] lg:h-[68vh] flex flex-col items-center justify-center gap-3 border rounded-2xl bg-[#fff6f6] text-black lg:fixed relative'>
        <div className='w-[16rem] lg:w-[15rem]'>
            <Image
                src="/assets/priya.jpg"
                alt="PRIYA"
                width={250}
                height={280}
                className='border rounded-2xl bg-red-gradient'
                style={{objectFit: 'contain'}}
            />
        </div>
        <h1 className='uppercase font-extrabold text-4xl'>Priya Pal</h1>
        <p className='font-kanit w-[60%] lg:w-[65%] text-[1.1rem] text-textGray font-semibold text-center mt-3'>
            A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className='text-2xl flex gap-8 items-center mt-3'>
            {socials.map(social => (
                <a key={social.id} href={social.link} className='flex items-center p-1 text-orange rounded-lg hover:bg-orange hover:text-white transition-all duration-300'>
                    {social.icon}
                </a>
            ))}
        </div>
    </div>
  )
}

export default IntroCard