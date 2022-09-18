import React from 'react'
import { tourdata as data, tourdata} from './tourdata';

const Tour = () => {
  return (
    <section className='bg-white px-[2rem] lg:px-[10rem]  pb-72'>
        <div id='tour' className='pt-[10rem] lg:pt-[28rem]'>
            <h2 className='font-normal font-oswald '>TOUR DATES</h2>
            <h5 className='text-orange font-semibold tracking-widest'>SEE YOU SOON!</h5>
        </div>
        <div className='mt-16 lg:mt-32'>
            {data.map((item, index) => {
                return  (
                    <>
                        <div className='mt-1'>
                            <div  key={index} className='flex items-center'>
                                <div className='text-center bg-dark_blue px-12 lg:px-20 py-8 lg:py-12'>
                                    <h2 className='text-orange '>{item.date}</h2>
                                    <h4 className='text-white'>{item.month}</h4>
                                </div>

                                <div className='bg-cheviot  lg:text-left flex justify-between px-8 py-[18px]  lg:py-[45px]  w-full'>
                                    <div className='lg:ml-12 '>
                                        <h4 className='font-semibold text-orange '>{item.title}</h4>
                                        <h6 className='font-semibold text-[1rem] '>{item.des}</h6>
                                    </div>

                                    <button className='buy-btn text-black text-[1.3rem] lg:text-[2.1rem]'>{item.btn}</button>
                                </div>

                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </section>
  )
}

export default Tour
