import React from 'react'
import Navbar from './Navbar'
import HeroComp from './home-landing-page/HeroComp'
import DiscountOffers from './home-landing-page/DiscountOffers '
import TrendingSetups from './home-landing-page/TrendingSetups'
import Footer from './Footer'

const home = () => {
  return (
    <>
        <Navbar />
        <HeroComp />
        <DiscountOffers />
        <TrendingSetups />
        <Footer />
    </>
  )
}

export default home