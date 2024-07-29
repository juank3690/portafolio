"use client"
import React from 'react'
import MotionTransition from './transition-component'
import Image from 'next/image'

const AvatarPortfolio = () => {
  return (
    <MotionTransition position="bottom" className='bottom-0 left-0 hidden md:inline-block md:absolute' >
        <Image src="/avatar-works.png" width={250} height={250} className='w-full h-full ' alt='avatar portafolio'></Image>
    </MotionTransition>
  )
}

export default AvatarPortfolio
