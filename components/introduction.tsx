"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import React from 'react'

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darBg/60'>
        <div className='z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2'>
          <Image src="/home-4.png" priority width="800" height="800" alt='profile' className='lg:mt-24'/>  
         <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mb-5 text-2xl leading-tight text-center md:text-left
            md:text-4xl md:mb-10'>si puedes pensarlo,<br/>
            <TypeAnimation
            sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes desarrollarlo",
                1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='font-bold text-secondary'
            />
            </h1>
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>Como desarrollador full stack, soy un profesional versátil y altamente competente, capaz de llevar a cabo cualquier tipo de proyecto digital con excelencia. </p>
            
         </div>

        </div>
      
    </div>
  )
}

export default Introduction
