import React from 'react'
import {BsFillPlayCircleFill} from 'react-icons/bs';
import {MdSkipPrevious} from 'react-icons/md'
import {MdSkipNext} from 'react-icons/md'
import {FaSignal} from 'react-icons/fa'
import {TiArrowRepeat} from 'react-icons/ti'
import {RiPlayListLine} from 'react-icons/ri'


const Album = () => {
   
  const icons = [
    {
      icon: <MdSkipPrevious/>
    },
    {
      icon: <MdSkipNext/>
    },
    {
      icon: <FaSignal/>
    },
    {
      icon: <TiArrowRepeat/>
    },
  ]

  const songName = [
    {
      title: "1. Now That We Found Love - Brain Damage"
    },
    {
      title: "2. Come With Me"
    },
    {
      title: "3. Jump Around"
    },
    {
      title: "4. Ridin Dirty"
    },
    {
      title: "5. Hate It or Love it"
    },
    {
      title: "6. I Wanna Be yours"
    },
  ]

  const media = [
    {
      name: "SPOTIFY"
    },
    {
      name: "GOOGLE PLAY"
    },
    {
      name: "APPLE MUSIC"
    },
    {
      name: "YOUTUBE"
    },
    {
      name: "DEEZER"
    },
  ]

  return (
    <>
      <div id='' className='wrapper  mb-[35rem] lg:mb-[25rem] '>
        <div className='relative top-16 lg:top-44 2xl:top-80'>
        <div className="lg:flex ">
            <div className='w-full '>
              <img src="/assests/images/album-min.png" alt="" />
            </div>
            <div className='w-full pt-6 lg:pt-8 2xl:pt-16 lg:pl-14 2xl:pl-28 '>
              <h2>NEW ALBUM</h2>
              <h5 className='text-orange font-semibold tracking-widest mb-7 lg:mb-0 2xl:mb-0'>AVAILABLE NOW</h5>
            </div>
        </div>


        <div className=' lg:w-[54%] h-max absolute right-0 lg:top-[13rem] 2xl:top-[300px] bg-dark_blue  p-7'>
              
              <div className='flex items-center gap-x-4 text-white'>
                <BsFillPlayCircleFill className='h-full w-[9%]  text-orange bg-white rounded-full' />
                  <div>
                    <h5 className='font-semibold text-sm 2xl:text-2xl'>Now That We Found Love</h5>
                    <h6 className='font-normal text-xs 2xl:text-xl 2xl:mt-2'>Brain Damage</h6>
                  </div>
              </div>

              <div className='mb-4 flex items-center gap-x-8 text-white 2xl:mt-4'>
                  <img className='h-[4px] md:h-[7px] w-40 lg:w-[85%] 2xl:w-[90%]' src="/assests/images/music-line.png" alt="" />
                  <h6>00 : 00</h6>
              </div>


              <div className='text-white  flex gap-x-2 '>
                {icons.map((item, index) => {
                  return <>
                            <a key={index} className='bg-light_blue 2xl:p-1 lg:text-2xl 2xl:text-4xl '>
                              {item.icon}
                            </a>
                            
                          </>
                })}

                <div className='flex justify-end w-full'>
                    <RiPlayListLine className='bg-light_blue p-1 lg:text-2xl 2xl:text-5xl text-right ' />
                </div>
              </div>

              <div className='text-white h-[11rem] lg:h-[16rem] 2xl:h-[21.9rem] overflow-y-scroll mt-8 '>
                {songName.map((item, index) => {
                  return <>
                      <div>
                          <ul key={index} className='bg-light_blue hover:bg-orange text-xs lg:text-base 2xl:text-xl p-4 mb-1'>
                            {item.title}
                          </ul>
                      </div>
                  </>
                })}
              </div>
          </div>

          <div className='lg:w-[40%] mt-[27rem] lg:mt-20 2xl:mt-32'>
         <p className=' leading-relaxed text-justify'>Sed vulputate vitae nulla at auctor. Vestibulum tempor eu risus eu posuere. Vivamus ex augue, tincidunt vel urna vitae, maximus luctus nunc. Vestibulum et tempus sem, eu consequat leo. In pellentesque eleifend augue a viverra.</p>
       </div>

       <div className='md:w-[46%] lg:w-[46%] 2xl:w-[46%] mt-3 lg:mt-7 2xl:mt-12'>
         <div className=' grid grid-cols-3 gap-4'> 
                  {media.map((item, index) => {
                    return <div className='' key={index}>
                            <button className='w-full album-btn text-black'>{item.name}</button>
                    </div>
                  })}
           </div>
       </div>

        </div>




      </div>
    </>
  )
}

export default Album
