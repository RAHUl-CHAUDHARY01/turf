import React from 'react'
import HeroSection from './HeroSection'
import VacationCards from './VacationCards'
import Benefits from './Benefits'
import Carousel from './Carousel'
import Footer from './Footer'
import PopularActivities from './HomePage/Activities'

function Home() {
  return (
    <div>
      <HeroSection/>
      <VacationCards/>
      <PopularActivities/>
      <Benefits/>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Home
