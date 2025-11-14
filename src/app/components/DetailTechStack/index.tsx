import React, { useState } from "react";
import { ProjectDetailType } from "../data/projectsDetail";
import { iconStyle } from "@/app/common";
function DetailTechStack({project}:{project?:ProjectDetailType}) {
 const [viewAll,setViewAll]=useState(false)

  return (
    <div className="container-wrapper bg-grey">
        <div className="py-5">
      <div className="flex justify-center">
        <div className="w-[500px] text-center mb-5">
          <p className="font-semibold text-[48px]">Tech Stack Used</p>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>

      <div className="container">
       
         <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
          {project?.techStack.core.map((tech, index) => {
            return (
              <div className="item bg-grey px-5 shadow-md rounded-lg   shadow-md ">
                <div key={index} className="flex items-center gap-2 py-3">
{React.cloneElement(tech.logo, { style: iconStyle })}                  
<p className="font-medium text-[16px]">{tech.name}</p>
                </div>
              </div>
            );
          })}
        </div>

         {viewAll&&<div className="grid grid-cols-2 mt-3 md:grid-cols-5 gap-5 ">
          {project?.techStack.additional.map((tech, index) => {
            return (
              <div className="item bg-grey px-5 shadow-md rounded-lg   shadow-md ">
                <div key={index} className="flex items-center gap-2 py-3">
{React.cloneElement(tech.logo, { style: iconStyle })}                  
<p className="font-medium text-[16px]">{tech.name}</p>
                </div>
              </div>
            );
          })}
        </div>}

            <div
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
              </div>
      </div>
      </div>
    </div>
  );
}

export default DetailTechStack;
