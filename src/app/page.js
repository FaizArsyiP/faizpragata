"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'devicon/devicon.min.css';
import { socialLinks } from "@/data/socials";
import { skillGroups } from "@/data/skills";
import { education } from "@/data/education";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  },[])

  return (
    <main className="mx-auto flex flex-col items-center">
      <section
        id="Home"
        className="flex flex-col-reverse justify-center max-w-4xl sm:flex-row px-6 items-center gap-10 sm:gap-16 scroll-mt-24 min-h-screen"
      >
        <article className="sm:w-1/2" data-aos="fade-up">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-4">
            Information Engineering Student
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
            Faiz Arsyi Pragata
          </h1>
          <p className="text-slate-400 text-lg mt-4 max-w-md">
            I build clean, functional web interfaces — currently focused on front-end development.
          </p>

          <div className="flex items-center gap-4 my-8 text-slate-400">
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-cyan-400 transition-colors"><FaInstagram size={22} /></Link>
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition-colors"><FaGithub size={22} /></Link>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors"><FaLinkedin size={22} /></Link>
            <Link href={`mailto:${socialLinks.email}`} aria-label="Email" className="hover:text-cyan-400 transition-colors"><MdEmail size={22} /></Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/cv/faiz-arsyi-pragata-cv.pdf"
              download
              className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
            >
              Download CV
            </Link>
            <Link
              href="#Contact"
              className="px-6 py-3 rounded-full border border-white/15 text-slate-200 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </article>

        <Image
          src="/assets/icon/me1.jpg"
          width={320}
          height={320}
          style={{ width: '45%' }}
          alt="Faiz Arsyi Pragata"
          className="rounded-full ring-1 ring-white/10"
          data-aos="fade-up"
        />
      </section>

      <section
        id="About"
        className="flex flex-col scroll-mt-20 max-w-3xl w-full items-center px-6 py-24"
      >
        <SectionHeading eyebrow="About" title="About Me" />
        <p className="text-slate-300 text-lg leading-relaxed text-center max-w-2xl mb-20" data-aos="fade-up">
          Hello! I&apos;m Faiz Arsyi Pragata, a 2<sup>nd</sup> year Information Engineering student at
          Gadjah Mada University. I have a great interest in web development, especially on the front-end.
        </p>

        <SectionHeading eyebrow="Skills" title="Tech Stack" />
        <div className="w-full grid sm:grid-cols-2 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/3 p-6"
              data-aos="fade-up"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 mb-5">
                {category}
              </h3>
              <div className="flex flex-col gap-5">
                {skills.map(({ name, icon, level }) => (
                  <div key={name}>
                    <div className="flex items-center gap-3 mb-2">
                      <i className={`${icon} text-xl`}></i>
                      <span className="text-sm font-medium text-slate-200">{name}</span>
                      <span className="text-xs text-slate-500 ml-auto">{level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-cyan-400"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="Education"
        className="flex flex-col scroll-mt-20 max-w-3xl w-full items-center px-6 py-24"
      >
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="w-full flex flex-col gap-8">
          {education.map(({ period, institution, degree, description }) => (
            <div
              key={`${institution}-${period}`}
              className="relative pl-6 border-l border-white/10"
              data-aos="fade-up"
            >
              <span className="absolute -left-1.25 top-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400 mb-1">{period}</p>
              <h3 className="text-lg font-bold text-white">{institution}</h3>
              <p className="text-sm text-slate-400 mb-2">{degree}</p>
              <p className="text-sm text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="Projects"
        className="flex flex-col scroll-mt-20 max-w-3xl w-full items-center px-6 py-24"
      >
        <SectionHeading eyebrow="Work" title="Projects" />
        <div className="flex flex-col items-center gap-6 w-full">
          <div
            className="rounded-2xl border border-white/10 bg-white/3 hover:border-cyan-400/40 transition-colors p-6 flex flex-col gap-3 w-full"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-white">Project #1</h3>
            <p className="text-slate-400">
              The website was created as a final project for the webdev training organized by KMTETI,
              built using Next.js and Tailwind CSS by utilizing a public API.
            </p>
            <Link
              href="https://github.com/FaizArsyiP/Final-Project-Webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 w-fit rounded-full border border-white/15 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            >
              Repository
            </Link>
          </div>

          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full border border-white/15 text-slate-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={20} />
            See more on GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
