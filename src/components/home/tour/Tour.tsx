import React from 'react'
import { tourdata as data} from './tourdata';

const Tour = () => {
  return (
    <section className='tour-outWrapper'>
        <div id='tour' className='tour-inWrapper'>
            <h2 className='font-normal font-oswald '>TOUR DATES</h2>
            <h5 className='text-orange font-semibold md:tracking-widest'>SEE YOU SOON!</h5>
        </div>

        
        <div className='mt-2 2xl:mt-32'>
            {data.map((item, index) => {
                return  (
                    <>
                        <div className='mt-1'>
                            <div  key={index} className='flex items-center'>
                                <div className='date-style'>
                                    <h2 className='font-style'>{item.date}</h2>
                                    <h4 className='text-white  lg:mt-4 2xl:mt-4'>{item.month}</h4>
                                </div>

                                <div className='tour-list'>
                                    <div className='lg:ml-12 '>
                                        <h4 className='w-28 md:w-full truncate font-semibold text-orange '>{item.title}</h4>
                                        <h6 className='place-style w-28 md:w-full truncate'>{item.des}</h6>
                                    </div>

                                    <button className='text-black h-max'>{item.btn}</button>
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
