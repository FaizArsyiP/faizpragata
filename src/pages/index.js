import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdConstruct } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" mx-auto flex flex-col items-center">
      <section 
        id="Home"
        className="flex flex-col-reverse justify-center max-w-4xl sm:flex-row px-8  items-center gap-8 scroll-mt-40 h-screen"
      >
        <article className="sm:w-5/8  ">
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
          width={300}
          height={400}
          style={{ width: '50%' }}
          alt="Picture of the author"
          className="rounded-full"
        />
      </section>
      
      

      <section
        id="About"
        className="p-2 scroll-mt-20 flex flex-col max-w-5xl items-center my-2 widescreen:section-min-height tallscreen:section-min-height"
      >
        <h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14"
        >
          About Me
        </h2>
        <p className="text-justify font-bold text-xl sm:text-4xl mx-4 mb-24">
          Hello! i&apos;m Faiz Arsyi Pragata, i&apos;m a 2<sup>nd</sup> year Information Engineering Student at Gadjah Mada University. I have a great interest in Web Development 
        </p>

        <h2
          id="Projects"
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-8 "
        >
          My Project
        </h2>
        <div className="h-48 w-3/4 md:w-1/2 md:h-[350px] relative border-4 rounded-3xl border-dashed border-slate-400 flex items-center flex-col justify-center py-4 px-2 mt-6 mb-16 ">
          <IoMdConstruct size={60} className="text-slate-400" />
          <h1 className=" text-slate-400 text-xl sm:text-3xl m-2 text-center">
            More Project Coming Soon
          </h1>
        </div>
      </section>

    </main>
  );
}
