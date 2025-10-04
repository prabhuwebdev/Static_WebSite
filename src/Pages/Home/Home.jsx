import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './Hero'
import ClientSupport from './ClientSupport'
import ServiceCards from './ServiceCards'
import GetInTouch from './GetInTouch'
import FeaturedClients from './FeaturedClients'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
    <Hero/>
    <ClientSupport/>
    <ServiceCards/>
    <FeaturedClients/>
    <GetInTouch/>
    <Testimonial/>
    </>
  )
}

export default Home
