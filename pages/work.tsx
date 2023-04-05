import Hero from '@/components/Hero'
import Portofolio from '@/components/Portofolio'
import React from 'react'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is some of my recent work travelling the world' />
        <Portofolio />
    </div>
  )
}

export default work