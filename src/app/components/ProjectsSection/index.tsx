'use client'
import React from 'react'
import { useState } from 'react';
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
      <div className='flex justify-center'>
        <div className='w-[600px] text-center mt-10 mb-10'>
      <p className='font-semibold text-[48px]'>Projects</p>
      <p className='mt-3'>A showcase of real-world projects that highlight my expertise in building scalable, efficient, 
        and user-friendly web applications.</p>
</div>
</div>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                   {projectsData.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="item bg-white shadow-md rounded-lg rounded-2"
            >
              <div className="w-full h-[200px]">
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
                <div
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
                  className="cursor-pointer px-[10px] py-[8px] rounded-1 inline-block mt-[20px]"
                >
                  <p className="font-semibold text-[16px]" >Project Detail</p>
                  <div className="w-[24px] h-[24px]">
                    <img
                      src="/images/rightarrow.svg"
                      alt="download icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
               
             

            </div>
             <div className='flex justify-center w-full'>
                  <div
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
              </div>
              </div>

        </div>
        </div>
    </div>
  )
}

export default ProjectSection