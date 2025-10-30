'use client'
import React from 'react'
import Image from 'next/image'

function DetailHeroSection() {
       

  return (
    <div className='container-wrapper bg-white'>
        <div  className='container '>
<div className="flex flex-col md:flex-row gap-0 md:gap-5 ">
            <div className='w-[100%] md:w-[30%] pt-[80px] pb-[40px] pl-4 md:pl-0'>
                <div>
                    <p className='font-semibold text-[38px]'>E-commerce</p>
                </div>
                <div>
                    <p className='font-normal text-[12px] text-grey-dark'>UI Design</p>
                </div>
                <div>
                     <div
                role="button"
                style={{
                    display:'flex',
                    justifyContent:'space-between',
                  backgroundColor: "#A53DFF",
                  alignItems:'center',
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  width:'134px'
                }}
                className="cursor-pointer px-[10px] py-[12px] rounded-3 i mt-[20px]"
              >
                <p className="font-medium text-[16px]">View Live</p> <div> <img
              src="/images/dIcon.svg"
              alt="download icon"
            /></div>
              </div>
                </div>
             
               
                


            </div>
            <div className="w-full md:w-[70%] relative h-[250px] md:h-auto" >
             <Image fill src="/images/ProjectDetailPic.png" alt='project pic'/>
              
            </div>
         
            </div>

        </div>
    </div>
  )
}

export default DetailHeroSection