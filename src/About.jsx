import React from 'react';
import Badges from './Component/Badges';
import { div } from 'motion/react-client';

export default function About() {
  return (
    
    <section
      id="About"
      className="mt-10 flex flex-col opacity-80 w-[80vw] max-w-3xl mx-auto md:ml-23 rounded-xl bg-gray-900 p-6 shadow-lg border-2 border-gray-800 relative overflow-hidden"

    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-10 blur-3xl"></div>

      <h1 className="text-white text-5xl font-bold relative z-10">
        About <span className="text-red-600">Me</span>
      </h1>

 
      <p className="leading-8 text-green-400 font-mono text-lg mt-5 relative z-10">
        Passionate Web Developer with experience in building interactive and responsive applications.  
        Hands-on experience in <span className="text-yellow-400 font-bold">Machine Learning</span> and  
        <span className="text-yellow-400 font-bold"> Federated Learning</span>, specifically dealing with non-IID data.  
        Completed research on optimizing communication in federated learning for non-IID data.
      </p>

      <p className="leading-8 text-gray-300 font-mono text-lg mt-4 relative z-10">
        Additionally, I have hands-on experience in <span className="text-blue-400 font-bold">Cloud Computing</span> with AWS, having  
        completed the <span className="text-orange-400 font-bold">AWS Security Fundamentals</span> and <span className="text-orange-400 font-bold">Cloud Foundation</span> courses.  
        I am also actively focusing on <span className="text-pink-400 font-bold">open-source contributions</span>.
      </p>
    </section>
  
  );
}
