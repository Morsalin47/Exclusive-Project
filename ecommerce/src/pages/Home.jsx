import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSelling from '../components/BestSelling/BestSelling'
import Offer from '../components/Offer/Offer'
import OurProducts from '../components/OurProducts/OurProducts'
import Featured from '../components/Featured/Featured'
import Service from '../components/Service/Service'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Categories />
      <BestSelling />
      <Offer />
      <OurProducts />
      <Featured />
      <Service />
      <Footer />
    </>
  )
}

export default Home