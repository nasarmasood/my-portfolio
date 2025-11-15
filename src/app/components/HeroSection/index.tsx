'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { content, Content } from "@/app/components/data/conent";
import GradientGlow from "../GradientGlow";

function HeroSection() {
    const [selectedIcon,setSelectedIcon]=useState<string>()
     function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }

  return (
    <div id="home" style={{paddingTop:'30px'}} className="container-wrapper relative overflow-hidden">
      {/* Enhanced Gradient Glows */}
      <GradientGlow color="purple" size="large" position={{ top: '10%', right: '5%' }} opacity={0.6} />
      <GradientGlow color="green" size="large" position={{ top: '30%', right: '10%' }} opacity={0.5} />
      <GradientGlow color="orange" size="medium" position={{ bottom: '20%', left: '-5%' }} opacity={0.6} />
      <GradientGlow color="cyan" size="small" position={{ top: '50%', left: '50%' }} opacity={0.4} />
      
      {/* Keep existing glows for compatibility */}
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

      <div className="container py-[20px] relative z-10">
        {/*         <div 
            className='w-[56px] h-[56px] 
            bg-primary 
            rounded-full flex justify-center items-center text-primary-white p-[0] m-[0]'
        > */}
        {/* <div className="flex justify-between">
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
        </div> */}
<div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
  {/* Image Section (goes on top in mobile/tablet) */}
 

  {/* Text Section */}
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full md:w-[55%] text-center md:text-left"
  >
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="font-semibold text-[40px] md:text-[72px] leading-tight"
    >
      Hello, I'm <span className="text-primary">{content.name}</span>
    </motion.p>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-4 text-[16px] text-neutral-700"
    >
     {content.intro}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      role="button"
      onClick={()=>scrollToSection('contact')}
      style={{
        backgroundColor: "#A53DFF",
        borderRadius: "8px",
        color: "#FFFFFF",
      }}
      className="cursor-pointer px-[24px] py-[12px] inline-block mt-[20px]"
    >
      <p className="font-medium text-[16px]">Say Hello!</p>
    </motion.div>

    {/* Stats Section */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex flex-col md:flex-row justify-center md:justify-between gap-4 mt-[50px] md:mt-[100px]"
    >
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-primary-light px-[20px] py-[10px] rounded-lg text-center"
      >
        <p className="font-semibold text-[24px] md:text-[26px]">2 Y+.</p>
        <p className="text-neutral-dark">Experience</p>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-primary-light px-[20px] py-[10px] rounded-lg text-center"
      >
        <p className="font-semibold text-[24px] md:text-[26px]">20+</p>
        <p className="text-neutral-dark">Projects Completed</p>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-primary-light px-[20px] py-[10px] rounded-lg text-center"
      >
        <p className="font-semibold text-[24px] md:text-[26px]">Full-Stack</p>
        <p className="text-neutral-dark">Expertise</p>
      </motion.div>
    </motion.div>
  </motion.div>
   <motion.div 
    initial={{ opacity: 0, x: 50, scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="w-[60%] md:w-[40%] flex justify-center md:justify-end mb-10 md:mb-0"
  >
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 5 }}
      className="relative w-[180px] h-[180px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg bg-primary"
    >
      <img
        src="/images/mypic.png"
        alt="My Picture"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </motion.div>
</div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between border border-black   item-center shadow-md rounded-lg py-[80px] px-[40px] mt-[50px] lg:mt-[200px]"
        >
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-grey  px-5 shadow-md rounded-lg  w-[100%] lg:w-[40%] relative"
          >
            <img
              src="/images/mypictransparent.png"
              alt="My Picture"
              className="w-full h-full object-cover"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bg-white flex gap-5 border-4 border-grey px-8 py-2 rounded-lg bottom-[-30px]  left-[30px] lg:left-[70px]"
            >
                <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                role="button"
                onClick={()=>{
                  setSelectedIcon("facebook")
                  window.open("https://www.facebook.com/nasar.masood.7", "_blank")
                }}
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
            />}</motion.div>
             <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                role="button"
                onClick={()=>{setSelectedIcon("linkedin")
                                    window.open("https://www.linkedin.com/in/nasar-masood?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5OCzuCx7SAe%2FOzeWBupm8A%3D%3D", "_blank")


                }}
                style={{backgroundColor:selectedIcon=='linkedin'?'#A53DFF':'#ffffff',cursor:'pointer',padding:'5px',borderRadius:'5px'}}> 
                    {selectedIcon=='linkedin'?
                    <span className="font-bold  text-white text-[30px] leading-none  px-2 py-1 rounded-sm">
  in
</span>:             <span className="font-bold text-[30px] text-primary leading-none  px-2 py-1 rounded-sm">
  in
</span>}</motion.div>
               <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                role="button"
                
                onClick={()=>{setSelectedIcon("github")
                 window.open("https://github.com/nasarmasood", "_blank")

                }}
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
            />}</motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-[100%] lg:w-[55%] flex flex-col justify-center items-center"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-[60px] lg:mt-[0px]"
            >
              <p className="font-semibold text-[38px] leading-none">
                {content.aboutTitle}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-[20px]"
            >
              <p>
                {content.aboutDescriptionP1}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-[10px]"
            >
              <p>
                                {content.aboutDescriptionP2}

              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-[100%] flex flex-col lg:flex-row gap-[0px] lg:gap-2"
            >
              {/* <div
                role="button"
                style={{
                  backgroundColor: "#A53DFF",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                }}
                className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <p className="font-medium text-[16px]">My Projects</p>
              </div> */}
            <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "#A53DFF", color: "#FFFFFF" }}
              whileTap={{ scale: 0.95 }}
              role="button"
              style={{
                border: "2px solid #A53DFF",
                borderRadius: "8px",
                color: "#A53DFF",
                display: "flex",
                gap: "10px",
              }}
              className="cursor-pointer px-[24px] py-[12px] rounded-3 inline-block mt-[20px] transition-colors"
            >
              <a href="/files/Nasar_cv.pdf" download className="flex items-center gap-2">
                <div className="w-[24px] h-[24px]">
                  <img
                    src="/images/downloadIcon.svg"
                    alt="download icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-[16px]">Download CV</p>
              </a>
            </motion.div>

            </motion.div>
          </motion.div>
        </motion.div>

        {/* </div> */}
      </div>
         {" "}
    </div>
  );
}

export default HeroSection;
