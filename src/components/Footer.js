import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer(){
    return(
        <footer class="bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white text-xl" id="Contact">
            <section
            class="max-w-4xl mx-auto p-4 sm:flex-row sm:justify-between items-center"
            >
                <div className="flex space-x-4 my-4 flex-row justify-center">
                    <Link href="https://www.instagram.com/faiz.pragata/" target="blank"><FaInstagram size={35} /></Link>
                    <Link href="https://github.com/FaizArsyiP" target="blank"><FaGithub size={35} /></Link>
                    <Link href="https://www.linkedin.com/in/faiz-arsyi-pragata-561363323/" target="blank"><FaLinkedin size={35} /></Link>
                    <Link href="mailto:faizpragata@gmail.com" target="blank"><MdEmail size={35} /></Link>
                </div>    
            </section>
        </footer>
    )
}