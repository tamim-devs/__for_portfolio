import React from 'react'
import Navbar from './utilities/navbar/Navbar'
import Banner from './utilities/banner/Banner'
import Section1 from './utilities/Section1/Section1'
import Section1plus from './utilities/Section1plus/Section1plus'
import Section2 from './utilities/section2/Section2'
import Section3 from './utilities/section3/Section3'
import Footer from './components/banner/footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Section1/>
    <Section1plus/>
    <Section2/>
    <Section3/>
    <Footer/>
    </>
  )
}

export default App