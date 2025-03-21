import React from "react";
import { motion } from "framer-motion";
import { MdMilitaryTech } from "react-icons/md";

export default function Skills() {
  const skills = [
    { image: "/html.png", name: "HTML" },
    { image: "/tailwind.png", name: "Tailwind" },
    { image: "/js.png", name: "JavaScript" },
    { image: "/typescript.png", name: "TypeScript" },
    { image: "/react.png", name: "React" },
    { image: "/node-js.png", name: "Node.js" },
    { image: "/aws.png", name: "AWS" },
    { image: "/ai.png", name: "Machine Learning" },
    { image: "/cpp.png", name: "C++" },
    { image: "/python.png", name: "Python" },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white flex items-center justify-center">
          S<span className="text-red-500">kills</span>
          <MdMilitaryTech className="text-yellow-400 text-5xl" />
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Technologies I work with</p>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.1,
                y: -8,
                boxShadow: "0px 12px 25px rgba(255, 0, 0, 0.3)",
              }}
              animate={{
                y: [0, -5, 0],
                transition: { duration: 10, repeat: Infinity, },
              }}
              className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center text-white 
                         hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 
                         transition-all duration-300 cursor-magicwand shadow-md hover:shadow-red-500/50"
            >
              <motion.img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
              <h2 className="text-lg font-semibold text-center ">{skill.name}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
