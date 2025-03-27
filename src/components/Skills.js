import React from "react";
import azure from "../img/azure.png";
import bootstrap from "../img/bootstrap.png";
import css from "../img/css.png";
import express from "../img/express-js.png";
import github from "../img/github.png";
import html from "../img/html.png";
import JavaScript from "../img/javascript.png";
import mongo from "../img/mongo.jpeg";
import react from "../img/react.png";
import node from "../img/node.png";
import tailwind from "../img/tailwind.png";
import next from "../img/next.js.png";

const Skills = () => {
  const skills = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: JavaScript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React.js", style: "shadow-blue-600" },
    { id: 5, src: mongo, title: "MongoDB", style: "shadow-green-500" },
    { id: 6, src: express, title: "Express.js", style: "shadow-gray-500" },
    { id: 7, src: node, title: "Node.js", style: "shadow-green-800" },
    { id: 8, src: azure, title: "MS Azure", style: "shadow-blue-300" },
    { id: 9, src: next, title: "Next.js", style: "shadow-gray-200" },
    { id: 10, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    { id: 11, src: tailwind, title: "Tailwind CSS", style: "shadow-blue-200" },
    { id: 12, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div id="Skills" className="pt-20 bg-gradient-to-b from-gray-800 to-black py-12">
      <div className="max-w-screen-lg mx-auto p-6 text-white">
        {/* Section Heading */}
        <div className="text-center md:text-left">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Skill Set
          </p>
          <p className="py-4 text-gray-300">Technologies I have worked with:</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 transition-transform duration-300 py-4 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto object-contain rounded-lg"
              />
              <p className="mt-3 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
