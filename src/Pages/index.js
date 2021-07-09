import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Aboutme from '../components/AboutmeSection'
import Footer from '../components/FooterSection'
import Projects from '../components/Projects.js'
import Particle from '../components/Particle'



const Home = () => {
    const [isOpen, setisOpen] = useState(false)

    const toggle = () =>
    {
        setisOpen(!isOpen)
    }

    return (
        <>
         <Particle />
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HomeSection />
         <Aboutme />
         <Projects />
         <Footer />
         
        </>
    )
}

export default Home
