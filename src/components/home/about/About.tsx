import React from 'react'

const About = () => {
  return (
    <div  className='outside_wrapper'>
      <div className='inside_wrapper'>
        <div className="2xl:flex lg:flex relative 2xl:mt-4">
          <div className='lg:w-[50%] my-12 lg:my-0'>
                <div id='about'>
                    <h2 className='font-normal font-oswald '>ABOUT ME</h2>
                    <h5 className='text-orange font-semibold'>SINGER & SONGWRITER</h5>
                </div>
                <img className='mt-14 lg:mt-52' src="/assests/images/sing1.jpg" alt="" />
          </div>

          <div className=''>
            <h1></h1>
          </div>

          <div className='lg:absolute right-0 lg:w-[53%] '>
              <img className=' ' src="/assests/images/sing2.jpg" alt="" />
          </div>
        </div>

        <div className='flex justify-end '>
              <div className='lg:w-[42%]'>
                  <p className=' right-0 bottom-0 mt-4 lg:-mt-40 2xl:-mt-40  text-justify leading-tight '>Vestibulum tempor eu risus posuere. Vivamus ex augue, tincidunt vel urna vitae, maximus luctus nunc. Vestibulum et tempus sem, eu consequat leo. In pellentesque eleifend augue a viverra.</p>
                  <button className='text-black lg:text-[20px] mt-4 lg:mt-12 2xl:mt-12'>LEARN MORE</button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default About
