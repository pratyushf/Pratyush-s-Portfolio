import React from "react";

const About = () => {
  return (
    <div
      id="About"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-32"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full text-justify">
        {/* Section Title */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        {/* Introductory Paragraph */}
        <p className="text-lg sm:text-xl mt-10 leading-relaxed text-gray-300">
          I am <span className="text-cyan-400 font-semibold">Pratyush Fekarikar</span>, a 
          <span className="text-cyan-400 font-semibold"> Project Engineer at High Design Technologies</span>, specializing in 
          <span className="text-cyan-400 font-semibold"> web development and industry integration</span>. My expertise includes 
          <span className="text-cyan-400 font-semibold"> building scalable applications</span>, data visualization, and bridging the gap 
          between industrial systems and digital platforms.
        </p>

        {/* Experience Details */}
        <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-300">
          With a strong foundation in <span className="text-cyan-400 font-semibold">React.js</span>, I have led projects that enhance 
          <span className="text-cyan-400 font-semibold"> manufacturing insights</span>, enabling seamless data flow between clients 
          and industry owners. Previously, I worked as a 
          <span className="text-cyan-400 font-semibold"> Frontend Lead at Venhan Tech</span>, where I spearheaded the development 
          of <span className="text-cyan-400 font-semibold"> Sadhaka AI</span>, a cloud monitoring and integration platform.
        </p>

        {/* Additional Expertise */}
        <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-300">
          My background in <span className="text-cyan-400 font-semibold">Mechanical Engineering</span> allows me to merge technical 
          knowledge with software development, making me adept at crafting digital solutions tailored for industrial applications. 
          I am passionate about <span className="text-cyan-400 font-semibold">team management, UI/UX design</span>, and optimizing 
          processes to create impactful and user-friendly solutions.
        </p>

        {/* Technical Background & Internships */}
        <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-300">
          I hold a <span className="text-cyan-400 font-semibold">Bachelor’s degree in Mechanical Engineering</span> and have further 
          enhanced my technical expertise through <span className="text-cyan-400 font-semibold">training at Infosys Limited</span>, 
          focusing on Java programming and Oracle database management. Additionally, my hands-on experience through 
          <span className="text-cyan-400 font-semibold"> technical internships</span> has strengthened my ability to bridge industrial 
          operations with modern digital solutions.
        </p>

        {/* Conclusion */}
        <p className="text-lg sm:text-xl mt-6 leading-relaxed text-gray-300">
          My mission is to develop high-quality, <span className="text-cyan-400 font-semibold">scalable, and efficient</span> web 
          applications that enhance industrial workflows. I am committed to leveraging my skills in 
          <span className="text-cyan-400 font-semibold"> React.js, data visualization</span>, and <span className="text-cyan-400 font-semibold">system integration</span> to drive 
          meaningful impact in technology and industrial domains.
        </p>
      </div>
    </div>
  );
};

export default About;
