import React from 'react'

import glassesimoji from "../img/glassesimoji.png";
const Services = () => {
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="left flex-1">
          <div className="service-heading ">
            <h1 className="text-4xl font-bold text-white">My Awesome</h1>
            <h1 className="text-4xl text-yellow-600 font-bold">Services</h1>
          </div>
          <p className="text-center">
            I'm Full Stack Developer. I have experience of 4 months in software house. I did work on live projects. My expertise lie on React Js, Javascript, Nodejs, Mongodb.
          </p>
          {/* <div className="button mt-8 pl-32  ">
            <button className="bg-yellow-600 p-2 rounded-sm shadow-3xl text-white">
              Download CV
            </button>
          </div> */}
        </div>
        {/* <div className="right flex-1">
          <div className="mx-auto">
            <div className="emoji"></div>
            <h1>Frontend Developer</h1>
            <p>Html, Css, Javascript, ReactJs,Material ui,tailwind css</p>
          </div>
        </div> */}

        <div className="right flex-1 mt-12 relative">
          {/* <div class="container px-1 py-4 mx-auto"> */}
          {/* <div class="flex flex-wrap -m-4"> */}
          <div class=" lg:w-64 mx-auto absolute -top-7 -right-[10px] ">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-4 pb-4  rounded-lg border-[5px] border-yellow-400/100 overflow-hidden text-center relative">
              {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                <img
                  src={glassesimoji}
                  alt=""
                  className="transform scale-[0.4] absolute -top-[10px] rounded-[50%]"
                />
              </h2> */}
              <div className="py-4">
                <img
                  src={glassesimoji}
                  alt=""
                  className="transform scale-[0.4] absolute -top-[69px] left-[13px] rounded-[50%]"
                />
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Frontend Developer
              </h1>
              <p class="leading-relaxed mb-3">
                Html, Css, Javascript, ReactJs,Material ui,tailwind css
              </p>
              <a class="text-white p-2 rounded bg-yellow-600 inline-flex items-center">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
           
            </div>
          </div>
          <div class=" lg:w-64 mx-auto absolute top-[9rem] -left-9">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-4 pb-4 rounded-lg border-[5px] border-yellow-400/100 overflow-hidden text-center relative">
           
              <div className="py-4">
                <img
                  src={glassesimoji}
                  alt=""
                  className="transform scale-[0.4] absolute -top-[69px] left-[13px] rounded-[50%]"
                />
              </div>
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Frontend Developer
              </h1>
              <p class="leading-relaxed mb-3">
                Html, Css, Javascript, ReactJs,Material ui,tailwind css
              </p>
              <a class="text-white p-2 rounded bg-yellow-600 inline-flex items-center">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
           
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Services
