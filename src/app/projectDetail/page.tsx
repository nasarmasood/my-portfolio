'use client'
import React from 'react'
import DetailHeroSection from '../components/DetailHeroSection'
import DetailAccordionButton from '../components/DetailAccordionButton'
import DetailAboutSection from '../components/DetailAboutSection'
import DetailSlider from '../components/DetailSlider'
import DetailFeature from '../components/DetailFeature'
import DetailTechStack from '../components/DetailTechStack'
import { useSearchParams } from 'next/navigation'
import { projectDetailData } from '../components/data/projectsDetail'

function page() {
  const searchParams=useSearchParams()
  const projectId=searchParams.get('projectId')
  const project=projectDetailData.find((project)=>project.id==Number(projectId))
  return (
    <div >
        <DetailHeroSection project={project}/>
        <DetailAccordionButton/>
        <DetailAboutSection project={project}/>
        <DetailSlider project={project}/>
        <DetailFeature project={project}/>
        <DetailTechStack project={project}/>
    </div>
  )
}

export default page