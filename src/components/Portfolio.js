import React from "react";
import CloneTube from "../port/yt.jpg";
// import Bootbox from "../port/boot.jpg";
// import Course_Carrier from "../port/Online-courses.jpg";
// import Foodie from "../port/foodie.jpeg";
import PwdGen from "../port/pwdgen.jpeg";
// import ReactRep from "../port/reporter.jpg";
import Spotify from "../port/spotify.jpeg";
import Sunny from "../port/weather.jpg";
import Wordy from "../port/editor.jpg";
import Swiggy from "../img/swiggy.svg";

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
      projectname: "Swiggy Clone",
      demo: "https://sviggy-clone.netlify.app/",
      gitcode: "https://github.com/pratyushf/swiggy-clone",
      src: Swiggy,
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
      projectname: "Sunny - The Weather App",
      demo: "https://sunny-the-weather-app.netlify.app/",
      gitcode: "https://github.com/pratyushf/Sunny---The-Weather-App",
      src: Sunny,
    },
    // {
    //   id: 7,
    //   projectname: "Bootbox",
    //   demo: "https://bootboxx.netlify.app/",
    //   gitcode: "https://github.com/pratyushf/Bootbox",
    //   src: Bootbox,
    // },
    // {
    //   id: 8,
    //   projectname: "Course Carrier",
    //   demo: "https://github.com/pratyushf/course_carrier",
    //   gitcode: "https://github.com/pratyushf/course_carrier",
    //   src: Course_Carrier,
    // },
    // {
    //   id: 9,
    //   projectname: "Foodie",
    //   demo: "https://foodie-foody.netlify.app/",
    //   gitcode: "https://github.com/pratyushf/foodie",
    //   src: Foodie,
    // },
    // {
    //   id: 10,
    //   projectname: "React Reporter: The News App",
    //   demo: "https://react-reporter.netlify.app/",
    //   gitcode: "https://github.com/pratyushf/react_reporter",
    //   src: ReactRep,
    // },
  ];

  return (
    <div
      id="Portfolio"
      className="pt-20 min-h-screen bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full">
        {/* Section Title */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects Portfolio
          </p>
          <p className="py-4 text-lg text-gray-300">
            Checkout some of my work below!
          </p>
          <p className="text-sm text-gray-500 italic">
            (If data isn't loading, try enabling CORS extension)
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {portfolios.map(({ id, src, projectname, demo, gitcode }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={projectname}
                className="rounded-t-lg w-full h-52"
              />
              <p className="text-center py-2 text-lg font-semibold text-cyan-400">
                {projectname}
              </p>
              <div className="flex justify-between gap-5 items-center px-4 pb-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-orange-500 text-center text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Demo
                </a>
                <a
                  href={gitcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-green-500 text-center text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
