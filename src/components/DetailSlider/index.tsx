"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ProjectDetailType } from "../../data/projectsDetail";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function DetailSlider({ project }: { project?: ProjectDetailType }) {
  const [fullScreenImg, setFullScreenImg] = useState<string | null>(null);

  return (
    <>
      <div className="container-wrapper bg-grey">
        <div className="container">
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
              {project?.sliders.map((slide, i) => {
                const imgSrc = slide.image.desktop || slide.image.mobile;

                return (
                  <SwiperSlide key={i}>
                    <div
                      className="bg-white rounded-xl overflow-hidden shadow-xl cursor-zoom-in transition-all duration-300 hover:shadow-2xl"
                      onClick={() => setFullScreenImg(imgSrc)}
                    >
                      {/* Main large image */}
                      <div className="relative w-full h-[50vh] md:h-[70vh] bg-gray-100">
                        <Image
                          src={imgSrc}
                          alt={slide.text.title}
                          fill
                          className="object-contain"   // This is the key: shows FULL image, no crop!
                          priority={i === 0}
                          sizes="100vw"
                        />
                      </div>

                      {/* Text below */}
                      <div className="p-6 text-center bg-white">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-600 mb-3">
                          {slide.text.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {slide.text.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      {/* FULL SCREEN OVERLAY - This is the magic */}
      {fullScreenImg && (
        <div
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setFullScreenImg(null)}
        >
          <button
            onClick={() => setFullScreenImg(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <FaTimes size={40} />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-screen">
            <Image
              src={fullScreenImg}
              alt="Full screen view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}