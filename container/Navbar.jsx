'use client'

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { GoTools } from "react-icons/go";



const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && isVisible) {
                // Scrolling down, hide the navbar
                setIsVisible(false);
            } else if (prevScrollY.current > currentScrollY && !isVisible) {
                // Scrolling up, show the navbar
                setIsVisible(true);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const clickSmoothScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: "smooth" });
  
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    }

    const navMenu = [
        {
            name: 'Home',
            url: '#home',
            icon: <FiHome />
        },
        {
            name: 'About',
            url: '#about',
            icon: <IoPersonOutline/>
        },
        {
            name: 'Skills',
            url: '#skills',
            icon: <GoTools />
        },
        {
            name: 'Experience',
            url: '#experience',
            icon: <MdWorkOutline />
        },
        {
            name: 'Reserach',
            url: '#publications',
            icon: <BsBook />
        },
        {
            name: 'Contact',
            url: '#contact',
            icon: <MdOutlineAlternateEmail />
        },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 w-full px-2 py-5 text-white transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <ul className='flex items-center justify-center w-[22rem] mx-auto bg-bgGray rounded-3xl'>
                {navMenu.map((menu, index) => (
                    <li key={index} className='inline-block p-4 text-2xl hover:text-orange duration-300'>
                        <Link href={menu.url} className='nav-link' onClick={clickSmoothScroll}>
                            {menu.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;