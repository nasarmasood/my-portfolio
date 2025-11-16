'use client'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
function ExperienceSection() {

    const [visibleCount, setVisibleCount] = useState(6);
      const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6); // Collapse back to 6
    } else {
      setVisibleCount(prev => Math.min(prev + 3, projects.length));
    }
  };


            const projects=[
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
               {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
               {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              },
              {
                title:'zebra doctor',
                src:'/images/projectpic.svg',
                type:'full stack',
                description:'Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.'
              }
            ]

                const isAllVisible = visibleCount >= projects.length;


  return (
    <div id='experience' className="container-wrapper bg-grey">
      <div className='pb-10'>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='flex justify-center'
      >
        <div className='w-[500px] text-center mt-10 mb-5'>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='font-semibold text-[48px]'
      >Experience</motion.p>
      
</div>
</motion.div>
        <div className='container'>
           
           <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center flex-col md:flex-row justify-between gap-3"
          >
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                I am a MERN Stack Developer with 2 years of hands-on experience at {" "} 
  <a
    href="https://alfain.co" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 underline hover:text-purple-800"
  >
    Alfain Technologies
  </a>{" "}
I build full-stack, scalable, and high-performance web applications using MongoDB,  
Express.js, React.js, and Node.js. My work focuses on clean UI, efficient APIs,  
and delivering smooth user experiences.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary"
            >
                <p className="font-semibold text-[24px] ">Junior Software Engineer</p>
<p className="font-semibold text-[24px]">
  at{" "}
  <a
    href="https://alfain.co" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 underline hover:text-purple-800"
  >
    Alfain Technologies
  </a>{" "}
  (2+ Years)
</p>                <p className="mt-2">Working as a full-stack developer using the MERN stack, developing responsive UIs,  
building RESTful APIs, integrating authentication systems, optimizing performance,  
and collaborating in agile development teams to deliver production-ready solutions.</p>
                </motion.div>
            </motion.div>
           

        </div>
        </div>
    </div>
  )
}

export default ExperienceSection