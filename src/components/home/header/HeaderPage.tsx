import React from 'react'

const HeaderPage = () => {
  return (
    <header>
        <div  className=' header-bg bg-style  text-white font-bold flex items-center'>
          <div className='container'>
            <h1 className='lg:text-[13rem] -mb-8'>WE LOVE</h1>
            <h1 className='text-orange lg:text-[13rem]'>LIVE EXPERIENCE</h1>
            <br />
            <h4 className='lg:text-5xl -mt-8 lg:mt-4   tracking-wider'>LIVE MUSIC.NEW ALBUM.IBIZA.SPAIN.21-08-2022</h4>
            <br />
            <button className='mt-8 '>BUY TICKETS</button>
          </div>
        </div>
    </header>
  )
}

export default HeaderPage
