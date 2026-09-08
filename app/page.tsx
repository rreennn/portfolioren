"use client";

import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import cloudly from "../public/cloudly.png";
import Git from "../public/git.svg";
import JS from "../public/js.svg";
import ReactJS from "../public/react.svg";
import Tailwind from "../public/tailwind.svg";
import TS from "../public/ts.svg";
import email from "../public/email.svg";
import github from "../public/github.svg";
import linkedin from "../public/linkedin.svg";
import talitakum from "../public/image/talitakum.png";
import catering from "../public/image/catering.png";
import cateringmobile from "../public/image/catering-mobile.jpeg";
import talitakummobile from "../public/image/talitakum-mobile.jpeg";
import floodpost from "../public/image/floodpost.png";
import cafe from "../public/image/cafe.png";
import cafemobile from "../public/image/cafe-mobile.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3f0] flex flex-col lg:flex-row p-6 md:p-12 lg:p-16 gap-10">
      {/* profile */}
      <div className="border border-[#758BFD] lg:w-1/3 lg:sticky lg:top-16 bg-gradient-to-b from-[#AEB8FE] to-[#27187e] shadow-2xl my-[25%] md:m-0 p-6 md:p-10 rounded-2xl md:flex md:flex-col justify-center h-auto lg:h-[80vh]">
        <div className="rounded-full bg-slate-200 w-28 h-28 flex mx-auto border-[#ff7e00] border-3 pt-1 shrink-0">
          <Image
            src={cloudly}
            alt="mascot"
            width={300}
            className="m-auto"
            loading="eager"
          />
        </div>
        <div className="text-center py-3">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-shadow-lg">
            Keren Karenaningtyas
          </h1>
          <h2 className="text-white text-base md:text-lg text-shadow-md">
            Frontend / Web Developer
          </h2>
        </div>
        <div className="flex">
          <span className="text-black text-xs md:text-sm font-thin leading-relaxed text-center w-fit mx-auto bg-[#FFC20E] border-slate-400 p-0.5 px-2 rounded-md font-syne">
            "i like to make website"
          </span>
        </div>

        {/* tech stack */}
        <div className="flex flex-wrap text-sm text-slate-400 gap-2 pt-4 w-full justify-center">
          <div className="bg-[#27187E] p-2 md:p-2.5 rounded-full shadow-md">
            <Image src={JS} alt="JS" width={22} />
          </div>
          <div className="bg-[#27187E] p-2 md:p-2.5 rounded-full shadow-md">
            <Image src={ReactJS} alt="ReactJS" width={22} />
          </div>
          <div className="bg-[#27187E] p-2 md:p-2.5 rounded-full shadow-md">
            <Image src={TS} alt="TS" width={22} />
          </div>
          <div className="bg-[#27187E] p-2 md:p-2.5 rounded-full shadow-md">
            <Image src={Tailwind} alt="Tailwind" width={22} />
          </div>
          <div className="bg-[#27187E] p-2 md:p-2.5 rounded-full shadow-md">
            <Image src={Git} alt="git" width={22} />
          </div>
        </div>

        <hr className="my-4 h-1 w-32 md:w-48 mx-auto rounded-sm border-0 bg-neutral-400" />

        <Link
          href="https://drive.google.com/file/d/1eoQTl-tkRw1KepUlni8jgph5etri1fLL/view?usp=sharing"
          className="group mx-auto"
        >
          <p className="text-black text-sm font-semibold leading-relaxed text-center w-fit mx-auto bg-[#FFC20E] hover:bg-[#ff7e00] duration-200 p-1 px-2 rounded-md">
            My resume
          </p>
        </Link>

        {/* contact */}
        <div className="pt-4 flex justify-center lg:justify-start">
          <ul className="flex flex-col gap-2 pt-2">
            <p className="text-white text-sm font-medium text-center md:text-left">
              my links:
            </p>
            <li className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-lg">
                <Image src={github} alt="github" height={20} width={20} />
              </div>
              <Link
                href={"https://github.com/rreennn"}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white text-sm"
              >
                <p>GitHub</p>
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </li>
            <li className="flex gap-2 items-center">
              <div className="bg-white p-1 rounded-lg">
                <Image src={email} alt="email" height={20} width={20} />
              </div>
              <a
                href="mailto:kerenkaren1704@gmail.com"
                className="group text-white text-sm"
              >
                <p>Email</p>
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <div className="bg-white p-1 rounded-lg">
                <Image src={linkedin} alt="linkedin" height={20} width={20} />
              </div>
              <Link
                href={"https://www.linkedin.com/in/karenaningtyas"}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white text-sm"
              >
                <p>LinkedIn</p>
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* project cards */}
      <div className="lg:w-2/3 min-h-screen flex flex-col gap-6">
        {/* project 1 */}
        <ProjectCard
          tag="Project 01"
          title="Catering Information System"
          desc="Final project web application for catering order and transaction recap. Built with the MERN stack, integrated with Midtrans for digital payments and Fonnte for automated Whatsapp order confirmation."
          topClass="md:top-16 top-5"
          bgClass="bg-[#27187e] text-white"
        >
          {/* Ubah flex jadi col di HP, row di layar md ke atas */}
          <div className="flex md:flex-row gap-4 justify-center items-center">
            <Image
              src={catering}
              alt="catering"
              className="rounded-lg object-cover md:w-auto h-[150px] md:h-[280px]"
              loading="eager"
            />
            <Image
              src={cateringmobile}
              alt="catering-mobile"
              className="rounded-lg w-auto h-[150px] md:h-[280px]"
              loading="eager"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                React
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Node.js
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Express.js
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href={"https://catering-app-ta.vercel.app/"}
                target="_blank"
                className="group"
              >
                Live Demo↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
              <Link
                href={"https://github.com/rreennn/catering-app-ta"}
                target="_blank"
                className="group"
              >
                GitHub↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </div>
          </div>
        </ProjectCard>

        {/* project 2 */}
        <ProjectCard
          tag="Project 02"
          title="Profile Website for SLB Talitakum"
          desc="Website for transparent BOS (School Operational Assistance) fund reporting. Collaborated in a team to design and develop the client-side interface"
          topClass="md:top-17.5 top-7"
          bgClass="bg-[#3620b7] text-white"
        >
          <div className="flex md:flex-row gap-4 justify-center items-center">
            <Image
              src={talitakum}
              alt="talitakum"
              width={300}
              className="rounded-lg md:w-auto object-cover h-[150px] md:h-[300px]"
              loading="eager"
            />
            <Image
              src={talitakummobile}
              alt="talitakum-mobile"
              width={300}
              className="rounded-lg h-[150px] md:h-[300px] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                React
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Laravel
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href={"https://slbtalitakum.sch.id/"}
                target="_blank"
                className="group"
              >
                Live Demo↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </div>
          </div>
        </ProjectCard>

        {/* project 3 */}
        <ProjectCard
          tag="Project 03"
          title="FloodPost"
          desc="Exam project and my first experience building a MERN CRUD application. Note: Currently optimized for desktop view only"
          topClass="md:top-18.5 top-9"
          bgClass="bg-[#27187e] text-white"
        >
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              src={floodpost}
              alt="floodpost"
              width={300}
              className="rounded-lg object-cover md:h-[300px] md:w-auto"
              loading="eager"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                React
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Node.js
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Express.js
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                MongoDB
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href={
                  "https://uas-react-flood-post-c8cszeds2-rreennns-projects.vercel.app/"
                }
                target="_blank"
                className="group"
              >
                Live Demo↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
              <Link
                href={"https://github.com/rreennn/UAS-React-FloodPost"}
                target="_blank"
                className="group"
              >
                GitHub↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </div>
          </div>
        </ProjectCard>

        {/* project 4 */}
        <ProjectCard
          tag="Project 04"
          title="Cafe Landing Page"
          desc="First independent exploration using React to build responsive website layout. This project inspired by Youtube tutorials"
          topClass="top-11 mb-[29%] md:m-0"
          bgClass="bg-[#3620b7] text-white"
        >
          <div className="flex md:flex-row gap-4 justify-center items-center">
            <Image
              src={cafe}
              alt="cafe"
              className="rounded-lg md:w-auto object-cover h-[150px] md:h-[300px]"
              loading="eager"
            />
            <Image
              src={cafemobile}
              alt="cafe-mobile"
              width={300}
              className="rounded-lg h-[150px] md:h-[300px] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                React
              </span>
              <span className="px-3 py-1 bg-[#ffc20e] text-black text-xs md:text-sm rounded-full border border-[#ff7e00]">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href={"https://web-cafe-two.vercel.app/"}
                target="_blank"
                className="group"
              >
                Live Demo↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
              <Link
                href={"https://github.com/rreennn/web-cafe"}
                target="_blank"
                className="group"
              >
                GitHub↗
                <div className="bg-[#aeb8fe] h-0.5 w-0 group-hover:w-full transition-all duration-150"></div>
              </Link>
            </div>
          </div>
        </ProjectCard>
      </div>
    </main>
  );
}
