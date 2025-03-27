import React from "react";
import profilepic from "../img/heroImage.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      id="Home"
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 p-2"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left h-full">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mt-6">
            Pratyush Fekarikar
          </h2>
          <p className=" text-white font-semibold text-2xl">( Frontend Developer )</p>
          <p className="text-gray-200 py-4 text-justify max-w-md">
            Results-driven Web Developer with a proven track record of Two Years in building
            and integrating scalable applications. Skilled in React.js,
            full-stack development, and industry integration. Adept at leading
            projects and teams to drive seamless data solutions. Seeking a
            dynamic role to leverage technical expertise and leadership skills
            for impactful digital transformation.
          </p>
          <div className="flex justify-center md:justify-start md:mb-0">
            <button className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsFillArrowRightCircleFill size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center md:justify-end mt-1 md:mt-0">
          <img
            src={profilepic}
            alt="mypic"
            className=" w-2/3 sm:w-1/2 md:w-3/4 lg:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
