import React from 'react'
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import glassesimoji from "../img/glassesimoji.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import FloatingDiv from './FloatingDiv';

const Intro = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mx-10 gap-12 my-6 py-6 relative">
        <div className="intro-title md:px-2 w-5/6 md:w-1/2 flex-1">
          <div className="flex flex-col  items-start px-0 md:px-2">
            <span className="text-4xl ">Hi! I Am</span>
            <span className="text-yellow-600 text-5xl ">Unza Sohail</span>
          </div>
          <div className="introduction my-3 ">
            Full-stack Developer with high level of experience in web designing
            and development, producing the Quality work
          </div>
          <div className="w-40 py-3 my-12 px-12 text-lg font-medium text-white bg-yellow-500 shadow-3xl    rounded-[34px]  hover:bg-yellow-400 transition duration-300">
            Hire me
          </div>
        </div>
        <div className="image-side mx-4 md:mx-0 relative flex-1">
          <img
            src={Vector1}
            alt=""
            className="absolute z-1 transform scale-[0.79] -left-[15%] -top-[9%]"
          />
          <img
            src={Vector2}
            alt=""
            className="absolute z-1 transform scale-[0.67] -left-[3rem] -top-[4.6rem]"
          />
          <img
            src={boy}
            alt=""
            className="absolute z-1 transform scale-[0.99] left-[18%] -top-[12%]"
          />
          <img
            src={glassesimoji}
            alt=""
            className="transform scale-[0.4] absolute -top-[19%] -left-[24%] rounded-[50%]"
          />
          <div className=" w-2/5 -top-[4%] -right-[0] z-2 absolute">
            <FloatingDiv image={crown} text1="Web" text2="Developer" />
          </div>
          <div className="w-2/5 top-[15rem] -left-[2rem] z-2 absolute">
            <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
          </div>
          <div className="top-[14rem] -right-[8%] w-[24rem] h-[14rem] absolute rounded-[50%] bg-gradient-to-r from-indigo-500 bg-[#edd0ff] backdrop-blur-[812px] z-[-9] blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Intro
