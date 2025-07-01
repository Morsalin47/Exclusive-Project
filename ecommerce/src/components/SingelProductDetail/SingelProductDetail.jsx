import React, { use, useEffect, useState } from 'react'
import Container from '../Layout/Container'
import Main from '../../assets/main.png'
import Left1 from '../../assets/l1.png'
import Left2 from '../../assets/l2.png'
import Left3 from '../../assets/l3.png'
import Left4 from '../../assets/l4.png'
import Banefit1 from '../../assets/banefit1.png'
import Banefit2 from '../../assets/banefit2.png'
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router'

const SingelProductDetail = () => {

    const { id } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProductData(data.products))
    }, [])

    const SingelProduct = productData.find((product) => product.id == id);

    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);


    const handleClick1 = () => {
        setClicked1(true);
        setClicked2(false);
    };
    const handleClick2 = () => {
        setClicked1(false);
        setClicked2(true);
    };

    const Banefit = [
        {
            image: Banefit1,
            name: 'Free Delivery',
            p: 'Enter your postal code for Delivery Availability'
        },
        {
            image: Banefit2,
            name: 'Return Delivery',
            p: 'Free 30 Days Delivery Returns. Details'
        }
    ]

    // border-[3px] border-[#000000]

    return (
        <div className='py-30'>
            <Container>
                <div className='flex'>
                    <div className='w-[15%] mr-[15px] '>
                        <div className='flex flex-col gap-y-4'>
                            <div className='bg-[#F5F5F5] rounded px-6 py-4'>
                                <img src={Left1} alt="" />
                            </div>
                            <div className='bg-[#F5F5F5] rounded px-6 py-4'>
                                <img src={Left2} alt="" />
                            </div>
                            <div className='bg-[#F5F5F5] rounded px-6 py-4'>
                                <img src={Left3} alt="" />
                            </div>
                            <div className='bg-[#F5F5F5] rounded px-6 py-4'>
                                <img src={Left4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-[40%]'>
                        <div className='bg-[#F5F5F5] rounded px-6 pt-[154px] pb-[131px]'>
                            <img src={Main} alt="" />
                        </div>
                    </div>
                    <div className='w-[45%]'>
                        <div className='ml-18'>
                            <h2 className='font-secondary font-semibold text-xl leading-6 mb-4'>{SingelProduct?.title}</h2>
                            <p className='font-secondary text-xl leading-6 mb-6'>${SingelProduct?.price}</p>
                            <p className='font-primary leading-5 pb-6 border-b-[2px] border-[#000000]'>{SingelProduct?.description}</p>
                            <div className='flex items-center gap-x-2 mt-6'>
                                <p className='font-secondary text-xl leading-5'>Colours:</p>
                                <div className='w-[20px] h-[20px] rounded-full bg-[#A0BCE0]'
                                    onClick={handleClick1}
                                    style={{ border: clicked1 ? '3px solid #000000' : 'none' }}>
                                </div>
                                <div className='w-[20px] h-[20px] rounded-full bg-[#E07575]'
                                    onClick={handleClick2}
                                    style={{ border: clicked2 ? '3px solid #000000' : 'none' }}>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-2 mt-20'>
                                <button className='font-primary font-medium text-[16px] leading-6 bg-primary px-12 py-2.5 text-white cursor-pointer'>Add to Cart</button>
                                <div className='rounded w-10 h-10 border-[2px] border-[#D9D9D9] ml-4 flex items-center justify-center'>
                                    <CiHeart size={30} className='text-[#000000]  cursor-pointer' />
                                </div>
                            </div>
                            <div className='mt-10 border-2 border-[#D9D9D9] rounded px-6 pt-4'>
                                {
                                    Banefit.map((item) => (
                                        <div className='flex items-center gap-x-4 pb-6 border-b-[2px] border-full border-[#D9D9D9] last:border-0 last:pt-6'>
                                            <img src={item.image} alt="" />
                                            <div>
                                                <h3 className='font-primary font-medium leading-6'>{item.name}</h3>
                                                <p className='font-primary font-medium text-[12px] leading-4'>{item.p}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingelProductDetail