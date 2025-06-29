import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductRating = ({ rating }) => {
    const fullRating = Math.floor(rating);
    const halfRating = rating % 1 >= 0.5;
    const emptyRating = 5 - fullRating - (halfRating ? 1 : 0);

    return (
        <div className='flex items-center'>
            {
                [...Array(fullRating)].map(() => (
                    <FaStar className='text-[#FFAD33]' />
                ))
            }
            {
                halfRating && <FaStarHalfAlt className='text-[#FFAD33]' />
            }
            {
                [...Array(emptyRating)].map(() => (
                    <FaStar className='text-[#BFBFBF]' />
                ))
            }
            <p className='font-primary font-medium text-[#808080] ml-2'>({rating})</p>
        </div>
    )
}

export default ProductRating