import React from "react";
import CloneTube from "../port/yt.jpg";
import Bootbox from "../port/boot.jpg";
import Course_Carrier from "../port/Online-courses.jpg";
import Foodie from "../port/foodie.jpeg";
import GourmetGo from "../port/gourmetgo.png";
import PwdGen from "../port/pwdgen.jpeg";
import ReactRep from "../port/reporter.jpg";
import Spotify from "../port/spotify.jpeg";
import Sunny from "../port/weather.jpg";
import Wordy from "../port/editor.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      projectname: "CloneTube",
      demo: "https://clonetube-ytclone.netlify.app/",
      gitcode: "https://github.com/pratyushf/clonetube",
      src: CloneTube,
    },
    {
      id: 2,
      projectname: "GourmetGo",
      demo: "https://gourmetgo.netlify.app/",
      gitcode: "https://github.com/pratyushf/GourmetGo-The-Food-Delivery-app",
      src: GourmetGo,
    },
    {
      id: 3,
      projectname: "Wordy - Text Editor",
      demo: "https://wordyeditor.netlify.app/",
      gitcode: "https://github.com/pratyushf/Wordy",
      src: Wordy,
    },
    {
      id: 4,
      projectname: "Password Generator",
      demo: "https://passkeyy.netlify.app/",
      gitcode: "https://github.com/pratyushf/passwordGenerator",
      src: PwdGen,
    },
    {
      id: 5,
      projectname: "Spotify Clone",
      demo: "https://spotify2clone.netlify.app/",
      gitcode: "https://github.com/pratyushf/ampli",
      src: Spotify,
    },
    {
      id: 6,
      projectname: "Sunny- The Weather App",
      demo: "https://sunny-the-weather-app.netlify.app/",
      gitcode: "https://github.com/pratyushf/Sunny---The-Weather-App",
      src: Sunny,
    },
    {
      id: 7,
      projectname: "Bootbox",
      demo: "https://bootboxx.netlify.app/",
      gitcode: "https://github.com/pratyushf/Bootbox",
      src: Bootbox,
    },
    {
      id: 8,
      projectname: "Course_Carrier",
      demo: "https://github.com/pratyushf/course_carrier",
      gitcode: "https://github.com/pratyushf/course_carrier",
      src: Course_Carrier,
    },
    {
      id: 9,
      projectname: "Foodie",
      demo: "https://foodie-foody.netlify.app/",
      gitcode: "https://github.com/pratyushf/foodie",
      src: Foodie,
    },
    {
      id: 10,
      projectname: "React Reporter : The News App",
      demo: "https://react-reporter.netlify.app/",
      gitcode: "https://github.com/pratyushf/react_reporter",
      src: ReactRep,
    },
  ];

  return (
    <div
      id="Portfolio"
      name="portfolio"
      className=" pt-20 h-max bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-contain"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            Projects of Portfolio
          </p>
          <p className=" py-6">Checkout Some of My Work Right here</p>
          <p className=" text-gray-400">
            (Try Installing Allow CORS extention if data is not fetched
            properly)
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, projectname, demo, gitcode }) => (
            <div
              key={id}
              className=" shadow-md shadow-gray-600 rounded-lg h-82 hover:scale-105 transition-opacity duration-300"
            >
              <img
                src={src}
                loop
                className=" rounded-t-lg w-full h-56"
                alt={src}
              ></img>
              <p className=" text-center pt-1 font-bold bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                {projectname}
              </p>
              <div className=" flex items-center justify-center">
                <button className=" w-1/2 px-6 py-1 m-4 duration-200 hover:scale-250 hover:bg-orange-500 rounded-xl">
                  <a href={demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className=" w-1/2 px-6 py-1 m-4 hover:bg-green-500 rounded-xl">
                  <a href={gitcode} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
