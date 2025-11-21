'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SkillsData } from "@/data/skills";

import { iconStyle } from "@/app/common";
function SkillsSection() {
 
  return (
    <div id='skills' className="container-wrapper py-5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-[600px] text-center mt-10 mb-10">
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
            These are the tools and technologies that power my development process, 
            helping me craft seamless user experiences and efficient system architectures.
          </motion.p>
        </div>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {SkillsData.map((skill, index) => {
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
                  {React.cloneElement(skill.logo, { style: iconStyle })}                  

                  <p className="font-medium text-[16px]">{skill.name}</p>
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
