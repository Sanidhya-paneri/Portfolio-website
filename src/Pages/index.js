import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'


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
        </>
    )
}

export default Home
