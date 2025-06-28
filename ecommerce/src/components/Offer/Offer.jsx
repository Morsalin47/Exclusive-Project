import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import RenderTime from './RenderTime';

const Offer = () => {
    return (
        <Container>
            <div className='bg-[url(./assets/offer.png)] py-[69px] bg-cover bg-no-repeat bg-center'>
                <div className=' pl-14'>
                    <p className='font-primary font-semibold leading-4 text-[#00FF66]'>Categories</p>
                    <h3 className='max-w-[440px] tracking-[4%] mt-8 font-secondary font-semibold text-5xl leading-16 text-[#FAFAFA]'>Enhance Your Music Experience</h3>
                    <div>
                        <Countdown 
                        date={Date.now() + 108000000} 
                        renderer={RenderTime}
                        />,
                    </div>
                    <div>
                        <button className='py-4 px-12 font-primary font-medium leading-6 text-[#FAFAFA] bg-[#00FF66] rounded'>Buy Now</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Offer