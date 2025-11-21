"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ProjectDetailType } from "../../data/projectsDetail";

const slides = [
  {
    topImage: "/images/pool-top.jpg",
    bottomLeft: "/images/pool-left.jpg",
    bottomRight: "/images/pool-right.jpg",
    title: "Luxury Swimming Pool",
    description:
      "Experience serenity in our infinity-edge pool surrounded by lush greenery — perfect for relaxation and social gatherings.",
  },
  {
    topImage: "/images/gym-top.jpg",
    bottomLeft: "/images/gym-left.jpg",
    bottomRight: "/images/gym-right.jpg",
    title: "State-of-the-Art Fitness Center",
    description:
      "Equipped with premium machines, free weights, and dedicated training zones — designed for every fitness enthusiast.",
  },
  {
    topImage: "/images/lobby-top.jpg",
    bottomLeft: "/images/lobby-left.jpg",
    bottomRight: "/images/lobby-right.jpg",
    title: "Elegant Community Lobby",
    description:
      "A warm, modern reception area that welcomes residents and guests with sophistication and comfort.",
  },
];


export default function DetailSlider({project}:{project?:ProjectDetailType}) {
  return (
<div className='container-wrapper bg-grey'>
        <div  className='container '> 
          <div className="mt-5 py-5">     
          <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
          autoplay={{
    delay: 4000,
    pauseOnMouseEnter: true,      
    disableOnInteraction: false, 
  }}
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg"
      >
        {project?.sliders.map((slide, i) => (
          <SwiperSlide  key={i}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              {/* Top full-width image */}
              

              {/* Bottom two images: 30% + 70% */}
              <div className="flex mt-2 px-2">
                {/* <div className="w-[30%] h-100 relative">
                               <Image fill src={slide.image.mobile} alt='project pic'/>
                  
                </div> */}
                <div className="relative w-full h-[40vh] overflow-hidden">
  <Image
    src={slide.image.desktop}
    alt="project pic"
   width={1024}
height={100}  
  />
</div>
              </div>

              {/* Text below */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-brand-600 mb-2">
                  {slide.text.title}
                </h3>
                <p className="text-gray-600 text-sm">{slide.text.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      </div>
    </div>
  );
}
