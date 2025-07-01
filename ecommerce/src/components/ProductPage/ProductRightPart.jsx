import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import ProductRating from './ProductRating';

const ProductRightPart = () => {

    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 6;

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProductData(data.products))
    }, [])

    const totalProducts = productData.length;
    const totalPages = Math.ceil(totalProducts / productPerPage);
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const currentProducts = productData.slice(indexOfFirstProduct, indexOfLastProduct);

    const data = [...Array(totalPages).keys()].map((index) => index + 1);

    return (
        <div>
            <div className='flex flex-wrap gap-x-8'>
                {
                    currentProducts.map((product) => (
                        <div className='flex justify-between'>
                            <div className='relative w-[270px] mt-5 mb-10'>
                                <div className='absolute top-1 right-1 z-20'>
                                    <div className='h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                        <CiHeart size={20} />
                                    </div>
                                    <div className='mt-2 h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center'>
                                        <IoEyeOutline size={20} />
                                    </div>
                                </div>
                                <div className='relative group bg-[#F5F5F5] py-[52px] px-[65px] rounded'>
                                    <img src={product.thumbnail} alt="" />
                                    <div className='absolute bottom-0 left-0 w-full hidden group-hover:block'>
                                        <p className='font-primary font-medium leading-6 text-white bg-black py-2 text-center'>Add To Cart</p>
                                    </div>
                                </div>

                                <div className='mt-2'>
                                    <p className='font-primary font-medium leading-6'>{product.title}</p>
                                    <p className='font-primary font-medium py-2 text-[#DB4444]'>${product.price}</p>
                                    <div className='flex items-center'>
                                        <ProductRating rating={product.rating} />
                                        <p className='font-primary font-medium text-[#808080] ml-1'>({product.reviews.length})</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }

                <div className='flex gap-4 cursor-pointer'>
                    {
                        data.map((item) => (
                            <div className={`px-4 py-2 rounded ${currentPage === item ? "bg-black text-white" : "bg-gray-400 text-black"}`} onClick={() => setCurrentPage(item)}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductRightPart