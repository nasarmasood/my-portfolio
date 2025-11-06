'use client'
import React from 'react'
import { useState } from 'react';
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
      <div className='flex justify-center'>
        <div className='w-[500px] text-center mt-10 mb-5'>
      <p className='font-semibold text-[48px]'>Experience</p>
      
</div>
</div>
        <div className='container'>
           
           <div className="flex items-center flex-col md:flex-row justify-between gap-3">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. 
                Suspendis imperdiet,
            </p>
            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-primary">
                <p className="font-semibold text-[24px] ">User Experience (UX)</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.</p>
                </div>
            </div>
           

        </div>
        </div>
    </div>
  )
}

export default ExperienceSection