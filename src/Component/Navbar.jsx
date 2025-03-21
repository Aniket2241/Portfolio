import React, { useState } from "react";
import { FaUserSecret, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram, GrProjects } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { MdMilitaryTech } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { LuNewspaper } from "react-icons/lu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const download = async () => {
    try {
      const url = "https://drive.google.com/uc?export=download&id=12cePobk5hh3ezMp_nk1Isxgk6oE90lgw";
      const link = document.createElement("a");
      link.href = url;
      link.download = "Aniket_Bhardwaj";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.log("Download failed", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navButtons = [
    { name: "Projects", icon: <GrProjects className="text-red-400 text-xl" />, action: () => scroll("projects") },
    { name: "Skills", icon: <MdMilitaryTech className="text-yellow-500 text-xl" />, action: () => scroll("skills") },
    { name: "Resume", icon: <LiaDownloadSolid className="text-yellow-300 text-xl" />, action: download },
    { name: "About", icon: <LuNewspaper className="text-blue-400 text-xl" />, action: () => scroll("About") },
  ];

  return (
    <header className="sticky top-0 bg-black opacity-90 border-b-2 border-gray-700 z-50 p-2">
      <nav className=" mx-auto flex items-center  justify-between">
        <div className="flex items-center gap-4">
          <div className="md:hidden cursor-magicwand" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </div>
          <div className="flex items-center  gap-2">
            <FaUserSecret className="text-black text-3xl border-2 bg-red-500 border-blue-400 rounded-full" />
            <h1 className="text-purple-400 font-bold text-lg">&lt;Aniket Bhardwaj /&gt;</h1>
          </div>
        </div>
        <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-10 font-mono absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 border-b-2 md:border-none border-gray-700`}>
          {navButtons.map((btn, index) => (
            <button key={index} className="flex items-center gap-1 animated-underline cursor-magicwand text-white hover:text-green-400 text-lg" onClick={btn.action}>
              {btn.icon} {btn.name}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Aniket2241" target="_blank" >
            <FaGithub className="text-white text-3xl hover:scale-125 cursor-magicwand transition-transform duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/aniket-bhardwaj-672243296/" target="_blank">
            <FaLinkedin className="text-blue-400 text-3xl hover:scale-125 cursor-magicwand transition-transform duration-200" />
          </a>
          <a href="https://leetcode.com/u/aniket2241/" target="_blank" >
            <SiLeetcode className="text-yellow-400 text-3xl hover:scale-125 cursor-magicwand transition-transform duration-200" />
          </a>
          <a href="https://www.instagram.com/aniket__sharmaa/" target="_blank" >
            <GrInstagram className="text-pink-400 text-3xl hover:scale-125 cursor-magicwand transition-transform duration-200" />
          </a>
        </div>
      </nav>
    </header>
  );
}