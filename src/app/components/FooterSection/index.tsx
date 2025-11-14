'use client'
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
function FooterSection() {

    const [visibleCount, setVisibleCount] = useState(6);
      const handleToggle = () => {
    if (visibleCount >= projects.length) {
      setVisibleCount(6); // Collapse back to 6
    } else {
      setVisibleCount(prev => Math.min(prev + 3, projects.length));
    }
  };


  function scrollToSection(id:string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with id "${id}" not found.`);
  }
}

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
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container-wrapper bg-content-dark"
    >
      <div className='pb-10'>
        <div className='container'>
           
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center flex-col md:flex-row justify-between gap-3 pt-20"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-2 items-center"
            >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0] font-poppins font-medium text-[24px]"
            >
              N
            </motion.div>
            <div>
              <p className="font-semibold text-[32px] text-primary-white ">Nasar</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='flex gap-5'
          >
              <motion.p 
                whileHover={{ scale: 1.1, y: -2 }}
                role='button' onClick={()=>scrollToSection('home')}  className="font-regular text-[16px] text-primary-white cursor-pointer">Home</motion.p>
              <motion.p 
                whileHover={{ scale: 1.1, y: -2 }}
                role='button'  onClick={()=>scrollToSection('experience')} className="font-regular text-[16px] text-primary-white cursor-pointer">Experience</motion.p>
              <motion.p 
                whileHover={{ scale: 1.1, y: -2 }}
                role='button'  onClick={()=>scrollToSection('skills')} className="font-regular text-[16px] text-primary-white cursor-pointer">Skills</motion.p>
              <motion.p 
                whileHover={{ scale: 1.1, y: -2 }}
                role='button'  onClick={()=>scrollToSection('projects')} className="font-regular text-[16px] text-primary-white cursor-pointer">Projects</motion.p>
              <motion.p 
                whileHover={{ scale: 1.1, y: -2 }}
                role='button'  onClick={()=>scrollToSection('contact')} className="font-regular text-[16px] text-primary-white cursor-pointer">Contact</motion.p>
          
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
                          <p className="font-regular text-[16px] text-primary-white ">Copyright © 2022 Picto.</p>

          </motion.div>
            </motion.div>
           

        </div>
        </div>
    </motion.div>
  )
}

export default FooterSection