/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = () => {
  return (
    <header className="flex flex-row flex-wrap justify-center h-[70vh] lg:h-[90vh] items-center bg-[#f9fbfd] ">
      <div className="px-[5%] lg:w-2/5 lg:pl-[10%]  pb-0 mb-0">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          Mecha
          <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            Fusion
          </strong>
        </h1>
        <h2 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
          Clubul de robotica oficial al{" "}
          <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            U
          </strong>
          niversitatii{" "}
          <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            P
          </strong>
          olitehnica din{" "}
          <strong className="bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent">
            T
          </strong>
          imisoara
        </h2>
        <p className="max-w-2xl font-light text-gray-500 md:text-xl lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        className="w-3/5 pr-[10%] hidden lg:block mt-0 pt-0"
        alt="Group working on robots"
        src={"/collective.png"}
      ></img>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" self-end bottom-0"
      >
        <path
          d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
          className="fill-current text-white"
        ></path>
      </svg>
    </header>
  );
};

export default Hero;
