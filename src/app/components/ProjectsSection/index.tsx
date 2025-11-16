'use client'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { userAgent } from 'next/server';
import { projectsData } from '../data/projects';
function ProjectSection() {

    const [visibleCount, setVisibleCount] = useState(6);
      const handleToggle = () => {
    if (visibleCount >= projectsData.length) {
      setVisibleCount(6); // Collapse back to 6
    } else {
      setVisibleCount(prev => Math.min(prev + 3, projectsData.length));
    }
  };

  const router=useRouter()

         

                const isAllVisible = visibleCount >= projectsData.length;


  return (
    <div id='projects' className="container-wrapper bg-grey">
      <div className='pb-10'>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex justify-center'
      >
        <div className='w-[600px] text-center mt-10 mb-10'>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-semibold text-[48px]'
      >Projects</motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='mt-3'
      >A showcase of real-world projects that highlight my expertise in building scalable, efficient, 
        and user-friendly web applications.</motion.p>
</div>
</motion.div>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                   {projectsData.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="item bg-white shadow-md rounded-lg rounded-2 cursor-pointer"
            >
              <div style={{backgroundColor:project.id==6||project.id==7?'#274472':''}} className="w-full h-[200px] px-2 py-4">
                <img
                  src={project.src}
                  alt="project pic"
                  className="w-[100%] h-[100%] object-fill"
                />
              </div>
              <div className="border-grey-dark border-1 p-4">
                <p className="font-medium text-[16px] text-grey-dark min-h-[50px]">
                  {project.type}
                </p>
                <p className="font-semibold text-[18px]">{project.name}</p>
                <p className="text-main-text text-[14px] mt-[15px] min-h-[50px]">
                  {project.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#A53DFF", color: "#FFFFFF" }}
                  whileTap={{ scale: 0.95 }}
                  role="button"
                  onClick={()=>router.push(`/projectDetail?projectId=${project.id}`)}
                  style={{
                    border: '2px solid #A53DFF',
                    width: '165px',
                    borderRadius: '4px',
                    color: '#A53DFF',
                    display: 'flex',
                    gap: '5px',
                  }}
                  className="cursor-pointer px-[10px] py-[8px] rounded-1 inline-block mt-[20px] transition-colors"
                >
                  <p className="font-semibold text-[16px]" >Project Detail</p>
                  <div className="w-[24px] h-[24px]">
                    <img
                      src="/images/rightarrow.svg"
                      alt="download icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
               
             

            </div>
             <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='flex justify-center w-full'
            >
                  <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(165, 61, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleToggle}
                role="button"
                style={{
                  backgroundColor: "#A53DFF",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                className="cursor-pointer px-[24px] py-[12px]  inline-block mt-[20px]"
              >
                <p className="font-medium text-[16px]">   {isAllVisible ? 'View Less' : 'More Project'}</p>
              </motion.div>
              </motion.div>

        </div>
        </div>
    </div>
  )
}

export default ProjectSection