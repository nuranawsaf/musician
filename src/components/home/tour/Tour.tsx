import React from 'react'
import { tourdata as data, tourdata} from './tourdata';

const Tour = () => {
  return (
    <section className='bg-white m-40 p-20 pb-72'>
        <div className='mt-40'>
            <h2 className='font-bold '>TOUR DATES</h2>
            <h5 className='text-orange font-semibold tracking-widest'>SEE YOU SOON!</h5>
        </div>
        <div className='mt-32'>
            {data.map((item, index) => {
                return  (
                    <>
                        <div className='mt-1'>
                            <div  key={index} className='lg:flex items-center'>
                                <div className='text-center bg-dark_blue px-16 py-8'>
                                    <h2 className='text-orange'>{item.date}</h2>
                                    <h4 className='text-white'>{item.month}</h4>
                                </div>

                                <div className='bg-cheviot text-center lg:text-left lg:flex justify-between px-16 py-[09px] mb-12 lg:mb-0 lg:py-[45px]  w-full'>
                                    <div className='lg:ml-12 '>
                                        <h4 className='font-semibold text-orange'>{item.title}</h4>
                                        <h6 className='font-semibold'>{item.des}</h6>
                                    </div>

                                    <button className='buy-btn'>{item.btn}</button>
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
