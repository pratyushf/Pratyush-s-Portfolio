import React from "react";
import profilepic from "../img/heroImage.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      id="Home"
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white mt-6">
            I am a Frontend Developer
          </h2>
          <p className=" text-gray-200 py-4 max-w-md">
            Results-driven Web Developer with a proven track record in building
            and integrating scalable applications. Skilled in React.js,
            full-stack development, and industry integration. Adept at leading
            projects and teams to drive seamless data solutions. Seeking a
            dynamic role to leverage technical expertise and leadership skills
            for impactful digital transformation.
          </p>
          <div>
            <button className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsFillArrowRightCircleFill size={25} className=" ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className=" ml-10 h-full w-full p-20 mt-20">
          <img
            src={profilepic}
            alt="mypic"
            className="rounded-2xl mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
