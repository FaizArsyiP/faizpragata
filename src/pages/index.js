import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdConstruct } from "react-icons/io";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'devicon/devicon.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  },[])

  return (
    <main className=" mx-auto flex flex-col items-center z-0">
      <section 
        id="Home"
        className="flex flex-col-reverse justify-center max-w-3xl sm:flex-row px-8  items-center gap-8 scroll-mt-40 h-screen "
      >
        <article className="sm:w-5/8" data-aos="fade-right">
          <p
            className="text-xl sm:text-2xl font-bold text-slate-500"
          >
            Information Engineering Student 
          </p>
          <h1 className="text-6xl sm:text-7xl font-bold text-white ">
            <span className="text-cyan-400">Faiz</span> Arsyi Pragata
          </h1>
          <div className="flex space-x-4 my-8">
            <Link href="https://www.instagram.com/faiz.pragata/" target="blank"><FaInstagram size={26} /></Link>
            <Link href="https://github.com/FaizArsyiP" target="blank"><FaGithub size={26} /></Link>
            <Link href="https://www.linkedin.com/in/faiz-arsyi-pragata-561363323/" target="blank"><FaLinkedin size={26} /></Link>
            <Link href="mailto:faizpragata@gmail.com" target="blank"><MdEmail size={26} /></Link>
          </div>
        </article>

        <Image
          src="/assets/icon/me1.jpg"
          width={400}
          height={400}
          style={{ width: '42%' }}
          alt="Faiz Arsyi Pragata"
          className="rounded-full z-0"
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"  
        />
      </section>
      
      <section
        id="About"
        className="flex flex-col scroll-mt-14  max-w-4xl items-center my-2 min-h-screen" 
      >
        <h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14 " 
        >
          About Me
        </h2>
        <p className="text-justify font-bold text-xl md:text-4xl mx-4 mb-12 w-5/6">
          Hello! i&apos;m Faiz Arsyi Pragata, i&apos;m a 2<sup>nd</sup> year Information Engineering Student at Gadjah Mada University. I have a great interest in Web Development, especially on front-end. 
        </p>

        <h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14 " 
        >
          Tech Stack
        </h2>
        
        <div className="">
          <div className="grid grid-cols-3 items-center gap-8 max-w-3xl"> 
            <i className="devicon-html5-plain colored text-6xl"></i>  
            <i className="devicon-css3-plain colored text-6xl"></i>
            <i className="devicon-javascript-plain colored text-6xl"></i>
            <i className="devicon-tailwindcss-plain colored text-6xl"></i>
            <i className="devicon-nextjs-plain text-6xl"></i>

          </div>
        </div>

      </section>


      <section
            id="Projects"
            className="flex flex-col scroll-mt-14  max-w-4xl items-center  my-4 min-h-screen"
        >
            <h2
                className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14 " 
            >
                Projects
            </h2>
            <div className="flex flex-col items-center gap-4 max-w-3xl">
                <div className="bg-slate-800 rounded-lg md:p-4 p-3 m-2 flex flex-col  gap-2 w-9/12 h-fit">
                    <h3 className="text-2xl font-bold text-gray-200">Project #1</h3>
                    <p className="md:text-lg text-base text-slate-300">The website was created as a final project for the webdev training organized by KMTETI, created using the next.js and tailwind CSS frameworks by utilizing the public API.</p>
                    <Link href="https://github.com/FaizArsyiP/Final-Project-Webdev" target="blank"
                    className="p-2 text-slate-400 border-2 rounded-lg  w-fit border-slate-500 text-sm font-bold transition-all duration-300 hover:bg-cyan-500 hover:text-white">
                        Repository
                    </Link>
                </div>
                
                <div className="h-48 w-3/4 md:h-56 border-4 rounded-3xl border-dashed border-slate-400 flex items-center flex-col justify-center py-4 px-2 mt-6 mb-14 ">
                    <IoMdConstruct size={60} className="text-slate-400" />
                    <h1 className=" text-slate-400 text-xl sm:text-3xl m-2 text-center">
                    More Project Coming Soon
                    </h1>
                </div>
            </div>
      </section> 
    </main>
  );
}
