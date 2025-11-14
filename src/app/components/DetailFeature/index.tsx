'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { ProjectDetailType } from "../data/projectsDetail";
import { iconStyle } from "@/app/common";
function DetailFeature({project}:{project?:ProjectDetailType}) {
 
  return (
    <div className="container-wrapper py-5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-[500px] text-center mt-5 mb-5">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-[48px]"
          >Features</motion.p>
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

      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {project?.features.map((feature, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10, rotate: 2 }}
                className="item bg-grey px-5 shadow-md rounded-lg shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-2 py-3">
                  {React.cloneElement(feature.logo, { style: iconStyle })}                  
                  
                  <p className="font-medium text-[16px]">{feature.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailFeature;
