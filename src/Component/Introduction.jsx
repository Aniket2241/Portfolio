import { Typewriter } from "react-simple-typewriter";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4">
      
      <div className="text-gray-200 font-cursive text-5xl md:text-6xl lg:text-7xl font-bold mt-10 md:mt-0 p-5">
        <h1 className="flex items-center">
          Hi... <img src="wave.gif" width="80px" className="ml-2" alt="Wave" />
        </h1>
        I'm Aniket Bhardwaj 
        <br />
        
        <div className="text-indigo-500 opacity-90 h-[60px] md:h-[60px] lg:h-[70px] ">
          <Typewriter
            words={["{Software Engineer}", "{a Web Developer}", "{an AI Researcher}"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>

      <img
        src="aniket.jpeg"
        alt="profile_pic"
        className="rounded-full border-4 border-gray-400 w-[250px] md:w-[300px] lg:w-[400px] mt-5 md:mt-0"
      />
    </div>
  );
};

export default Introduction;
