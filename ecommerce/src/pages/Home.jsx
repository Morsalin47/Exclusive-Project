import React from 'react'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSelling from '../components/BestSelling/BestSelling'
import Offer from '../components/Offer/Offer'
import OurProducts from '../components/OurProducts/OurProducts'
import Featured from '../components/Featured/Featured'
import Service from '../components/Service/Service'

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <BestSelling />
      <Offer />
      <OurProducts />
      <Featured />
      <Service />
    </>
  )
}

export default Home