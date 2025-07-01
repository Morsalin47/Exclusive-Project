import React from 'react'

const ProductLeftPart = () => {
    const categoriesData = [
        {
            name: 'Woman’s Fashion',
        },
        {
            name: 'Men’s Fashion',
        },
        {
            name: 'Electronics',
        },
        {
            name: 'Home & Lifestyle',
        },
        {
            name: 'Medicine',
        },
        {
            name: 'Sports & Outdoor',
        },
        {
            name: 'Baby’s & Toys',
        },
        {
            name: 'Groceries & Pets',
        },
        {
            name: 'Health & Beauty',
        }
    ]
    return (
        <div>
            <h2 className='font-primary font-bold text-xl text-[#262626]'>Shop by Category</h2>
            <div className='mt-4 mb-10'>
                {
                    categoriesData.map((category) => (
                        <p className='font-primary mb-4'>{category.name}</p>
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