import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const ProductLeftPart = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProductData(data.products))
    }, [])

    const categoriesProduct = productData.map((product) => product.category);
    const uniqueCategories = [...new Set(categoriesProduct)];

    return (
        <div>
            <h2 className='font-primary font-bold text-xl text-[#262626]'>Shop by Category</h2>
            <div className='mt-4 mb-10'>
                {
                    uniqueCategories.map((category) => (
                        <Link to={`/product/${category}`} key={category}>
                            <p className='font-primary mb-4 cursor-pointer uppercase'>{category}</p>
                        </Link>
                    ))
                }
            </div>

            <h2 className='font-primary font-bold text-xl text-[#262626] mb-4'>Shop by Color</h2>
            <div>
                <div className='flex items-center gap-2 mb-4'>
                    <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
                    <p className='font-primary text-[#767676] leading-8 cursor-pointer'>Colour 1</p>
                </div>
                <div className='flex items-center gap-2 mb-4'>
                    <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
                    <p className='font-primary text-[#767676] leading-8 cursor-pointer'>Colour 2</p>
                </div>
                <div className='flex items-center gap-2 mb-4'>
                    <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
                    <p className='font-primary text-[#767676] leading-8 cursor-pointer'>Colour 3</p>
                </div>
            </div>

        </div>
    )
}

export default ProductLeftPart