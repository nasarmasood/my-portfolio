"use client";
import React from "react";
import { useState } from "react";
function HeaderDesktop() {
  const [selectedSection, setSelectedSection] = useState<string>("Home");

  return (
    <div className="container-wrapper">
      <div className="container">
        {/*         <div 
            className='w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0]'
        > */}
        <div className="flex justify-between pt-[20px]">
          <div className="flex gap-2 items-center">
            <div
              className="w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0] font-poppins font-medium text-[24px]"
            >
              N
            </div>
            <div>
              <p className="font-semibold text-[32px]">Nasar</p>
            </div>
          </div>
          <div>
            <div
              role="button"
              onClick={()=>setSelectedSection('Home')}
              style={{
                backgroundColor: selectedSection == "Home" ? "#A53DFF" : "#FFFFFF",
                borderRadius: "8px",
                color: selectedSection == "Home" ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block"
            >
              <p className="font-medium text-[16px]">Home</p>
            </div>
            <div
              role="button"
                            onClick={()=>setSelectedSection('Experience')}

              style={{
                backgroundColor: selectedSection == "Experience" ? "#A53DFF" : "#FFFFFF",
                borderRadius: "8px",
                color: selectedSection == "Experience" ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block"
            >
              <p className="font-medium text-[16px]">Experience</p>
            </div>
            <div
              role="button"
                            onClick={()=>setSelectedSection('Skills')}

              style={{
                backgroundColor: selectedSection == "Skills" ? "#A53DFF" :"#FFFFFF",
                borderRadius: "8px",
                color: selectedSection == "Skills" ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block"
            >
              <p className="font-medium text-[16px]">Skills</p>
            </div>
            <div
              role="button"
                            onClick={()=>setSelectedSection('Projects')}

              style={{
                backgroundColor: selectedSection == "Projects" ? "#A53DFF" : "#FFFFFF",
                borderRadius: "8px",
                color: selectedSection == "Projects" ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block"
            >
              <p className="font-medium text-[16px]">Projects</p>
            </div>
            <div
              role="button"
                            onClick={()=>setSelectedSection('Contact')}

              style={{
                backgroundColor: selectedSection == "Contact" ? "#A53DFF" : "#FFFFFF",
                borderRadius: "8px",
                color: selectedSection == "Contact" ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block"
            >
              <p className="font-medium text-[16px]">Contact</p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
}

export default HeaderDesktop;
