import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Aboutme from '../components/AboutmeSection'
import Footer from '../components/FooterSection'



const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () =>
    {
        setisOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>  
         <HomeSection />
         <Aboutme />
         <Footer />
         
        </>
    )
}

export default Home
