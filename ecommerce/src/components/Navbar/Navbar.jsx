import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';


const Navbar = () => {
    return (
        <nav className='pt-[43px] pb-[14px] border-b-[2px] border-[#D9D9D9]'>
            <Container className='w-[1170px] mx-auto'>
                <div className='flex items-center'>
                    <div className='w-[20%]'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='w-[40%] font-primary text-base'>
                        <ul className='flex gap-x-[48px] '>
                            <li><a href="">Home</a></li>
                            <li><a href="">Product</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Signup</a></li>
                        </ul>
                    </div>
                    <div className='w-[40%] flex items-center justify-end gap-x-[4px]'>
                        <div className='w-[285px] relative'>
                            <input className='w-full pl-5 pr-[50px] font-primary bg-[#f5f5f5] rounded-sm py-[7px]' type="text" placeholder='What are you looking for?' />
                            <CiSearch size={24} className='absolute top-[7px] right-[12px] font-bold' />
                        </div>
                        <CiHeart size={24} />
                        <IoCartOutline size={24} />
                        <GoPerson size={24} />

                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar