import React from 'react'
import Container from '../components/Layout/Container'
import ProductLeftPart from '../components/ProductPage/ProductLeftPart'
import ProductRightPart from '../components/ProductPage/ProductRightPart'

const Product = () => {
  return (
    <div>
        <Container>
            <div className='py-30 flex'>
                <div className='w-[25%]'>
                    <ProductLeftPart />
                </div>
                <div className='w-[75%]'>
                    <ProductRightPart />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Product