import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '@/data/socials';
import SectionHeading from './SectionHeading';

export default function Footer(){
    return(
        <footer className="border-t border-white/5" id="Contact">
            <section className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center">
                <SectionHeading eyebrow="Get in touch" title="Let's build something together" />
                <p className="text-slate-400 max-w-md -mt-6 mb-8">
                    Have a project in mind, an opportunity, or just want to say hi? My inbox is always open.
                </p>
                <Link
                    href={`mailto:${socialLinks.email}`}
                    className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
                >
                    Say Hello
                </Link>
                <div className="flex gap-6 mt-8 text-slate-400">
                    <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-cyan-400 transition-colors"><FaInstagram size={22} /></Link>
                    <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition-colors"><FaGithub size={22} /></Link>
                    <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><FaLinkedin size={22} /></Link>
                    <Link href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-cyan-400 transition-colors"><MdEmail size={22} /></Link>
                </div>
                <p className="text-xs text-slate-500 mt-12">
                    &copy; {new Date().getFullYear()} Faiz Arsyi Pragata. All rights reserved.
                </p>
            </section>
        </footer>
    )
}
