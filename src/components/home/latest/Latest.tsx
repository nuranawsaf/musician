import React from 'react'
import { latestdata as data, latestdata } from './latestdata';

const Latest = () => {
  return (
    <section className='px-40'>
        <div className='mt-40'>
            <h2 className='font-bold '>LATEST ALBUMS</h2>
            <h5 className='text-orange font-semibold tracking-widest'>THINGS WE,VE MADE</h5>
        </div>
        <div className="mt-32 mb-80 grid lg:grid-cols-3 gap-x-12 gap-y-32">
            {data.map((item, index) => {
                return (
                    <>
                        <div key={index} className='bg-white p-5 h-full flex justify-center items-end'>

                             <img className='w-full h-full lg:h-[459px]' src={item.url} alt="" />

                             <div className='absolute bg-white px-32 py-12  -mb-16'>
                                <h4 className='text-orange font-bold'>{item.title}</h4>
                                <h6>{item.date}</h6>
                             </div>
                        </div>
                    </>
                )
            })}
        </div>
    </section>
  )
}

export default Latest