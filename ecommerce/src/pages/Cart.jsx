import React from 'react'
import Container from '../components/Layout/Container'
import CartPage from '../components/CartPage/CartPage'

const Cart = () => {
  return (
    <div className='py-30 font-primary'>
        <Container>
            <CartPage />
        </Container>
    </div>
  )
}

export default Cart