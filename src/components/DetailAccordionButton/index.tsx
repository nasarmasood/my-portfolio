'use client'
import React, { useState } from 'react';
import {scrollToSection} from "@/utils"
function DetailAccordionButton() {
  const tabs = ['About', 'Feature', 'Stack'];
  const [activeTab, setActiveTab] = useState('About');

  const handleTabClick=(tab:string)=>
  {
    setActiveTab(tab)
    scrollToSection(tab)
  }
  return (
    <div className='container-wrapper bg-white'>
                <div  className='container '>

    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-2 border-b-2 px-4 transition-colors duration-200 cursor-pointer ${
              activeTab === tab
                ? 'border-primary text-black font-medium'
                : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
            </div>

    </div>
  );
}

export default DetailAccordionButton;
