'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
    const [windowHeight, setWindowHeight] = useState(1000);
    const { scrollY } = useScroll();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowHeight(window.innerHeight);
        }
    }, []);

    // Vanilla JS hamburger functionality
    useEffect(() => {
        const hamburgerBtn = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');
    
        if (!hamburgerBtn || !mobileMenu) return;

        const toggleMenu = () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            hamburgerBtn.classList.toggle('toggle-btn');
        }
    
        hamburgerBtn.addEventListener('click', toggleMenu);
        mobileMenu.addEventListener('click', toggleMenu);
        
        return () => {
            hamburgerBtn.removeEventListener('click', toggleMenu);
            mobileMenu.removeEventListener('click', toggleMenu);
        };
    }, []);

    // Navbar opacity and height based on scroll
    const opacity = useTransform(scrollY, [0, windowHeight], [0, 1]);
    const height = useTransform(scrollY, [0, 700], [50, 65]);
    const fontSize = useTransform(scrollY, [0, 700], ["1rem", "1.25rem"]);

    return (
        <motion.header
            style={{ opacity }}
            className="fixed w-full top-0 z-50 text-white transition-opacity duration-500 ease-in-out p-4"
        >
            <motion.div
                className="navbar-bg absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-500 ease-in-out"
                style={{ opacity, height }}
            />

            <section className="w-full mx-auto p-4 flex relative items-center h-full">
                <div className="absolute right-5">
                    <button
                        id="hamburger-button"
                        className="text-3xl md:hidden cursor-pointer relative w-8 h-8 flex flex-col justify-between p-2"
                    >
                        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
                    </button>
                    
                    <nav className="md:block hidden space-x-6 cursor-pointer mx-4" aria-label="main">
                        <motion.div style={{ fontSize }}>
                            <Link href="/" className="hover:text-cyan-700 m-2 font-bold transition-all">Home</Link>
                            <Link href="#About" className="hover:text-cyan-700 m-2 font-bold transition-all">About</Link>
                            <Link href="#Projects" className="hover:text-cyan-700 m-2 font-bold transition-all">Projects</Link>
                        </motion.div>
                    </nav>
                </div>       
            </section>
            
            <section
                id="mobile-menu"
                className="absolute bg-gray-950 w-screen h-[30vh] text-xl flex-col justify-center origin-top animate-open-menu hidden top-[62px] z-30 left-0"
            >
                <nav
                    className="flex flex-col h-auto items-center z-30 min-w-screen gap-2 md:hidden"
                    aria-label="mobile"
                >
                    <Link href="/" className="w-full text-center py-2 hover:text-cyan-700 font-bold text-2xl">
                        Home
                    </Link>
                    <Link href="#About" className="w-full text-center py-2 hover:text-cyan-700 font-bold text-2xl">
                        About
                    </Link>
                    <Link href="#Projects" className="w-full text-center py-2 hover:text-cyan-700 font-bold text-2xl">
                        Projects
                    </Link>
                </nav>
            </section>
        </motion.header>
    );
}