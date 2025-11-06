'use client'
import React from 'react'
import { useState } from 'react';
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
    <div className="container-wrapper bg-content-dark">
      <div className='pb-10'>
        <div className='container'>
           
           <div className="flex items-center flex-col md:flex-row justify-between gap-3 pt-20">
            <div className="flex gap-2 items-center">
            <div
              className="w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0] font-poppins font-medium text-[24px]"
            >
              N
            </div>
            <div>
              <p className="font-semibold text-[32px] text-primary-white ">Nasar</p>
            </div>
          </div>
          <div className='flex gap-5'>
              <p role='button' onClick={()=>scrollToSection('home')}  className="font-regular text-[16px] text-primary-white cursor-pointer">Home</p>
              <p role='button'  onClick={()=>scrollToSection('experience')} className="font-regular text-[16px] text-primary-white cursor-pointer">Experience</p>
              <p role='button'  onClick={()=>scrollToSection('skills')} className="font-regular text-[16px] text-primary-white cursor-pointer">Skills</p>
              <p role='button'  onClick={()=>scrollToSection('projects')} className="font-regular text-[16px] text-primary-white cursor-pointer">Projects</p>
              <p role='button'  onClick={()=>scrollToSection('contact')} className="font-regular text-[16px] text-primary-white cursor-pointer">Contact</p>
          
          </div>
          <div>
                          <p className="font-regular text-[16px] text-primary-white ">Copyright © 2022 Picto.</p>

          </div>
            </div>
           

        </div>
        </div>
    </div>
  )
}

export default FooterSection