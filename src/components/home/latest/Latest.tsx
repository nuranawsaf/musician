import React from 'react'
import { latestdata as data } from './latestdata';

const Latest = () => {
  return (
    <section className='wrapper '>
        <div className='mt-8 lg:mt-[10rem] 2xl:mt-[18rem]'>
            <h2 className='font-normal font-oswald'>LATEST ALBUMS</h2>
            <h5 className='text-orange font-semibold md:tracking-widest'>THINGS WE,VE MADE</h5>
        </div>
        <div className="card-style">
            {data.map((item, index) => {
                return (
                    <>
                        <div key={index} className='latest-card'>

                             <img className='card-img' src={item.url} alt="" />

                             <div className='feature-style'>
                                <h4 className='latest-info'>{item.title}</h4>
                                <h6 className='card-date'>{item.date}</h6>
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