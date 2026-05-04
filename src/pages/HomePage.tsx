import React from 'react'
import LandingNavbar from '../component/LandingNavbar'
import HeroSection from '../component/HeroSection'
import Services from '../component/Services'
import WhyUs from '../component/WhyUs'
import Testimonials from '../component/Testimonials'
import Footer from '../component/Footer'

const HomePage = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-slate-800 bg-white">
      <LandingNavbar />
      <HeroSection />
      <Services />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage
