import React from 'react';
import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: "Cryptex",
      thumbnail: "/Cryptex.jpg",
      info: "Built with cutting-edge technologies like React, Node.js (Express), and Tailwind CSS, Cryptex offers real-time price updates, the latest news, a comprehensive crypto glossary, and visualized trends through interactive graphs, providing historical data views for up to a year."
    },
    {
      title: "Chatflow",
      thumbnail: "/realtime.jpg",
      info: "Chatflow is a real-time chat application built using React and Express.js. It was designed for students with chat rooms for different departments. It enables multiple users to chat in real-time and ensures privacy through room isolation."
    },
    {
      title: "StreamNow",
      thumbnail: "/streamnow.jpg",
      info: "StreamNow is a YouTube clone developed using React.js, HTML, and Tailwind CSS. With its intuitive interface and seamless video streaming capabilities, it offers users an immersive content consumption experience."
    },
    {
      title: "Home Price Prediction Model",
      thumbnail: "/homeprediction.png",
      info: "Built using Python and Machine Learning libraries, this model predicts home prices using Linear Regression, incorporating L1 and L2 regularization to prevent overfitting and improve generalization."
    }
  ];

  return (
    <>  
      <section id="projects" className='bg-project_wall mt-20 border-t-2 border-gray-300 px-4'>
        <h1 className='text-gray-300 mt-5 font-bold text-4xl ml-23'>Projects</h1> 
        <div className="flex flex-col items-center gap-10 mt-10">
          {projects.map((element, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-6 w-full max-w-[900px]`}
            >
              <img 
                src={element.thumbnail} 
                alt={element.title} 
                className="w-full md:w-[50%] max-w-[500px] border-2 border-green-400 rounded-md"
              />
              <div className='w-full md:w-[50%] flex flex-col gap-4 text-center md:text-left'>
                <h1 className='text-sky-500 font-bold text-3xl'>{element.title}</h1>
                <h2 className='text-gray-400 text-lg leading-7 font-mono'>{element.info}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
