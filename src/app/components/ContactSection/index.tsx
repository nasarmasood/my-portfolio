'use client'
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { useState } from 'react';
type contactOption= 'email'|'address'|'phone'
function ContactSection() {
        const [selectedIcon,setSelectedIcon]=useState<string>()
        const [selectedContactOption,setSelectedContactOption]=useState<contactOption>()
    
        const shadowClass = 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]';

const isSelected = (option: string) => selectedContactOption === option;
  return (
    <div className='container-wrapper bg-white'>
        <div className='container shadow-[0px_50px_12px_0px_rgba(0,_0,_0,_0.12)]'>
<div className="p-[40px] flex flex-col md:flex-row items-center gap-5">
            <div>
                <div>
                    <p className='font-semibold text-[38px]'>Let’s discuss your Project</p>
                </div>
                <div>
                   <p className='text-[18px] text-grey-dark'>There are many variations of passages of Lorem Ipsu available. but the majority have suffered alte.</p>
                </div>
                <div 
                role='button' onClick={()=>setSelectedContactOption('address')}
className={`flex items-center p-[12px] gap-2  rounded-[5px] mt-4 w-[70%]
                    ${selectedContactOption=='address' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}   
                                 >
                    <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '><CiLocationOn style={{fontSize:'30px'}}/></div>
                    <div>
                        <p className='text-[14px]'>Address</p>
                        <p className='font-medium text-[16px]'>Dahrm Pura Lahore</p>

                    </div>


                </div>
                <div role='button' onClick={()=>setSelectedContactOption('email')} className={`flex items-center p-[12px] gap-2  rounded-[5px] mt-4 w-[70%]
                    ${selectedContactOption=='email' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}>
                    <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '><CiLocationOn style={{fontSize:'30px'}}/></div>
                    <div>
                        <p className='text-[14px]'>email</p>
                        <p className='font-medium text-[16px]'>Dahrm Pura Lahore</p>

                    </div>


                </div>
                <div role='button' onClick={()=>setSelectedContactOption('phone')} className={`flex items-center p-[12px] gap-2  rounded-[5px] mt-4 w-[70%]
                    ${selectedContactOption=='phone' ? 'shadow-[0px_12px_64px_0px_rgba(28,25,25,0.12)]' : ''}`}>
                    <div className='flex justify-center items-center p-[12px] bg-primary-light rounded-[5px] '><CiLocationOn style={{fontSize:'30px'}}/></div>
                    <div>
                        <p className='text-[14px]'>Address</p>
                        <p className='font-medium text-[16px]'>Dahrm Pura Lahore</p>

                    </div>


                </div>
                  <div className="flex gap-5 py-2 rounded-lg mt-4">
                <div 
                role="button"
                onClick={()=>setSelectedIcon("facebook")}
                style={{backgroundColor:selectedIcon=='facebook'?'#A53DFF':'',cursor:'pointer',padding:'10px',borderRadius:'5px'}}> 
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
                style={{backgroundColor:selectedIcon=='linkedin'?'#A53DFF':'',cursor:'pointer',padding:'5px',borderRadius:'5px'}}> 
                    {selectedIcon=='linkedin'?
                    <span className="font-bold  text-white text-[30px] leading-none  px-2 py-1 rounded-sm">
  in
</span>:             <span className="font-bold text-[30px] text-primary leading-none  px-2 py-1 rounded-sm">
  in
</span>}</div>
               <div 
                role="button"
                onClick={()=>setSelectedIcon("github")}
                style={{backgroundColor:selectedIcon=='github'?'#A53DFF':'',cursor:'pointer',padding:'8px',borderRadius:'5px'}}> 
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
            <div>
                 <div>
                    <p className='text-grey-dark text-[18px]'>There are many variations of passages of Lorem Ipsu available,
but the majority have suffered alte.</p>
                 </div>
                <div className='mt-7'>
                    <input
  type="text"
  placeholder="Name*"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>


<input
  type="email"
  placeholder="Email*"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>

<input
  type="text"
  placeholder="Location"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>
<div className='flex'>
    
<input
  type="text"
  placeholder="Budget*"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>

<input
  type="text"
  placeholder="Subject"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>



</div>
<input
  type="text"
  placeholder="Message"
  className="w-full border-0 border-b-[1px] 
         [border-bottom-color:#E6E8EB] 
         focus:[border-bottom-color:#A53DFF]
         focus:outline-none focus:ring-0 
         placeholder:text-[#697484]
         focus:placeholder:text-[#A53DFF]
         placeholder:text-sm py-2"
/>

                </div>
                <div className='mt-8'>
                    <div
                role="button"
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                  backgroundColor: "#A53DFF",
                  alignItems:'center',
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  width:'130px'
                }}
                className="cursor-pointer px-[24px] py-[12px] rounded-3 i mt-[20px]"
              >
                <p className="font-medium text-[16px]">Submit</p> <div> <img
              src="/images/dIcon.svg"
              alt="download icon"
            /></div>
              </div>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default ContactSection