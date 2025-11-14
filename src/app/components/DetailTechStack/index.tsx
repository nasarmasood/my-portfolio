import React from "react";
import { FaReact } from "react-icons/fa";
import { ProjectDetailType } from "../data/projectsDetail";
function DetailTechStack({project}:{project?:ProjectDetailType}) {
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
    <div className="container-wrapper bg-grey">
        <div className="py-5">
      <div className="flex justify-center">
        <div className="w-[500px] text-center mb-5">
          <p className="font-semibold text-[48px]">Tech Stack Used</p>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
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
    </div>
  );
}

export default DetailTechStack;
