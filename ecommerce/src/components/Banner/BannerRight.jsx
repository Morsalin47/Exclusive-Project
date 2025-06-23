import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Banner from '../../assets/banner.png'

const BannerRight = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-[80%]'>
      <Slider {...settings}>
        <div>
          <h3><img src={Banner} className="w-full" alt="" /></h3>
        </div>
        <div>
          <h3><img src={Banner} className="w-full" alt="" /></h3>
        </div>
        <div>
          <h3><img src={Banner} className="w-full" alt="" /></h3>
        </div>
        <div>
          <h3><img src={Banner} className="w-full" alt="" /></h3>
        </div>
        <div>
          <h3><img src={Banner} className="w-full" alt="" /></h3>
        </div>
      </Slider>
    </div>
  )
}

export default BannerRight