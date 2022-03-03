import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Service from '../components/Service'
import Transactions from '../components/Transactions'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
            <Navbar/>
            <Welcome/>
        </div>
        <Service/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default Home