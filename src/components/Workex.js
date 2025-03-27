import React from "react";

const Workex = () => {
  return (
    <div
      id="Work-Ex"
      name="Work-Ex"
      className="text-white w-full min-h-screen bg-black pt-24 pb-32"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        {/* Section Title */}
        <div className="pb-8 text-center md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
        </div>

        {/* High Design Technologies */}
        <div className="mt-10">
          <p className="text-2xl font-bold text-cyan-400">
            Project Engineer | High Design Technologies
          </p>
          <p className="text-gray-400 text-lg">[ May 2024 - Present ]</p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            At High Design Technologies, I specialize in <span className="text-cyan-400 font-semibold">web development integration</span> for industrial applications. My role focuses on <span className="text-cyan-400 font-semibold">designing and implementing data visualization solutions</span> that provide real-time manufacturing insights. This enables seamless communication between clients and industry owners. 
          </p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            I work extensively with <span className="text-cyan-400 font-semibold">React.js, APIs, and system integration</span>, ensuring efficient data flow while optimizing processes to enhance decision-making. My primary objective is to build <span className="text-cyan-400 font-semibold">scalable, user-friendly</span> web applications that streamline manufacturing operations and analytics.
          </p>
        </div>

        {/* Venhan Technologies */}
        <div className="mt-10">
          <p className="text-2xl font-bold text-cyan-400">
            Frontend Lead | Venhan Technologies
          </p>
          <p className="text-gray-400 text-lg">[ Aug 2023 - Mar 2024 ]</p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            At Venhan Technologies, I played a key role in leading the development of <span className="text-cyan-400 font-semibold">Sadhaka AI</span>, a cloud monitoring and integration platform. I was responsible for <span className="text-cyan-400 font-semibold">architecting and developing a scalable React.js application</span>, ensuring high performance and a seamless user experience.
          </p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            My responsibilities included optimizing <span className="text-cyan-400 font-semibold">UI/UX</span>, collaborating with backend and DevOps teams, and maintaining smooth data communication. Additionally, I led a small team, providing <span className="text-cyan-400 font-semibold">technical mentorship</span> and overseeing project execution while maintaining high coding standards.
          </p>
        </div>

        {/* Infosys Limited */}
        <div className="mt-10">
          <p className="text-2xl font-bold text-cyan-400">
            System Engineer | Infosys Limited
          </p>
          <p className="text-gray-400 text-lg">[ Aug 2022 - Jan 2023 ]</p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            During my tenure at Infosys Limited, I gained hands-on experience in <span className="text-cyan-400 font-semibold">React.js, Java programming</span>, and <span className="text-cyan-400 font-semibold">Oracle database management</span>. My training included <span className="text-cyan-400 font-semibold">React UI development</span>, focusing on building dynamic web applications and implementing business logic.
          </p>
          <p className="text-lg sm:text-xl mt-3 leading-relaxed text-gray-300">
            In Java, I developed skills in <span className="text-cyan-400 font-semibold">object-oriented programming and data structures</span>. The Oracle training provided me with foundational knowledge of <span className="text-cyan-400 font-semibold">SQL querying and database administration</span>. This experience equipped me with the technical expertise to develop efficient software solutions and manage databases effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workex;
