import React from "react";

const About = () => {
  return (
    <div
      id="About"
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-24 pb-32"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className=" text-xl mt-20">
          I am Pratyush Fekarikar, a Project Engineer at High Design
          Technologies, specializing in web development and industry
          integration. My expertise lies in building scalable web applications,
          data visualization, and seamless integration between industrial
          systems and digital platforms. With a strong foundation in React.js, I
          have led projects that bridge the gap between clients and industry
          owners, enabling efficient manufacturing insights. Previously, I
          worked as a Frontend Lead at Venhan Tech, where I spearheaded the
          development of Sadhaka AI, a cloud monitoring and integration
          platform. Leading a small team, I honed my leadership and management
          skills while ensuring high-performance frontend solutions. With a
          background in Mechanical Engineering, I bring a unique blend of
          technical understanding and software development expertise, making me
          adept at creating digital solutions tailored for industrial
          applications. Beyond development, I have a keen interest in team
          management, process optimization, and UI/UX design, ensuring that my
          solutions are not just functional but also user-friendly and
          impactful.
        </p>
        <br />
        <p className=" text-xl">
          Throughout my academic and professional journey, I have gained
          valuable experience in web development and industry integration. I
          hold a Bachelor’s degree in Mechanical Engineering and have further
          expanded my technical expertise through training at Infosys Limited,
          where I focused on Java programming and Oracle database management.
          Additionally, I have completed technical internships that provided
          hands-on exposure to engineering and manufacturing processes,
          strengthening my ability to bridge the gap between industrial
          operations and digital solutions. With a strong commitment to
          delivering high-quality, scalable, and user-friendly web applications,
          I leverage my skills in React.js, data visualization, and system
          integration to build seamless digital experiences. My passion lies in
          developing solutions that enhance efficiency, optimize processes, and
          drive meaningful impact in industrial and technological domains.
        </p>
      </div>
    </div>
  );
};

export default About;
