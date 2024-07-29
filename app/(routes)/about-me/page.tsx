import Avatar from '@/components/avatar'
import ContainerPage from '@/components/container'
import TransitionPage from '@/components/Transition-page'
import React from 'react'

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage/>
      <ContainerPage >
        <Avatar/>
      </ContainerPage>
    </>
  )
}

export default PageAboutMe
