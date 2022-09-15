import React from 'react'
import { latestdata as data, latestdata } from './latestdata';

const Latest = () => {
  return (
    <section className='px-40'>
        <div className='mt-[30rem]'>
            <h2 className='font-normal font-oswald'>LATEST ALBUMS</h2>
            <h5 className='text-orange font-semibold tracking-widest'>THINGS WE,VE MADE</h5>
        </div>
        <div className="mt-32 mb-80 grid lg:grid-cols-3 gap-x-12 gap-y-64 ">
            {data.map((item, index) => {
                return (
                    <>
                        <div key={index} className='relative bg-white p-5 h-full flex justify-end items-end'>

                             <img className='w-full h-full lg:h-[459px]' src={item.url} alt="" />

                             <div className='absolute -bottom-32 right-0 bg-white w-[92%] py-20 pl-16  -mb-16'>
                                <h4 className='text-orange text-6xl font-normal'>{item.title}</h4>
                                <h6 className='mt-6 text-3xl font-semibold'>{item.date}</h6>
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