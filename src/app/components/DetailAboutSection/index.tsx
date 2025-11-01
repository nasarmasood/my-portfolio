import React from 'react'

function DetailAboutSection() {
  return (
<div className='container-wrapper bg-white'>
                <div  className='container '>        
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='flex gap-2 mt-3 '><p className='font-medium'>App Development periode : </p>   <p> July 2020 (a month)</p></div>

           <div
                role="button"
                style={{
                  border: "2px solid #A53DFF",
                  borderRadius: "8px",
                  color: "#A53DFF",
                  display:'flex',
                  gap:'10px'
                }}
                className="cursor-pointer w-[230px]  px-[24px] py-[12px] rounded-3 inline-block mt-[20px]"
              >
                <div className=" w-[24px] h-[24px]"> <img
              src="/images/githubprimary.svg"
              alt="download icon"
              className="w-full h-full object-cover"
            /></div><p className="font-semibold text-[16px]">Open with Github</p>
              </div>
    </div>
    </div>
  )
}

export default DetailAboutSection