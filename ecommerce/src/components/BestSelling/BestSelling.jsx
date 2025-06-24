import React from 'react'
import Container from '../Layout/Container'
import bsp1 from '../../assets/BSP1.png'
import bsp2 from '../../assets/BSP2.png'
import bsp3 from '../../assets/BSP3.png'
import bsp4 from '../../assets/BSP4.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";


const BestSelling = () => {
    return (
        <div className='pb-20'>
            <Container>
                <div className='border-t-[2px] border-[#D9D9D9] pt-[27px]'>
                    <div className='flex items-center'>
                        <div className='w-[20px] h-[40px] bg-primary rounded'></div>
                        <div>
                            <p className='font-primary font-semibold leading-5 text-primary ml-4'>This Month</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center justify-between mb-[60px]'>
                    <h3 className='font-secondary font-semibold text-4xl leading-12'>Best Selling Products</h3>
                    <button className='font-primary text-medium py-4 px-12 bg-primary rounded text-white'>View All</button>
                </div>
                <div className='flex justify-between'>
                    <div className='relative w-[270px]'>
                        <div className='absolute top-1 right-1'>
                            <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <CiHeart size={20} />
                            </div>
                            <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <IoEyeOutline size={20} />
                            </div>
                        </div>
                        <div className='bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                            <img src={bsp1} alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='font-primary font-medium leading-6'>The north coat</p>
                            <p className='font-primary font-medium py-2 text-[#DB4444]'>$260 <del className='text-[#808080]'>$360</del> </p>
                            <div className='flex items-center'>
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <p className='font-primary font-medium text-[#808080]'>(65)</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[270px] h-[250px]'>
                        <div className='absolute top-1 right-1'>
                            <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <CiHeart size={20} />
                            </div>
                            <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <IoEyeOutline size={20} />
                            </div>
                        </div>
                        <div className='bg-[#F5F5F5] py-[60px] px-[46px] rounded'>
                            <img src={bsp2} alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='font-primary font-medium leading-6'>Gucci duffle bag</p>
                            <p className='font-primary font-medium py-2 text-[#DB4444]'>$960 <del className='text-[#808080]'>$1160</del> </p>
                            <div className='flex items-center'>
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStarHalfAlt className='text-[#FFAD33]'/>
                                <p className='font-primary font-medium text-[#808080]'>(65)</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[270px]'>
                        <div className='absolute top-1 right-1'>
                            <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <CiHeart size={20} />
                            </div>
                            <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <IoEyeOutline size={20} />
                            </div>
                        </div>
                        <div className='bg-[#F5F5F5] py-[77px] px-[40px] rounded'>
                            <img src={bsp3} alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='font-primary font-medium leading-6'>RGB liquid CPU Cooler</p>
                            <p className='font-primary font-medium py-2 text-[#DB4444]'>$160 <del className='text-[#808080]'>$170</del> </p>
                            <div className='flex items-center'>
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStarHalfAlt className='text-[#FFAD33]'/>
                                <p className='font-primary font-medium text-[#808080]'>(65)</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[270px]'>
                        <div className='absolute top-1 right-1'>
                            <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <CiHeart size={20} />
                            </div>
                            <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                <IoEyeOutline size={20} />
                            </div>
                        </div>
                        <div className='bg-[#F5F5F5] py-[38px] px-[65px] rounded'>
                            <img src={bsp4} alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='font-primary font-medium leading-6'>Small BookSelf</p>
                            <p className='font-primary font-medium py-2 text-[#DB4444]'>$360</p>
                            <div className='flex items-center'>
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <FaStar className='text-[#FFAD33]' />
                                <p className='font-primary font-medium text-[#808080]'>(65)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BestSelling