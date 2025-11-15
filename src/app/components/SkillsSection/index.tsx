'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import GradientGlow from "../GradientGlow";

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
    <div id='skills' className="container-wrapper py-5 relative overflow-hidden">
      {/* Gradient Glows */}
      <GradientGlow color="green" size="large" position={{ top: '30%', right: '5%' }} opacity={0.4} />
      <GradientGlow color="purple" size="medium" position={{ bottom: '20%', left: '8%' }} opacity={0.5} />
      <GradientGlow color="pink" size="small" position={{ top: '50%', left: '50%' }} opacity={0.3} />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center relative z-10"
      >
        <div className="w-[500px] text-center mt-10 mb-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-[48px]"
          >Skills</motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </motion.p>
        </div>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {skillsAarray.map((skill, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                className="item bg-grey px-5 shadow-md rounded-lg shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-2 py-3">
                  {skill.logo}
                  <p className="font-medium text-[16px]">{skill.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
