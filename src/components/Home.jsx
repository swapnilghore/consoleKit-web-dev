import React from 'react'
import Navbar from './Navbar'
import HeroComp from './home-landing-page/HeroComp'
import DiscountOffers from './home-landing-page/DiscountOffers '
import TrendingSetups from './home-landing-page/TrendingSetups'
import BlogSection from './home-landing-page/BlogSection'
import Footer from './Footer'

const home = () => {
  return (
    <>
        <Navbar />
        <HeroComp />
        <DiscountOffers />
        <TrendingSetups />
        <BlogSection />
        <Footer />
    </>
  )
}

export default home