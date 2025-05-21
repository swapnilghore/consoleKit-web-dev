import React from 'react'
import Nav from './Nav'
import Main from './Main'
import DiscountOffers from '../home-landing-page/DiscountOffers '
import TrendingSetups from '../home-landing-page/TrendingSetups'
import BlogSection from '../home-landing-page/BlogSection'
import Footer from '../Footer'

const Dashboard = () => {
    return (
        <>
            <Nav />
            <Main />
            <DiscountOffers />
            <TrendingSetups />
            <BlogSection />
            <Footer />
        </>
    )
}

export default Dashboard