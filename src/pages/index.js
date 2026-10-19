import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdConstruct } from "react-icons/io";
import 'devicon/devicon.min.css';
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import TypeWrite from "@/components/TypeWrite";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center z-0">
      <section
        id="Home"
        className="flex flex-col-reverse justify-center max-w-5xl sm:flex-row px-8 items-center gap-8 scroll-mt-40 h-screen "
      >
        <motion.article
          className="sm:w-1/2 w-full flex flex-col items-start justify-center"
          style={{ width: '70%' }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <TypeWrite />
          <h1 className="text-5xl sm:text-7xl font-bold text-white">
            <span className="text-cyan-400">Faiz</span> Arsyi Pragata
          </h1>
          <div className="flex space-x-4 my-8">
            <Link href="https://www.instagram.com/faiz.pragata/" target="blank"><FaInstagram size={26} /></Link>
            <Link href="https://github.com/FaizArsyiP" target="blank"><FaGithub size={26} /></Link>
            <Link href="https://www.linkedin.com/in/FaizArsyiPragata" target="blank"><FaLinkedin size={26} /></Link>
            <Link href="mailto:faizpragata@gmail.com" target="blank"><MdEmail size={26} /></Link>
          </div>
        </motion.article>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "linear" }}
          viewport={{ once: true, amount: 0.3 }}
          className="z-0"
          style={{ width: '65%' }}
        >
          <Image
            src="/assets/image/faiz1.png"
            width={600}
            height={600}
            alt="Faiz Arsyi Pragata"
            className="h-full w-full object-cover "
          />
        </motion.div>
      </section>

      <section
        id="About"
        className="flex flex-col scroll-mt-14 max-w-4xl items-center my-2 min-h-screen"
      >
        <motion.h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-justify font-bold text-xl md:text-4xl mx-4 mb-12 w-5/6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Hello! i&apos;m Faiz Arsyi Pragata, i&apos;m a 2<sup>nd</sup> year Information Engineering Student at Gadjah Mada University. I have a great interest in Web Development, especially on front-end.
        </motion.p>

        <motion.h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-3 items-center gap-8 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <i className="devicon-html5-plain colored text-6xl"></i>
          <i className="devicon-css3-plain colored text-6xl"></i>
          <i className="devicon-javascript-plain colored text-6xl"></i>
          <i className="devicon-tailwindcss-plain colored text-6xl"></i>
          <i className="devicon-nextjs-plain text-6xl"></i>
        </motion.div>
      </section>

      <section
        id="Projects"
        className="flex flex-col scroll-mt-14 max-w-4xl items-center my-4 min-h-screen"
      >
        <motion.h2
          className="text-cyan-400 text-4xl font-bold text-center sm:text-6xl m-4 sm:m-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-4 max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            title="Final Project Webdev"
            description="The website was created as a final project for the webdev training organized by KMTETI, created using the next.js and tailwind CSS frameworks by utilizing the public API."
            link="https://github.com/FaizArsyiP/Final-Project-Webdev"
          />

          <div className="h-48 w-3/4 md:h-56 border-4 rounded-3xl border-dashed border-slate-400 flex items-center flex-col justify-center py-4 px-2 mt-6 mb-14">
            <IoMdConstruct size={60} className="text-slate-400" />
            <h1 className="text-slate-400 text-xl sm:text-3xl m-2 text-center">
              More Project Coming Soon
            </h1>
          </div>
        </motion.div>
      </section>
    </main>
  );
}