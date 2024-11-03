import React from 'react'
import { H2, P } from '../shared/typography'
import Button from '../shared/Button'

const Hero = () => {
  return (
    <section className='max-w-screen min-h-screen bg-gradient flex justify-center items-center'>
      <H2> 
        This is hte bebas
      </H2>
      <P>
      You are using roboto, babe! 
      </P>
      <Button href="#menu">explore menu</Button>
    </section>
  )
}

export default Hero