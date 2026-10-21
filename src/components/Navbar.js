"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Education", label: "Education" },
    { href: "#Projects", label: "Projects" },
    { href: "#Contact", label: "Contact" },
];

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen((open) => !open);
    const closeMenu = () => setIsMenuOpen(false);

    return(
        <header
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-white font-bold tracking-tight">
                    Faiz<span className="text-cyan-400">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8" aria-label="main">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>

            <nav
                id="mobile-menu"
                aria-label="mobile"
                onClick={closeMenu}
                className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-gray-950/95 backdrop-blur-md border-b border-white/5 ${
                    isMenuOpen ? 'max-h-64' : 'max-h-0'
                }`}
            >
                <div className="flex flex-col px-6 py-4 gap-4">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link key={href} href={href} className="text-slate-300 hover:text-cyan-400 font-medium">
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
