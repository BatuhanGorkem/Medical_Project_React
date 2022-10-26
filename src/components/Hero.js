import React from "react";
import "../components/Hero.css";

const Hero = () => {
  return (
    <div className="text-white bgimgh ">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col pt-40 md:pt-28 lg:pt-32 xl:pt-40  ">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH HEALTH ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with Health.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible health for
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your health analytics to increase revenue for health
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          BAŞLAYIN
        </button>
      </div>
    </div>
  );
};

export default Hero;
