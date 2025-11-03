import React from 'react'
import DetailHeroSection from '../components/DetailHeroSection'
import DetailAccordionButton from '../components/DetailAccordionButton'
import DetailAboutSection from '../components/DetailAboutSection'
import DetailSlider from '../components/DetailSlider'
function page() {
  return (
    <div>
        <DetailHeroSection/>
        <DetailAccordionButton/>
        <DetailAboutSection/>
        <DetailSlider/>
    </div>
  )
}

export default page