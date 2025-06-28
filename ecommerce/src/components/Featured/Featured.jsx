import React from 'react'
import Container from '../Layout/Container'
import Feature1 from '../../assets/feature1.png'
import Feature2 from '../../assets/feature2.png'
import Feature3 from '../../assets/feature3.png'
import Feature4 from '../../assets/feature4.png'

const Featured = () => {
    return (
        <div className='pb-[182px]'>
            <Container>
                <div>
                    <div className='flex items-center'>
                        <div className='w-[20px] h-[40px] bg-primary rounded'></div>
                        <div>
                            <p className='font-primary font-semibold leading-5 text-primary ml-4'>Featured</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 flex items-center justify-between mb-[60px]'>
                    <h3 className='font-secondary font-semibold text-4xl leading-12'>New Arrival</h3>
                </div>
                <div className='flex justify-between mt-[60px]'>
                    <div className="left">
                        <img src={Feature1} alt="" />
                    </div>
                    <div className="right">
                        <div className='mb-[32px]'>
                            <img src={Feature2} alt="" />
                        </div>
                        <div className='flex gap-x-[30px]'>
                            <img src={Feature3} alt="" />
                            <img src={Feature4} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured