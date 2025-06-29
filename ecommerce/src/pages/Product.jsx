import React from 'react'
import Container from '../components/Layout/Container'
import ProductLeftPart from '../components/ProductPage/ProductLeftPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  return (
    <div>
        <Container>
            <div className='py-30 flex'>
                <div className='w-[30%]'>
                    <ProductLeftPart />
                </div>
                <div className='w-[70%]'>
                    <ProductRightPart />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Product