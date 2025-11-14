import React from 'react'
import { ProjectDetailType } from '../data/projectsDetail'
function DetailAboutSection({project}:{project?:ProjectDetailType}) {

  const handleRouting=()=>
  {
                     window.open(project?.githuburl, "_blank")

  }
  return (
<div className='container-wrapper bg-white'>
                <div  className='container '>        
                    <p>{project?.description}</p>
        {/* <div className='flex gap-2 mt-3 '><p className='font-medium'>App Development periode : </p>   <p> July 2020 (a month)</p></div> */}

           <div
                role="button"
                onClick={handleRouting}
                style={{
                  border: "2px solid #A53DFF",
                  borderRadius: "8px",
                  color: "#A53DFF",
                  display:'flex',
                  gap:'10px'
                }}
                className="cursor-pointer w-[230px]  px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <div className=" w-[24px] h-[24px]"> <img
              src="/images/githubprimary.svg"
              alt="download icon"
              className="w-full h-full object-cover"
            /></div><p className="font-semibold text-[16px]">Open with Github</p>
              </div>
    </div>
    </div>
  )
}

export default DetailAboutSection