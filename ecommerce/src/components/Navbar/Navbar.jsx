import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';
import { Link } from 'react-router';


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
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/product">Product</Link>
                            </li>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                            <li>
                                <Link to="">About</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[40%] flex items-center justify-end gap-x-[4px]'>
                        <div className='w-[285px] relative'>
                            <input className='w-full pl-5 pr-[50px] font-primary bg-[#f5f5f5] rounded-sm py-[7px]' type="text" placeholder='What are you looking for?' />
                            <CiSearch size={24} className='absolute top-[7px] right-[12px] font-bold' />
                        </div>
                        <CiHeart size={24} />
                        <Link to="/cart">
                            <IoCartOutline size={24} />
                        </Link>
                        <GoPerson size={24} />

                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar