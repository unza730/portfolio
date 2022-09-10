import React from 'react'

const FloatingDiv = ({image, text1, text2 }) => {
  return (
    <div className="flex  h-[4.5rem] pt-4 pb-[28px] px-0  justify-around items-center text-lg font-medium text-yellow-500 bg-white shadow-3xl    rounded-[34px]  hover:bg-yellow-400 hover:text-white transition duration-300">
      
      <img src={image} alt=""className=" w-12" />
      <span className="w-20">
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
}

export default FloatingDiv
