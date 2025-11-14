import React from "react";
import { FaReact } from "react-icons/fa";
import { ProjectDetailType } from "../data/projectsDetail";
import { iconStyle } from "@/app/common";
function DetailFeature({project}:{project?:ProjectDetailType}) {
 
  return (
    <div className="container-wrapper py-5">
      <div className="flex justify-center">
        <div className="w-[500px] text-center mt-5 mb-5">
          <p className="font-semibold text-[48px]">Features</p>
          <p className="mt-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {project?.features.map((feature, index) => {
            return (
              <div className="item bg-grey px-5 shadow-md rounded-lg   shadow-md ">
                <div key={index} className="flex items-center gap-2 py-3">
                  {React.cloneElement(feature.logo, { style: iconStyle })}                  
                  
                  <p className="font-medium text-[16px]">{feature.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailFeature;
