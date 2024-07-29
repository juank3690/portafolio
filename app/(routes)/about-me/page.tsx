import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import TimeLine from '@/components/time-line'
import TransitionPage from '@/components/Transition-page'
import React from 'react'

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage/>
      <ContainerPage >
        <Avatar/>
        <h1 className='text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10
        '>Habililidades tecnicas {" "}
          <span className='font-bold text-secondary'>desarrollador web fullStack-junior</span>
        </h1>
        <TimeLine/>
      </ContainerPage>
    </>
  )
}

export default PageAboutMe
