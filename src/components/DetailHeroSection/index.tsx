'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { ProjectDetailType } from '@/data/projectsDetail'

function DetailHeroSection({project}:{project?:ProjectDetailType}) {
       
  const handleRouting=()=>
  {
                     window.open(project?.liveurl, "_blank")

  }

  return (
    <div className='container-wrapper bg-white'>
        <div  className='container '>
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col md:flex-row gap-0 md:gap-5 "
>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='w-[100%] md:w-[30%] pt-[80px] pb-[40px] pl-4 md:pl-0'
            >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <p className='font-semibold text-[38px]'>{project?.name}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <p className='font-normal text-[12px] text-grey-dark'>{project?.type}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                     <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(165, 61, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                role="button"
                onClick={handleRouting}
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                  backgroundColor: "#A53DFF",
                  alignItems:'center',
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  width:'134px'
                }}
                className="cursor-pointer px-[10px] py-[12px] rounded-3 i mt-[20px]"
              >
                <p className="font-medium text-[16px]">View Live</p> <div> <img
              src="/images/dIcon.svg"
              alt="download icon"
            /></div>
              </motion.div>
                </motion.div>
             
               
                


            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[70%] relative h-[250px] md:h-auto" 
            >
             <Image fill src={project?.heroimagesrc||''} alt='project pic'/>
              
            </motion.div>
         
            </motion.div>

        </div>
    </div>
  )
}

export default DetailHeroSection