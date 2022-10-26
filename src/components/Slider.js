import React from "react";
import img from "../img/slider.png";
const Slider = () => {
  return (
    <div className="pt-40">
      <div className="bg-black  lg:flex text-white">
        <div className="lg:w-[50%] ">
          <img className="lg:h-[100%] lg:w-[100%] bg-cover" src={img} alt="" />
        </div>
        <div className=" ml-5 w-[70%]  lg:w-[50%] lg:p-6">
          <h1 className=" mt-5 lg:text-[50px] lg:ml-[10px] lg:w-[80%]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            debitis.
          </h1>
          <button className=" bg-[#49C1CE] rounded-sm mt-6 lg:ml-[10px] p-2 mb-9 px-5 hover:p-3 hover:px-6 transition-all lg:mt-20">
            DEVAMI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
