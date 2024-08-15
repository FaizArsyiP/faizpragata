import Link from "next/link";
import { useEffect } from "react";


export default function Navbar(){
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
        <header className="bg-cyan-500 text-white sticky top-0 z-10
        h-[68px]">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-4xl font-medium">
                    
                </Link>
                <div>
                    <button
                        id="hamburger-button"
                        class="text-3xl md:hidden cursor-pointer relative w-8 h-8"
                    >
                        <div
                        className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"
                        ></div>
                    </button>
                    <nav className="md:block hidden text-xl space-x-8 cursor-pointer mx-4" aria-label="main">
                        <Link href="/" className="hover:text-cyan-700 text-2xl m-2 font-bold">Home</Link>
                        <Link href="#About" className="hover:text-cyan-700 text-2xl m-2 font-bold">About </Link>
                        <Link href="#Contact" className="hover:text-cyan-700 text-2xl m-2 font-bold">Contact</Link>
                    </nav>
                </div>       
            </section>
            <section
                id="mobile-menu"
                className="absolute top-68 bg-slate-950 w-full h-screen text-5xl flex-col justify-center origin-top animate-open-menu hidden"
            >
                <nav
                    className="flex flex-col min-h-screen items-center py-8"
                    aria-label="mobile"
                >
                    <Link href="/" className="w-full text-center py-6 hover:text-cyan-700 font-bold"
                        >Home</Link>
                    <Link href="#About" className="w-full text-center py-6 hover:text-cyan-700 font-bold"
                        >About</Link>
                    <Link href="#Contact"className="w-full text-center py-6 hover:text-cyan-700 font-bold"
                        >Contact</Link>
                </nav>
            </section>
        </header>
    )
}

