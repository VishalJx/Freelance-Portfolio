import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center lg:items-start my-20 lg:my-28">
        <h1 className='uppercase lg:text-[7rem] text-[3rem] text-center sm:text-start font-bold leading-[2.8rem] lg:leading-[6.5rem]'>
            LET'S WORK
            <span className='text-headingGray'> TOGETHER</span>
        </h1>
        <form 
            className='flex flex-col w-full gap-5 mt-[4rem] lg:px-2 px-6'
            action='https://formspree.io/f/mqakjvke'
            method='POST'>
            <div className='w-full flex gap-2'>
                <span className='flex flex-col w-full gap-2'>
                    <label htmlFor="" className='text-sm text-gray-400'>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="bg-gray-800 text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring focus:ring-orange"
                    />
                </span>
                <span className='flex flex-col w-full gap-2'>
                    <label htmlFor="" className='text-sm text-gray-400'>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your@email.com"
                        className="bg-gray-800 text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring focus:ring-orange"
                    />                
                </span>
            </div>

            <div className='flex flex-col gap-2 mt-1'>
                <label htmlFor="" className='text-sm text-gray-400'>Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    className="bg-gray-800 text-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring focus:ring-orange no-scrollbar"
                ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg w-full focus:outline-none focus:ring focus:ring-orange hover:bg-opacity-70 duration-300"
            >Submit
            </button>
        </form>
    </section>
  );
};

export default ContactMe;