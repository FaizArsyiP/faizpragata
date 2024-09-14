import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
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
        <header className={`fixed w-full top-0 z-10 h-[68px] transition-all duration-300 ${
            isScrolled ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : 'bg-transparent text-white'
        }`}>
            <section className="w-full mx-auto p-4 flex relative items-center h-full">
                <div className="absolute right-5">
                    <button
                        id="hamburger-button"
                        class="text-3xl md:hidden cursor-pointer relative w-8 h-8"
                    >
                        <div
                        className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"
                        ></div>
                    </button>
                    <nav className="md:block hidden space-x-6 cursor-pointer mx-4 " aria-label="main">
                        <Link href="/" className="hover:text-cyan-700 text-2xl m-2 font-bold transition-all">Home</Link>
                        <Link href="#About" className="hover:text-cyan-700 text-2xl m-2 font-bold transition-all">About </Link>
                        <Link href="#Projects" className="hover:text-cyan-700 text-2xl m-2 font-bold transition-all">Projects</Link>
                    </nav>
                </div>       
            </section>
            <section
                id="mobile-menu"
                className="absolute bg-gray-950 w-full h-[1/2vh] text-xl flex-col justify-center origin-top animate-open-menu hidden"
            >
                <nav
                    className="flex flex-col h-full items-center p-4"
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

