import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar(){
    const [ticking, setTicking] = useState(false);

    useEffect(() => {
        const navbar = document.querySelector('.navbar-bg');

        const updateNavbar = () => {
            if (window.innerWidth > 768) {
                const scrollPosition = window.scrollY;
                const scaling = 1 - (scrollPosition / (2 * window.innerHeight));
                const limitedScaling = Math.max(0.55, Math.min(1.0, scaling));
                const navbarOpacity = scrollPosition / (1 * window.innerHeight);

                navbar.style.opacity = navbarOpacity;

                // Change navbar height
                if (scrollPosition < 700) {
                    navbar.style.height = '70px'
                }else{
                    navbar.style.height = `${limitedScaling * 130}px`
                };

                // Change font size of nav links
                document.querySelectorAll('nav a').forEach((element) => {
                element.style.fontSize = `calc(${13 + limitedScaling * 1}px + ${limitedScaling * 0.75}vw)`;
                });
            }
            setTicking(false);
        };

        updateNavbar();

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                setTicking(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ticking]);

    useEffect(() => {
        const hamburgerBtn = document.getElementById('hamburger-button');
        const mobileMenu = document.getElementById('mobile-menu');
    
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

    return(
        <header className="fixed w-full top-0 z-50 text-white transition-opacity duration-500 ease-in-out p-4">
            <div className="navbar-bg absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-opacity duration-500 ease-in-out"></div>
            <section className="w-full mx-auto p-4 flex relative items-center h-full">
                <div className="absolute right-5">
                    <button
                        id="hamburger-button"
                        className="text-3l md:hidden cursor-pointer relative w-8 h-8 flex flex-col justify-between p-2"
                    >
                        <div
                        className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"
                        ></div>
                    </button>
                    <nav className="md:block hidden space-x-6 cursor-pointer mx-4 " aria-label="main">
                        <Link href="/" className="hover:text-cyan-700 m-2 font-bold transition-all">Home</Link>
                        <Link href="#About" className="hover:text-cyan-700 m-2 font-bold transition-all">About </Link>
                        <Link href="#Projects" className="hover:text-cyan-700 m-2 font-bold transition-all">Projects</Link>
                    </nav>
                </div>       
            </section>
            <section
                id="mobile-menu"
                className="absolute bg-gray-950 w-screen h-[1/2vh] text-xl flex-col justify-center origin-top animate-open-menu hidden top-[62px] z-50 left-3"
            >
                <nav
                    className="flex flex-col h-full items-center p-4 z-50 min-w-screen "
                    aria-label="mobile"
                >
                    <Link href="/" className="w-full text-center py-2 Projects hover:text-cyan-700 font-bold"
                        >Home</Link>
                    <Link href="#About" className="w-full text-center py-2 Projects hover:text-cyan-700 font-bold"
                        >About</Link>
                    <Link href="#Projects"className="w-full text-center py-2 Projects hover:text-cyan-700 font-bold"
                        >Projects</Link>
                </nav>
            </section>
        </header>
    )
}

