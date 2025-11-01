import React from 'react'
import DetailHeroSection from '../components/DetailHeroSection'
import DetailAccordionButton from '../components/DetailAccordionButton'
import DetailAboutSection from '../components/DetailAboutSection'
function page() {
  return (
    <div>
        <DetailHeroSection/>
        <DetailAccordionButton/>
        <DetailAboutSection/>
    </div>
  )
}

export default page