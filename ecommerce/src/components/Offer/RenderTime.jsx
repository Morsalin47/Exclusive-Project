import React from 'react'

const RenderTime = ({ days, hours, minutes, seconds }) => {
    return (
        <div className='flex gap-x-6 mt-8'>
            <div className=' w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center'>
                <p className='font-primary font-semibold'>
                    {days}
                </p>
                <p className='font-primary text-[11px]'>
                    Days
                </p>

            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center'>
                <p className='font-primary font-semibold'>
                    {hours}
                </p>
                <p className='font-primary text-[11px]'>
                    Hours
                </p>
            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center'>
                <p className='font-primary font-semibold'>
                    {minutes}
                </p>
                <p className='font-primary text-[11px]'>
                    Minutes
                </p>
            </div>
            <div className='w-[62px] h-[62px] bg-white rounded-full flex flex-col justify-center items-center'>
                <p className='font-primary font-semibold'>
                    {seconds}
                </p>
                <p className='font-primary text-[11px]'>
                    Seconds
                </p>
            </div>
        </div>
    )
}

export default RenderTime