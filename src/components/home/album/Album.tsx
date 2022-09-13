import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {MdSkipPrevious} from 'react-icons/md'
import {MdSkipNext} from 'react-icons/md'
import {FaSignal} from 'react-icons/fa'
import {TiArrowRepeat} from 'react-icons/ti'
import {RiPlayListLine} from 'react-icons/ri'


const Album = () => {
  return (
    <div className=' container '>
      <div className='mt-80 grid lg:grid-cols-2 justify-items-center '>
          <div>
            <img src="/assests/images/album-min.png" alt="" />
          </div>

          <div className='lg:absolute lg:ml-[45rem] w-full lg:w-[538px] '>
          <div className=''>

            <div className='mt-32 lg:ml-44'>
              <h2>NEW ALBUM</h2>
              <h5 className='text-orange font-semibold tracking-widest text-4xl'>AVAILABLE NOW</h5>
              
            </div>

            <div className='bg-dark_blue mt-32 p-20  '>
              <div className='flex items-center gap-x-4 text-white'>
                  <BsFillPlayCircleFill className='h-full w-[10%]  text-orange bg-white rounded-full' />
                  

                  <div>
                  <h5 className='font-bold text-3xl'>Now That We Found Love</h5>
                  <h6 className='font-normal'>Brain Damage</h6>
                  </div>

              </div>

              <div className='mb-4 flex items-center gap-x-8 text-white mt-8'>
                <img className='h-[7px] w-[80%]' src="/assests/images/music-line.png" alt="" />
                <h6>00 : 00</h6>
              </div>

              <div className='text-white flex gap-x-2 '>
                <MdSkipPrevious className='bg-light_blue h-full w-[5%]'/>
                <MdSkipNext className='bg-light_blue h-full w-[5%]'/>
                <FaSignal className='bg-light_blue h-full w-[5%] text-orange'/>
                <TiArrowRepeat className='bg-light_blue h-full w-[5%]'/>
                <RiPlayListLine className='bg-light_blue h-full w-[5%] ml-[33rem] text-center'/>
              </div>

              <div className='text-white h-72 overflow-y-scroll mt-12 '>
                <ul className='bg-light_blue hover:bg-orange p-4 mb-1'>1. Now That We Found Love - Brain Damage</ul>
                <ul className='bg-light_blue hover:bg-orange p-4 mb-1'>2. Come With Me</ul>
                <ul className='bg-light_blue hover:bg-orange p-4 mb-1'>3. Jump Around</ul>
                <ul className='bg-light_blue hover:bg-orange p-4 mb-1'>4. Ridin Dirty</ul>
                <ul className='bg-light_blue hover:bg-orange p-4 mb-1'>5. Hate It or Love it</ul>
                <ul className='bg-light_blue hover:bg-orange p-4'>6. I Wanna Be yours</ul>
              </div>

            </div>

            </div>

          </div>
      </div>

      <div className='lg:w-[40%] mt-32'>
        <p className='text-4xl leading-relaxed text-justify'>Sed vulputate vitae nulla at auctor. Vestibulum tempor eu risus eu posuere. Vivamus ex augue, tincidunt vel urna vitae, maximus luctus nunc. Vestibulum et tempus sem, eu consequat leo. In pellentesque eleifend augue a viverra.</p>
      </div>
      <div className='lg:w-[46%] mt-12'>
        <div className='grid grid-cols-3 mt-4 gap-x-3'> 
              <button className='album-btn'>SPOTIFY</button>
              <button className='album-btn'>GOOGLE PLAY</button>
              <button className='album-btn'>APPLE MUSIC</button>
          </div>

          <div className='grid grid-cols-3 mt-4 gap-x-3'> 
              <button className='album-btn'>YOUTUBE</button>
              <button className='album-btn'>DEEZER</button>
          </div>
      </div>


    </div>
  )
}

export default Album
