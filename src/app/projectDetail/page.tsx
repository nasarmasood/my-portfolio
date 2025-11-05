import React from 'react'
import DetailHeroSection from '../components/DetailHeroSection'
import DetailAccordionButton from '../components/DetailAccordionButton'
import DetailAboutSection from '../components/DetailAboutSection'
import DetailSlider from '../components/DetailSlider'
import DetailFeature from '../components/DetailFeature'
import DetailTechStack from '../components/DetailTechStack'
function page() {
  return (
    <div >
        <DetailHeroSection/>
        <DetailAccordionButton/>
        <DetailAboutSection/>
        <DetailSlider/>
        <DetailFeature/>
        <DetailTechStack/>
    </div>
  )
}

export default page