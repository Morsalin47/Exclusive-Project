import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSelling from '../components/BestSelling/BestSelling'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Categories />
      <BestSelling />      
    </>
  )
}

export default Home