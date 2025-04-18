import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </>
      ),
      href: "https://www.linkedin.com/in/pratyush-fekarikar-645a72200",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </>
      ),
      href: "https://github.com/pratyushf",
      style: "",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail className="w-6 h-6 md:w-8 md:h-8" />
        </>
      ),
      href: "mailto:pratyushf@gmail.com",
      style: "",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill className="w-6 h-6 md:w-8 md:h-8" />
        </>
      ),
      href: "/Resume Pratyush Fekarikar.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex flex-col top-[50%] left-0 fixed opacity-50">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px] " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
