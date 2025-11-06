import React from "react";
import { FaReact } from "react-icons/fa";

function SkillsSection() {
  const skillsAarray = [
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
    {
      title: "React Js",
      logo: <FaReact style={{ color: "#A53DFF", fontSize: "50px" }} />,
    },
  ];
  return (
    <div id='skills' className="container-wrapper py-5">
      <div className="flex justify-center">
        <div className="w-[500px] text-center mt-10 mb-10">
          <p className="font-semibold text-[48px]">Skills</p>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {skillsAarray.map((skill, index) => {
            return (
              <div className="item bg-grey px-5 shadow-md rounded-lg   shadow-md ">
                <div key={index} className="flex items-center gap-2 py-3">
                  {skill.logo}
                  <p className="font-medium text-[16px]">{skill.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
