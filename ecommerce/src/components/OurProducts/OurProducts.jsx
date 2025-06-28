import React from 'react'
import Container from '../Layout/Container'
import op1 from '../../assets/op1.png'
import op2 from '../../assets/op2.png'
import op3 from '../../assets/op3.png'
import op4 from '../../assets/op4.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";


const OurProducts = () => {
    const [visible, setvisible] = React.useState(4);
    const products = [
        {
            image: op1,
            title: "Breed Dry Dog Food",
            price: "$100",
            review: "(35)",
        },
        {
            image: op2,
            title: "CANON EOS DSLR Camera",
            price: "$360",
            review: "(95)",
        },
        {
            image: op3,
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "(325)",
        },
        {
            image: op4,
            title: "Curology Product Set",
            price: "$500",
            review: "(145)",
        },
        {
            image: op1,
            title: "Breed Dry Dog Food",
            price: "$100",
            review: "(35)",
        },
        {
            image: op2,
            title: "CANON EOS DSLR Camera",
            price: "$360",
            review: "(95)",
        },
        {
            image: op3,
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "(325)",
        },
        {
            image: op4,
            title: "Curology Product Set",
            price: "$500",
            review: "(145)",
        },
        {
            image: op1,
            title: "Breed Dry Dog Food",
            price: "$100",
            review: "(35)",
        },
        {
            image: op2,
            title: "CANON EOS DSLR Camera",
            price: "$360",
            review: "(95)",
        },
        {
            image: op3,
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "(325)",
        },
        {
            image: op4,
            title: "Curology Product Set",
            price: "$500",
            review: "(145)",
        },
        {
            image: op1,
            title: "Breed Dry Dog Food",
            price: "$100",
            review: "(35)",
        },
        {
            image: op2,
            title: "CANON EOS DSLR Camera",
            price: "$360",
            review: "(95)",
        },
        {
            image: op3,
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "(325)",
        },
        {
            image: op4,
            title: "Curology Product Set",
            price: "$500",
            review: "(145)",
        },
        {
            image: op1,
            title: "Breed Dry Dog Food",
            price: "$100",
            review: "(35)",
        },
        {
            image: op2,
            title: "CANON EOS DSLR Camera",
            price: "$360",
            review: "(95)",
        },
        {
            image: op3,
            title: "ASUS FHD Gaming Laptop",
            price: "$700",
            review: "(325)",
        },
        {
            image: op4,
            title: "Curology Product Set",
            price: "$500",
            review: "(145)",
        },
    ]
    const LoadData = () => {
        setvisible((prev) => prev + 4);
        if (visible >= products.length) {
            setvisible(products.length);
        }
    }
            
    return (
        <div className='mt-[161px] pb-20 mb-11'>
            <Container>
                <div>
                    <div className='flex items-center'>
                        <div className='w-[20px] h-[40px] bg-primary rounded'></div>
                        <div>
                            <p className='font-primary font-semibold leading-5 text-primary ml-4'>Our Products</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center justify-between mb-[60px]'>
                    <h3 className='font-secondary font-semibold text-4xl leading-12'>Explore Our Products</h3>
                </div>
                <div className='flex flex-wrap justify-between'>
                    {
                        products.slice(0,visible).map((product) => (
                            <div className='flex justify-between'>
                                <div className='relative w-[270px] mt-5'>
                                    <div className='absolute top-1 right-1 z-20'>
                                        <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                            <CiHeart size={20} />
                                        </div>
                                        <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                            <IoEyeOutline size={20} />
                                        </div>
                                    </div>
                                    <div className='relative group bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                                        <img src={product.image} alt="" />
                                        <div className='absolute bottom-0 left-0 w-full hidden group-hover:block'>
                                            <p className='font-primary font-medium leading-6 text-white bg-black py-2 text-center'>Add To Cart</p>
                                        </div>
                                    </div>

                                    <div className='mt-2'>
                                        <p className='font-primary font-medium leading-6'>{product.title}</p>
                                        <p className='font-primary font-medium py-2 text-[#DB4444]'>{product.price}</p>
                                        <div className='flex items-center'>
                                            <FaStar className='text-[#FFAD33]' />
                                            <FaStar className='text-[#FFAD33]' />
                                            <FaStar className='text-[#FFAD33]' />
                                            <FaStar className='text-[#BFBFBF]' />
                                            <FaStar className='text-[#BFBFBF]' />
                                            <p className='font-primary font-medium text-[#808080]'>{product.review}</p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        ))
                    }
                </div>

                <div className='text-center mt-10'>
                    <button onClick={LoadData} className='font-primary font-medium leading-6 text-white bg-primary py-4 px-12 rounded text-center'>View All Products</button>
                </div>
            </Container>
        </div>
    )
}

export default OurProducts