import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Main from './Main'
import DiscountOffers from '../home-landing-page/DiscountOffers '
import TrendingSetups from '../home-landing-page/TrendingSetups'
import BlogSection from '../home-landing-page/BlogSection'
import Footer from '../Footer'

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log("Parsed user:", parsedUser);
            setUser(parsedUser);
        }
    }, []);

    return (
        <>
            <Nav user={user} />
            <Main />
            <DiscountOffers />
            <TrendingSetups />
            <BlogSection />
            <Footer />
        </>
    )
}

export default Dashboard