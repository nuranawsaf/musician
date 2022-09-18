import React from 'react'

const HeaderPage = () => {
  return (
    <header>
        <div  className=' header-bg bg-style  text-white font-bold flex items-center'>
          <div className='px-[2rem] lg:px-[10rem]'>
            <h1 className='text-[8rem] lg:text-[13rem] lg:-mb-8'>WE LOVE</h1>
            <h1 className='text-orange text-[8rem] lg:text-[13rem]'>LIVE EXPERIENCE</h1>
            <br />
            <h4 className='text-[2.1rem] lg:text-5xl -mt-16 md:-mt-2 lg:mt-4    tracking-wider'>LIVE MUSIC.NEW ALBUM.IBIZA.SPAIN.21-08-2022</h4>
            
            <button className='mt-12 lg:mt-20'>BUY TICKETS</button>
          </div>
        </div>
    </header>
  )
}

export default HeaderPage
