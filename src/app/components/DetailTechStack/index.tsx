'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDetailType } from "../data/projectsDetail";
import { iconStyle } from "@/app/common";
function DetailTechStack({project}:{project?:ProjectDetailType}) {
 const [viewAll,setViewAll]=useState(false)

  return (
    <div className="container-wrapper bg-grey">
        <div className="py-5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="w-[500px] text-center mb-5">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-semibold text-[48px]"
          >Tech Stack Used</motion.p>
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
       
         <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
          {project?.techStack.core.map((tech, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                className="item bg-grey px-5 shadow-md rounded-lg shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-2 py-3">
{React.cloneElement(tech.logo, { style: iconStyle } as React.HTMLAttributes<HTMLElement>)}                  
<p className="font-medium text-[16px]">{tech.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

         <AnimatePresence>
         {viewAll && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 mt-3 md:grid-cols-5 gap-5 overflow-hidden"
          >
            {project?.techStack.additional.map((tech, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  className="item bg-grey px-5 shadow-md rounded-lg shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-2 py-3">
{React.cloneElement(tech.logo, { style: iconStyle } as React.HTMLAttributes<HTMLElement>)}                  
<p className="font-medium text-[16px]">{tech.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
         )}
         </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(165, 61, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
                  onClick={()=>setViewAll((prev)=>!prev)}
                role="button"
                style={{
                  backgroundColor: "#A53DFF",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                className="cursor-pointer px-[24px] py-[12px]  inline-block mt-[20px]"
              >
                <p className="font-medium text-[16px]">   {viewAll ? 'View Less' : 'View All'}</p>
              </motion.div>
      </div>
      </div>
    </div>
  );
}

export default DetailTechStack;
