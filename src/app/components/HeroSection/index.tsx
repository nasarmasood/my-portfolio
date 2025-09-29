'use client'
import React, { useState } from "react";

function HeroSection() {
    const [selectedIcon,setSelectedIcon]=useState<string>()
  return (
    <div style={{paddingTop:'30px'}} className="container-wrapper relative overflow-hidden">
        <div className="absolute w-[871px] h-[871.21px] left-[80%] top-[-803px] rotate-[130.44deg] bg-[radial-gradient(ellipse,_#000000_20%,_#DA4DF1_40%)] opacity-40 blur-3xl z-[-1] pointer-events-none">
</div>
   <div className="absolute w-[1044.32px] h-[1044.32px] left-[90%] top-[191px] rotate-[130.44deg] bg-[radial-gradient(ellipse,_#C4F5E9_70%)] opacity-40 blur-3xl z-[-1] pointer-events-none">
</div>
<div
  className="
    absolute
    w-[541px]
    h-[60px]
    left-[-134px]
    top-[1100px]
    bg-[linear-gradient(_#FFDFA8_100%,_#FFE2B0_96%,_#FFEAC6_67%,_#FAD390_80%)]
    blur-3xl
    opacity-100
    pointer-events-none
    -z-10
  "
>
  {/* content */}
</div>

      <div className="container py-[20px]">
        {/*         <div 
            className='w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0]'
        > */}
        <div className="flex justify-between">
          <div className="w-[55%]">
            <div>
              <p className="font-semibold text-[72px] leading-none">
                Hello, I’m Nasar Masood
              </p>
            </div>
            <div className="mt-[20px]">
              <p>
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
            </div>
            <div>
              <div
                role="button"
                style={{
                  backgroundColor: "#A53DFF",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <p className="font-medium text-[16px]">Say Hello!</p>
              </div>
            </div>
            <div className="flex justify-between mt-[100px]">
              <div className="bg-primary-light px-[30px] py-[5px] rounded-tl-[5px] rounded-bl-[5px] rounded-tr-none rounded-br-none text-center">
                <p className="font-semibold text-[32px]">15 Y.</p>
                <p className="font-regular text-neutral-dark">Experience</p>
              </div>
              <div className="bg-primary-light px-[30px] py-[5px]  text-center">
                <p className="font-semibold text-[32px]">250+</p>
                <p className="font-regular text-neutral-dark">
                  Project Completed
                </p>
              </div>
              <div className="bg-primary-light px-[30px] py-[5px] rounded-tl-none rounded-bl-none rounded-tr-[5px] rounded-br-[5px] text-center">
                <p className="font-semibold text-[32px]">58</p>
                <p className="font-regular text-neutral-dark">Happy Client</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg  w-[40%] bg-primary">
            <img
              src="/images/mypic.png"
              alt="My Picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between border border-black   item-center shadow-md rounded-lg py-[80px] px-[40px] mt-[200px]">
          <div className="bg-grey px-5 shadow-md rounded-lg  w-[40%] relative">
            <img
              src="/images/mypictransparent.png"
              alt="My Picture"
              className="w-full h-full object-cover"
            />
            <div className="absolute bg-white flex gap-5 border-4 border-grey px-8 py-2 rounded-lg bottom-[-30px] left-[70px]">
                <div 
                role="button"
                onClick={()=>setSelectedIcon("facebook")}
                style={{backgroundColor:selectedIcon=='facebook'?'#A53DFF':'#ffffff',cursor:'pointer',padding:'10px',borderRadius:'5px'}}> 
                    {selectedIcon=='facebook'?
                    <img
              src="/images/facebookwhite.svg"
              alt="My Picture"
              className="w-full h-full object-cover"
            />: <img
              src="/images/facebookprimary.svg"
              alt="My Picture"
              className="w-full h-full object-cover"
            />}</div>
             <div 
                role="button"
                onClick={()=>setSelectedIcon("linkedin")}
                style={{backgroundColor:selectedIcon=='linkedin'?'#A53DFF':'#ffffff',cursor:'pointer',padding:'5px',borderRadius:'5px'}}> 
                    {selectedIcon=='linkedin'?
                    <span className="font-bold  text-white text-[30px] leading-none  px-2 py-1 rounded-sm">
  in
</span>:             <span className="font-bold text-[30px] text-primary leading-none  px-2 py-1 rounded-sm">
  in
</span>}</div>
               <div 
                role="button"
                onClick={()=>setSelectedIcon("github")}
                style={{backgroundColor:selectedIcon=='github'?'#A53DFF':'#ffffff',cursor:'pointer',padding:'8px',borderRadius:'5px'}}> 
                    {selectedIcon=='github'?
                    <img
              src="/images/githubwhite.png"
              alt="My Picture"
              className="w-6 h-6 object-cover"
            />: <img
              src="/images/githubprimary.svg"
              alt="My Picture"
              className="w-6 h-6 object-cover"
            />}</div>
            </div>
          </div>
          <div className="w-[55%] flex flex-col justify-center items-center">
            <div>
              <p className="font-semibold text-[38px] leading-none">
                I am Professional User Experience Designer
              </p>
            </div>
            <div className="mt-[20px]">
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services and online
                stores. My passion is to design digital user experiences.
              </p>
            </div>
            <div className="mt-[10px]">
              <p>
                I design and develop services for customers specializing
                creating stylish, modern websites, web services.
              </p>
            </div>

            <div className="w-[100%] flex gap-2">
              <div
                role="button"
                style={{
                  backgroundColor: "#A53DFF",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <p className="font-medium text-[16px]">My Project</p>
              </div>
              <div
                role="button"
                style={{
                  border: "2px solid #A53DFF",
                  borderRadius: "8px",
                  color: "#A53DFF",
                  display:'flex',
                  gap:'10px'
                }}
                className="cursor-pointer  px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <div className=" w-[24px] h-[24px]"> <img
              src="/images/downloadIcon.svg"
              alt="download icon"
              className="w-full h-full object-cover"
            /></div><p className="font-semibold text-[16px]">Download CV</p>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
         {" "}
    </div>
  );
}

export default HeroSection;
